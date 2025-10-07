/* eslint-disable no-param-reassign */
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import type { CollectionConfig } from 'payload'

import { AutoTranslate } from 'src/payload/fields/autoTranslate'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '../../fields/slug'
import { revalidatePost } from './hooks/revalidatePost'

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
    useAsTitle: 'title',
  },

  fields: [
    AutoTranslate,
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured image',
      localized: false,
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
              localized: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              localized: false,
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
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
              name: 'tags',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'tags',
              label: 'Tags',
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
              required: true,
              localized: false,
            },
            {
              name: 'noindex',
              defaultValue: false,
              type: 'checkbox',
              required: true,
              localized: false,
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
      name: 'authorSlug',
      type: 'text', // This makes it queryable in "where" conditions
      admin: {
        readOnly: true, // Optional: make it read-only
      },
      localized: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      localized: false,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
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
      admin: { position: 'sidebar' },
      hasMany: true,
      required: true,
      localized: false,
    },
    slugField('title', {
      unique: true,
      required: true,
      localized: false,
    }),
  ],
  hooks: {
    afterChange: [revalidatePost],

    beforeChange: [
      async ({ data, req }) => {
        if (data.authors && data.authors.length > 0) {
          const author = await req.payload.findByID({
            collection: 'authors',
            id: data.authors[0],
          })
          if (author && author.slug) {
            data.authorSlug = author.slug
          }
        }
        return data
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
