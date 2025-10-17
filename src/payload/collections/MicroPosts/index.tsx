import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
} from '@payloadcms/plugin-seo/fields'

import type { CollectionConfig } from 'payload'

import { locales } from 'src/i18n-config'
import { AutoTranslate } from 'src/payload/fields/autoTranslate'
import { slugField } from 'src/payload/fields/slug'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import dedupeCronTranslationLocalesQueuedHook from './dedupeCronTranslationLocalesQueuedHook'
import maybeAddAuthorSlugHook from './maybeAddAuthorSlugHook'
import maybeFallbackSEOImageHook from './maybeFallbackSEOImageHook'
import maybeReplaceMarkdownLink from './maybeReplaceMarkdownLinks'
export const MicroPosts: CollectionConfig<'micro_posts'> = {
  labels: {
    plural: 'Micro Posts',
    singular: 'Micro Post',
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
    components: {
      edit: {
        beforeDocumentControls: ['@/components/ImageGenerator/GenerateImageButton'],
      },
    },
  },

  fields: [
    AutoTranslate,
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      maxLength: 100,
    },
    {
      name: 'cronTranslationLocalesQueued',
      type: 'select',
      hasMany: true,
      admin: {
        isClearable: true,
        readOnly: false,
      },
      options: locales.map((locale) => ({ label: locale, value: locale })),
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
      maxLength: 4000,
      minLength: 2,
      admin: {
        components: {
          Field: '/payload/components/RichTextMarkdownField',
        },
      },
    },
    slugField('slug', {
      unique: true,
      required: true,
      localized: false,
    }),

    {
      name: 'tags',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'tags',
      label: 'Tags',
      required: true,
    },

    {
      type: 'tabs',
      label: 'Other',
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
              relationTo: 'media',
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
          ],
        },
      ],
    },

    {
      name: 'links',
      type: 'join',
      admin: {},
      collection: 'micro_post_internal_links',
      on: 'source_note',
      label: 'Links',
    },
    {
      admin: {},
      name: 'targeted_from_note_links',
      type: 'join',
      collection: 'micro_post_internal_links',
      on: 'target_note',
      label: 'Targeted From Note Links',
    },

    {
      name: 'externalLinks',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      relationTo: 'micro_post_external_links',
      label: 'External Links',
      hasMany: true,
      required: false,
      localized: false,
    },

    {
      name: 'social',
      type: 'group',
      label: 'Social',
      fields: [
        {
          name: 'x',
          type: 'group',
          label: 'X',
          fields: [
            {
              type: 'checkbox',
              name: 'autoPost',
              label: 'Post to X',
              defaultValue: false,
            },
            {
              type: 'checkbox',
              name: 'autoPosted',
              label: 'Posted to X',
              defaultValue: false,
            },
            {
              type: 'date',
              name: 'autoPostedAt',
              label: 'Date posted to X',
              defaultValue: undefined,
              admin: {
                readOnly: true,
              },
            },
          ],
        },
      ],
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
    {
      name: 'authorSlug',
      type: 'text', // This makes it queryable in "where" conditions
      admin: {
        readOnly: true, // Optional: make it read-only
      },
      localized: false,
    },
  ],
  hooks: {
    beforeChange: [
      dedupeCronTranslationLocalesQueuedHook,
      maybeAddAuthorSlugHook,
      maybeFallbackSEOImageHook,
      maybeReplaceMarkdownLink,
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
