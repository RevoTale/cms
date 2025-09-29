// storage-adapter-import-placeholder

import { seoPlugin } from '@payloadcms/plugin-seo'
import type { GenerateDescription, GenerateURL } from '@payloadcms/plugin-seo/types'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import OpenAI from 'openai'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'; // editor-import
import type { MicroPost, Post } from 'src/payload-types'
import { fileURLToPath } from 'url'
import Authors from './payload/collections/Authors'

import type { GenerateFileURL } from '@payloadcms/plugin-cloud-storage/types'
import { migrations } from './migrations'
import { Media } from './payload/collections/Media'
import MicroPostExternalLink from './payload/collections/MicroPostExternalLink'
import MicroPostInternalLink from './payload/collections/MicroPostInternalLink'
import { MicroPosts } from './payload/collections/MicroPosts'
import { Posts } from './payload/collections/Posts'
import Tags from './payload/collections/Tags'
import Users from './payload/collections/Users'
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
1. Length 100–155 characters (absolute max 160, count every character including spaces).
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
const generateURL: GenerateURL<Post> = ({ doc }) => {
  return doc.slug
    ? `${process.env.PAYLOAD_PUBLIC_SERVER_URL ?? ''}/blog/${doc.slug}`
    : (process.env.PAYLOAD_PUBLIC_SERVER_URL ?? '')
}
const sss: GenerateFileURL = ({ filename, prefix = '' }) => {
  return `https://cms.s3.revotale.com/${prefix}/${filename}`
}

const serverURl: string | null = process.env.PAYLOAD_PUBLIC_SERVER_URL ?? null
if (!serverURl) {
  throw new Error('Server url is not defined')
}
const serverDomain = new URL(serverURl).hostname
const hostnameWithProtocol = `https://${serverDomain}`
const bucket = process.env.S3_BUCKET ?? ''
const enableS3 = process.env.NODE_ENV === 'production' && bucket !== ''
console.log('S3 enabled', enableS3)
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
export default buildConfig({
  graphQL: {
    disablePlaygroundInProduction: false,
    schemaOutputFile: path.resolve(dirname, './graphql/schema.graphql'),
  },
  localization: {
    locales: ['en-US', 'uk-UA', 'de-DE', 'hi-IN', 'ja-JP', 'ru-RU', 'fr-FR', 'es-ES'],
    defaultLocale: 'en-US',
    fallback: true,
  },
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

  db:  postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    prodMigrations:migrations
  }),
  serverURL: hostnameWithProtocol,
  collections: [
    Posts,
    Media,
    Users,
    Tags,
    Authors,
    MicroPosts,
    MicroPostInternalLink,
    MicroPostExternalLink,
  ],
  cors: [hostnameWithProtocol].filter(Boolean),
  csrf: [hostnameWithProtocol].filter(Boolean),
  globals: [],
  plugins: [
    /*cloudStorage({
      collections: {
        'media': {
          disableLocalStorage: true,
          adapter: adapter, // see docs for the adapter you want to use
        },
      },
    }),*/
    /*payloadAiPlugin({
      collections: {
        [Posts.slug]: true,
        [MicroPosts.slug]: true,
        [Media.slug]: true,
        [Tags.slug]: true,
        [Authors.slug]: true,
      },
      debugging: false,
      disableSponsorMessage: false,
      
      generatePromptOnInit: process.env.NODE_ENV !== 'production',

      // Publicly accessible upload collection for gpt-image-1 model, for reference images. Defaults to "media".
      uploadCollectionSlug: "media"

     
    }),*/
    s3PluginConfig,
    seoPlugin({
      generateTitle,
      generateDescription,
      generateURL,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET ?? '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
