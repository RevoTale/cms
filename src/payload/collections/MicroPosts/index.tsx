import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField
} from '@payloadcms/plugin-seo/fields'


import type { CollectionConfig } from 'payload'

import { AutoTranslate } from 'src/payload/fields/autoTranslate'
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
    AutoTranslate,
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
      label: "Other",
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
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
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
      name: 'social',
      type: 'group',
      label: 'Social',
      fields: [
        {
          name: 'x',
          type:'group',
          label: 'X',
          fields: [
            {
              type: 'checkbox',
              name: 'autoPost',
              label: 'Post to X',
              defaultValue: false
            },
            {
              type: 'checkbox',
              name: 'autoPosted',
              label: 'Posted to X',
              defaultValue: false
            },
            {
              type: 'date',
              name: 'autoPostedAt',
              label: 'Date posted to X',
              defaultValue: undefined,
              admin: {
                readOnly: true
              }
            }
          ]
        }
      ]   
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

        // Set fallback meta image if not provided
        if (!data.meta?.image && data.attachment) {
          // Fetch the attachment to validate it's an image
          const attachment = await req.payload.findByID({
            collection: 'media',
            id: typeof data.attachment === 'string' ? data.attachment : data.attachment.id,
          });
          
          // Check if the attachment is an image
          if (attachment && attachment.mimeType && attachment.mimeType.startsWith('image/')) {
            if (!data.meta) {
              data.meta = {};
            }
            data.meta.image = data.attachment;
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
