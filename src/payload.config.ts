/* eslint-disable no-param-reassign -- Payload config callbacks intentionally mutate objects from third-party plugin APIs. */
// storage-adapter-import-placeholder

import { seoPlugin } from '@payloadcms/plugin-seo'
import type { GenerateDescription, GenerateURL } from '@payloadcms/plugin-seo/types'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import OpenAI from 'openai'
import { buildConfig } from 'payload'
import type { PayloadRequest, TypedLocale } from 'payload'
import sharp from 'sharp' // editor-import
import type { MicroPost, Post, Tag } from 'src/payload-types'
import Authors from './payload/collections/Authors'

import type { GenerateFileURL } from '@payloadcms/plugin-cloud-storage/types'
import { locales } from './i18n-config'
import { migrations } from './migrations'
import AICallLogs from './payload/collections/AICallLog'
import { Media } from './payload/collections/Media'
import MicroPostExternalLink from './payload/collections/MicroPostExternalLink'
import { MicroPosts } from './payload/collections/MicroPosts'
import { Posts } from './payload/collections/Posts'
import Tags from './payload/collections/Tags'
import Users from './payload/collections/Users'
import { seed } from './payload/endpoints/seed'
import createSearchPlugin from './payload/plugins/createSearchPlugin'
import documentTranslationTask from './payload/tasks/documentTranslationTask'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const key = process.env.OPENAI_API_KEY
const client = key
  ? new OpenAI({
      apiKey: key, // This is the default and can be omitted
    })
  : null
const generateTitle: GenerateDescription<Post | MicroPost> = async ({ doc }) => {
  if (client === null) {
    throw new Error('OpenAI client is not initialized')
  }
  const response = await client.responses.create({
    model: 'gpt-5',
    instructions: `
 You are a short descriptive title generator.

WHEN I SEND THE NEXT MESSAGE  
Reply with **one single line** containing exactly the meta‑title text, nothing else.

HARD RULES
1. Length 30–60 characters (count every character, including spaces).
2. FIRST‑PERSON
   • If the source includes my own experience, use first person (e.g. “I…”).
   • If none appear, write in neutral third person (no “you”).
3. EARLY TOPIC
   • Mention the main tool/topic within the first 4 words.
4. TONE
   • No imperatives or hype verbs/adjectives: avoid effortlessly, discover, unlock, ultimate, boost, automate, etc.
   • No calls to action or hashtags.
5. EXTERNAL STUFF
   • Use a brand/site name or emoji only if it already exists in the source.
6. PUNCTUATION & CASE
   • No exclamation marks unless the source has one.
   • Sentence case unless the source text is clearly Title Case.
   • End with no punctuation unless the source ends that way.
7. FORMAT
   • Output ONLY the title string—no quotes `,
    input: `
    Title: ${doc.title},

    Markdown Content: ${doc.content},

    Authors: ${doc.authors.map((a) => (typeof a === 'string' ? a : a.name)).join(', ')},
`,
  })

  return response.output_text
}
const generateDescription: GenerateDescription<Post | MicroPost> = async ({ doc }) => {
  if (client === null) {
    throw new Error('OpenAI client is not initialized')
  }
  const response = await client.responses.create({
    model: 'gpt-5',
    instructions: `
You are a meta‑description generator.

WHEN I SEND THE NEXT MESSAGE  
Reply with **one single line** containing exactly the meta‑description, nothing else.

HARD RULES
1. Length 100–155 characters (absolute max 160, count every character including spaces).
2. FIRST‑PERSON
   • If the source includes “I”, “my”, or “we”, keep at least one of them.  
     Preferred patterns: “I …”, “My …”, “We …”.  
   • If none appear, write in neutral third person (no “you”).
3. EARLY TOPIC
   • Mention the main tool/topic within the first 10 words.
4. TONE
   • No imperatives or hype words: avoid effortlessly, discover, unlock, ultimate, boost, automate, etc.  
   • No sales calls to action, hashtags, or buzz‑phrases.  
   • No brand/site name unless it exists in the source text.
5. STYLE
   • One emoji max, and only if that exact emoji is in the source.  
   • No exclamation marks unless the source has one.  
   • Simple present tense wherever possible.  
   • End with a single period.
6. FORMAT
   • Output ONLY the description string—no quotes, markdown, or commentary.
`,
    input: `
    Title: ${doc.title},

    Markdown Content: ${doc.content},

    Authors: ${doc.authors.map((a) => (typeof a === 'string' ? a : a.name)).join(', ')},
`,
  })

  return response.output_text
}
const generateURL: GenerateURL<Post> = ({ doc }) => doc.slug
    ? `${process.env.PAYLOAD_PUBLIC_SERVER_URL ?? ''}/blog/${doc.slug}`
    : (process.env.PAYLOAD_PUBLIC_SERVER_URL ?? '')
