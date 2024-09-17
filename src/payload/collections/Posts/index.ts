import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type {CollectionConfig} from 'payload'

import {authenticated} from '../../access/authenticated'
import {authenticatedOrPublished} from '../../access/authenticatedOrPublished'
import {Banner} from '../../blocks/Banner'
import {Code} from '../../blocks/Code'
import {MediaBlock} from '../../blocks/MediaBlock'
import {slugField} from '../../fields/slug'
import {generatePreviewPath} from '../../utilities/generatePreviewPath'
import {revalidatePost} from './hooks/revalidatePost'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({data}) => {
        const path = generatePreviewPath({
          path: `/posts/${typeof data?.slug === 'string' ? data.slug : ''}`,
        })
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (doc) =>
      generatePreviewPath({path: `/posts/${typeof doc?.slug === 'string' ? doc.slug : ''}`}),
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      label: 'Tags'
    },
    {
      name:'featuredImage',
      type:'upload',
      relationTo:'media',
      required:true,
      label:'Featured image'
    },

    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'content',
              type: 'textarea',
              label: false,
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({id}) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
              hasMany: true,
              relationTo: 'posts',
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
            },
          ],
          label: 'Meta',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            {
              name: 'nofollow',
              defaultValue: false,
              type: 'checkbox',
              required: true
            },
            {
              name: 'noindex',
              defaultValue: false,
              type: 'checkbox',
              required: true
            },

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true
    },
    {
      name: 'authorSlug',
      type: 'text', // This makes it queryable in "where" conditions
      admin: {
        readOnly: true,  // Optional: make it read-only
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({siblingData, value}) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'authors',
      admin:{position: 'sidebar',},
      hasMany: true,
      required: true,
    },
    slugField('title',{
      unique:true,
    }),
  ],
  hooks: {
    afterChange: [revalidatePost],

    beforeChange: [
      async ({ data, req }) => {
        if (data.authors && data.authors.length>0) {
          const author = await req.payload.findByID({
            collection: 'authors',
            id: data.authors[0],
          });
          if (author && author.slug) {
            data.authorSlug = author.slug;
          }
        }
        return data;
      },
    ],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
