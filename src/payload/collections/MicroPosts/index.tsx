import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField
} from '@payloadcms/plugin-seo/fields'


import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const MicroPosts: CollectionConfig = {
  labels: {
    plural: 'Micro Posts',
    singular: 'Micro Post'
  },
  slug: 'micro_posts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['updatedAt'],
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      maxLength: 90
    },
    {
      name: 'attachment',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Attachment',
    },
    {
      name: 'content',
      type: 'textarea',
      label: false,
      required: true,
      localized: true,
      maxLength: 3000,
      minLength: 3
    },
    {
      name: 'tags',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'tags',
      label: "Tags",
      required: true
    },
    {
      type: 'tabs',
      tabs: [
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
              relationTo: 'media'
            }),
            MetaDescriptionField({}),
          ],
        },
      ],
    },
    {
      name: 'authorSlug',
      type: 'text', // This makes it queryable in "where" conditions
      admin: {
        readOnly: true,  // Optional: make it read-only
      },
      localized: false
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
      admin: { position: 'sidebar', },
      hasMany: true,
      required: true,
      localized: false
    },
  ],
  hooks: {
    afterChange: [],

    beforeChange: [
      async ({ data, req }) => {
        if (data.authors && data.authors.length > 0) {
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
        interval: 3000, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