const sss: GenerateFileURL = ({ filename, prefix = '' }) => `https://cms.s3.revotale.com/${prefix}/${filename}`

const serverURl: string | undefined = process.env.PAYLOAD_PUBLIC_SERVER_URL ?? undefined

const enableCron = process.env.ENABLE_CRON === '1'
const serverDomain = serverURl ? new URL(serverURl).hostname : undefined
const hostnameWithProtocol = serverDomain ? `https://${serverDomain}` : undefined
const DEFAULT_API_DEPTH = 1
const DEFAULT_API_MAX_DEPTH = 2
const DEFAULT_GRAPHQL_MAX_COMPLEXITY = 600
const toNonNegativeInt = (value: string | undefined, fallback: number): number => {
  const parsed = Number.parseInt(value ?? '', 10)
  return Number.isNaN(parsed) || parsed < 0 ? fallback : parsed
}

const toPositiveInt = (value: string | undefined, fallback: number): number => {
  const parsed = Number.parseInt(value ?? '', 10)
  return Number.isNaN(parsed) || parsed < 1 ? fallback : parsed
}

const payloadDefaultDepth = toNonNegativeInt(process.env.PAYLOAD_API_DEFAULT_DEPTH, DEFAULT_API_DEPTH)
const payloadMaxDepth = Math.max(payloadDefaultDepth, toNonNegativeInt(process.env.PAYLOAD_API_MAX_DEPTH, DEFAULT_API_MAX_DEPTH))
const payloadGraphQLMaxComplexity = toPositiveInt(process.env.PAYLOAD_GRAPHQL_MAX_COMPLEXITY, DEFAULT_GRAPHQL_MAX_COMPLEXITY)
const bucket = process.env.S3_BUCKET ?? ''
const enableS3 = true //Added alway true because due to the following issues https://github.com/payloadcms/payload/issues/12475
const s3PluginConfig = s3Storage({
  collections: {
    [Media.slug]: {
      prefix: 'main_',
      disableLocalStorage: true,
      generateFileURL: sss,
      upload: {
        disableLocalStorage: true,
      },
    },
  },
  enabled: enableS3,
  disableLocalStorage: true,
  bucket,
  config: {
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
    },
    region: process.env.S3_REGION,
    // ... Other S3 configuration
  },
})

const gqlLocaleToPayloadLocale = (locale: unknown): TypedLocale | undefined => {
  if (typeof locale !== 'string' || locale.length === 0) {
    return undefined
  }

  const localeWithDash = locale.replace(/_/gv, '-')
  return locales.find((availableLocale) => availableLocale === localeWithDash)
}

const toTagId = (tag: string | Tag): string => typeof tag === 'string' ? tag : tag.id

