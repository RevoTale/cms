// storage-adapter-import-placeholder
import {mongooseAdapter} from '@payloadcms/db-mongodb'
import {formBuilderPlugin} from '@payloadcms/plugin-form-builder'
import {nestedDocsPlugin} from '@payloadcms/plugin-nested-docs'
import {redirectsPlugin} from '@payloadcms/plugin-redirects'
import {seoPlugin} from '@payloadcms/plugin-seo'
import {GenerateTitle, GenerateURL} from '@payloadcms/plugin-seo/types'
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'

import path from 'path'
import {buildConfig} from 'payload'
import sharp from 'sharp' // editor-import
import {Page, Post} from 'src/payload-types'
import {fileURLToPath} from 'url'
import Authors from "./payload/collections/Authors";

import Categories from './payload/collections/Categories'
import {Media} from './payload/collections/Media'
import {Pages} from './payload/collections/Pages'
import {Posts} from './payload/collections/Posts'
import Tags from "./payload/collections/Tags";
import Users from './payload/collections/Users'
import {seed} from './payload/endpoints/seed'
import {Footer} from './payload/globals/Footer/Footer'
import {Header} from './payload/globals/Header/Header'
import {revalidateRedirects} from './payload/hooks/revalidateRedirects'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateTitle: GenerateTitle<Post | Page> = ({doc}) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Post | Page> = ({doc}) => {
  return doc?.slug
    ? `${(process.env.NEXT_PUBLIC_SERVER_URL ?? '')}/${doc.slug}`
    : (process.env.NEXT_PUBLIC_SERVER_URL ?? '')
}
const s3PluginConfig = s3Storage({
  collections: {
    [Media.slug]: {
      prefix:'main_',
      disableLocalStorage:true,
      generateFileURL:({filename,prefix=''})=>{
        return `https://media.revotale.com/${prefix}/${filename}`
      }
    },
  },
  disableLocalStorage:true,
  bucket: process.env.S3_BUCKET??'',
  config: {
    endpoint:process.env.S3_ENDPOINT,
    credentials: {

      accessKeyId: process.env.S3_ACCESS_KEY_ID??'',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY??'',
    },
    region: process.env.S3_REGION,
    // ... Other S3 configuration
  },
})
export default buildConfig({
  graphQL:{
    disablePlaygroundInProduction:false,
    schemaOutputFile: path.resolve(dirname, './graphql/schema.graphql'),
  },
  localization: {
    locales: ['en-US', 'uk-UA', 'de-DE','hi-IN','ja-JP','ru-RU','fr-FR','es-ES'],
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

  // This config helps us configure global or default features that the other editors can inherit
  editor: lexicalEditor({
    features: () => {
      return [
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
        LinkFeature({
          enabledCollections: ['pages', 'posts'],
          fields: ({defaultFields}) => {
            const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
              return !('name' in field && field.name === 'url');

            })

            return [
              ...defaultFieldsWithoutUrl,
              {
                name: 'url',
                type: 'text',
                admin: {
                  condition: ({linkType}) => linkType !== 'internal',
                },
                label: ({t}) => t('fields:enterURL'),
                required: true,
              },
            ]
          },
        }),
      ]
    },
  }),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  serverURL:process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Posts, Media, Categories, Users,Tags,Authors],
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  endpoints: [
    // The seed endpoint is used to populate the database with some example data
    // You should delete this endpoint before deploying your site to production
    {
      handler: seed,
      method: 'get',
      path: '/seed',
    },
  ],
  globals: [Header, Footer],
  plugins: [
    /*cloudStorage({
      collections: {
        'media': {
          disableLocalStorage: true,
          adapter: adapter, // see docs for the adapter you want to use
        },
      },
    }),*/
    s3PluginConfig,
    redirectsPlugin({
      collections: ['pages', 'posts'],
      overrides: {
        fields: ({defaultFields}) => {
          return defaultFields.map((field) => {
            if ('name' in field && field.name === 'from') {
              return {
                ...field,
                admin: {
                  //description: 'You will need to rebuild the website when changing this field.',
                },
              }
            }
            return field
          })
        },
        hooks: {
          afterChange: [revalidateRedirects],
        },
      },
    }),
    nestedDocsPlugin({
      collections: ['categories'],
    }),
    seoPlugin({
      generateTitle,
      generateURL,
    }),
    formBuilderPlugin({
      fields: {
        payment: false,
      },
      formOverrides: {
        fields: ({defaultFields}) => {
          return defaultFields.map((field) => {
            if ('name' in field && field.name === 'confirmationMessage') {
              return {
                ...field,
                editor: lexicalEditor({
                  features: ({rootFeatures}) => {
                    return [
                      ...rootFeatures,
                      FixedToolbarFeature(),
                      HeadingFeature({enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4']}),
                    ]
                  },
                }),
              }
            }
            return field
          })
        },
      },
    }),
  ],
  secret: (process.env.PAYLOAD_SECRET ?? ''),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