export default buildConfig({
  defaultDepth: payloadDefaultDepth,
  graphQL: {
    disableIntrospectionInProduction: true,
    disablePlaygroundInProduction: true,
    maxComplexity: payloadGraphQLMaxComplexity,
    schemaOutputFile: path.resolve(dirname, './graphql/schema.graphql'),
    queries: (GraphQL, graphQLContext) => {
      const tagType = graphQLContext.collections.tags?.graphQL?.type

      if (!tagType) {
        throw new Error('Missing GraphQL type for the "tags" collection.')
      }

      return {
        availableTagsByMicroPostType: {
          type: new GraphQL.GraphQLNonNull(
            new GraphQL.GraphQLList(new GraphQL.GraphQLNonNull(tagType)),
          ),
          args: {
            locale: {
              type: graphQLContext.types.localeInputType ?? GraphQL.GraphQLString,
            },
            postType: {
              type: GraphQL.GraphQLString,
            },
          },
          resolve: async (
            _source: unknown,
            args: { locale?: string; postType?: string },
            context: { req: PayloadRequest },
          ) => {
            const locale = gqlLocaleToPayloadLocale(args?.locale)
            const postType = args?.postType
            const payload = context.req.payload

            if (postType && postType !== 'short' && postType !== 'long') {
              throw new Error('postType must be either "short" or "long".')
            }

            const where: {
              _status: {
                equals: 'published'
              }
              post_type?: {
                equals: 'short' | 'long'
              }
            } = {
              _status: {
                equals: 'published',
              },
            }

            if (postType === 'short' || postType === 'long') {
              where.post_type = {
                equals: postType,
              }
            }

            const microPostsResult = await payload.find({
              collection: 'micro_posts',
              depth: 0,
              locale,
              pagination: false,
              select: {
                tags: true,
              },
              where,
            })
            const tagIds = Array.from(
              new Set(
                microPostsResult.docs.flatMap((microPost) =>
                  microPost.tags.map(toTagId),
                ),
              ),
            )

            if (tagIds.length === 0) {
              return []
            }

            const tagsResult = await payload.find({
              collection: 'tags',
              depth: 0,
              locale,
              pagination: false,
              sort: 'title',
              where: {
                id: {
                  in: tagIds,
                },
              },
            })

            return tagsResult.docs
          },
        },
      }
    },
  },
  localization: {
    locales,
    defaultLocale: 'en-US',
    fallback: true,
  },
  endpoints: [
    {
      path: '/seed',
      method: 'get',
      handler: seed,
    },
  ],
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['/payload/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['/payload/components/BeforeDashboard'],
      graphics: {
        Logo: '/graphics/Logo#default',
        Icon: '/graphics/Icon#default',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },

  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    push: false,
    idType: 'uuid',
    prodMigrations: migrations,
  }),
  maxDepth: payloadMaxDepth,
  serverURL: hostnameWithProtocol,
  collections: [Posts, Media, Users, Tags, Authors, AICallLogs, MicroPosts, MicroPostExternalLink],
  cors: hostnameWithProtocol ? [hostnameWithProtocol] : undefined,
  csrf: hostnameWithProtocol ? [hostnameWithProtocol] : undefined,
  globals: [],

  jobs: {
    addParentToTaskLog: true,
    jobsCollectionOverrides: ({ defaultJobsCollection }) => {
      defaultJobsCollection.admin ||= {}

      defaultJobsCollection.admin.hidden = false
      return defaultJobsCollection
    },
    autoRun: [
      {
        queue: 'default',
        limit: 10,
        cron: '0/10 * * * *', // Every 10 minutes
      },
    ],
    shouldAutoRun: async () => 
      // Tell Payload if it should run jobs or not. This function is optional and will return true by default.
      // This function will be invoked each time Payload goes to pick up and run jobs.
      // If this function ever returns false, the cron schedule will be stopped.
       enableCron
    ,

    // workflows: [tranlateRemainingNotesTask], It is broken. Temporary disable
    tasks: [documentTranslationTask],
  },
  plugins: [
    s3PluginConfig,
    seoPlugin({
      generateTitle,
      generateDescription,
      generateURL,
    }),
    createSearchPlugin(),
  ],
  secret: process.env.PAYLOAD_SECRET ?? 'some_fallback',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
