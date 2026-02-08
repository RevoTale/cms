import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
} from '@payloadcms/plugin-seo/fields'

import type {
  CollectionBeforeChangeHook,
  CollectionBeforeValidateHook,
  CollectionConfig,
  DataFromCollectionSlug,
  FieldHook,
  Validate,
} from 'payload'

import { locales } from 'src/i18n-config'
import { AutoTranslate } from 'src/payload/fields/autoTranslate'
import { slugField } from 'src/payload/fields/slug'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import dedupeCronTranslationLocalesQueuedHook from './dedupeCronTranslationLocalesQueuedHook'
import maybeAddAuthorSlugHook from './maybeAddAuthorSlugHook'
import maybeFallbackSEOImageHook from './maybeFallbackSEOImageHook'
import maybeReplaceMarkdownLink from './maybeReplaceMarkdownLinks'

const SHORT_POST_MAX = 255
type MicroPostData = DataFromCollectionSlug<'micro_posts'>

const getPostTypeFromContent = (content: unknown): 'short' | 'long' => {
  if (typeof content !== 'string') {
    if (!content || typeof content !== 'object') {
      return 'short'
    }

    const localizedValues = Object.values(content)
    const hasLongVariant = localizedValues.some(
      (localizedValue) =>
        typeof localizedValue === 'string' && localizedValue.length >= SHORT_POST_MAX,
    )

    return hasLongVariant ? 'long' : 'short'
  }

  return content.length < SHORT_POST_MAX ? 'short' : 'long'
}

const getPostTypeFromData = (data: Partial<MicroPostData> | undefined): 'short' | 'long' =>
  getPostTypeFromContent(data?.content)

const hasNonEmptyText = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0

const validateLongPostTitle: Validate<string, Partial<MicroPostData>> = (value, { data }) => {
  if (getPostTypeFromData(data) === 'long' && !hasNonEmptyText(value)) {
    return 'Title is required for long posts.'
  }

  return true
}

const validateShortPostContent: Validate<
  string,
  Partial<MicroPostData>,
  Partial<MicroPostData>
> = (value, { siblingData }) => {
  const postType = getPostTypeFromData(siblingData)
  if (postType === 'short' && typeof value === 'string' && value.length >= SHORT_POST_MAX) {
    return `Short posts must be less than ${SHORT_POST_MAX} characters.`
  }

  return true
}

const formatSlugValue = (value: string): string =>
  value
    .replace(/ /gv, '-')
    .replace(/[^\w-]+/gv, '')
    .toLowerCase()

const pickFirstText = (value: unknown): string | undefined => {
  if (typeof value === 'string' && value.trim().length > 0) {
    return value
  }

  if (!value || typeof value !== 'object') {
    return undefined
  }

  for (const localizedValue of Object.values(value as Record<string, unknown>)) {
    if (typeof localizedValue === 'string' && localizedValue.trim().length > 0) {
      return localizedValue
    }
  }

  return undefined
}

const getSlugSource = (data: Partial<MicroPostData> | undefined): string | undefined =>
  pickFirstText(data?.title) ?? pickFirstText(data?.content)

const getID = (value: unknown): number | string | undefined => {
  if (typeof value === 'number' || typeof value === 'string') {
    return value
  }

  if (!value || typeof value !== 'object' || !('id' in value)) {
    return undefined
  }

  const id = (value as { id?: unknown }).id
  if (typeof id === 'number' || typeof id === 'string') {
    return id
  }

  return undefined
}

const formatMicroPostSlug: FieldHook<MicroPostData, string | undefined> = ({
  data,
  originalDoc,
  value,
}) => {
  if (typeof value === 'string' && value.trim().length > 0) {
    return formatSlugValue(value)
  }

  const source = getSlugSource(data) ?? getSlugSource(originalDoc)
  if (!source) {
    return value
  }

  return formatSlugValue(source)
}

const applyDefaultAuthorsBeforeValidateHook: CollectionBeforeValidateHook<MicroPostData> = async ({
  data,
  operation,
  req,
}) => {
  if (operation !== 'create' || !data) {
    return data
  }

  if (Array.isArray(data.authors) && data.authors.length > 0) {
    return data
  }

  const latestMicroPosts = await req.payload.find({
    collection: 'micro_posts',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    sort: '-updatedAt',
  })

  const lastMicroPost = latestMicroPosts.docs[0]
  const lastAuthorIDs =
    lastMicroPost?.authors
      ?.map((author) => getID(author))
      .filter((authorID): authorID is number | string => authorID !== undefined) ?? []

  if (lastAuthorIDs.length > 0) {
    return {
      ...data,
      authors: lastAuthorIDs,
    }
  }

  const latestAuthors = await req.payload.find({
    collection: 'authors',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    sort: '-updatedAt',
  })

  const fallbackAuthorID = getID(latestAuthors.docs[0])
  if (fallbackAuthorID === undefined) {
    return data
  }

  return {
    ...data,
    authors: [fallbackAuthorID],
  }
}

const derivePostTypeBeforeValidateHook: CollectionBeforeValidateHook<MicroPostData> = ({
  data,
}) => {
  if (!data) {
    return data
  }

  return {
    ...data,
    post_type: getPostTypeFromContent(data.content),
  }
}

const derivePostTypeBeforeChangeHook: CollectionBeforeChangeHook<MicroPostData> = ({ data }) => {
  if (!data) {
    return data
  }

  return {
    ...data,
    post_type: getPostTypeFromContent(data.content),
  }
}

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
      beforeListTable: ['/payload/components/MicroPosts/MissingTranslationFilterButton'],
      edit: {
        beforeDocumentControls: ['@/components/ImageGenerator/GenerateImageButton'],
      },
    },
    listSearchableFields: ['title', 'content'],
  },
  enableQueryPresets: true,

  fields: [
    AutoTranslate,
    {
      name: 'title',
      type: 'text',
      required: false,
      localized: true,
      maxLength: 100,
      admin: {
        description: 'Required only for long posts (255+ chars).',
      },
      validate: validateLongPostTitle,
    },
    {
      name: 'cronTranslationLocalesQueued',
      type: 'select',
      hasMany: true,
      admin: {
        readOnly: true,
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
      name: 'post_type',
      type: 'select',
      required: true,
      label: 'Post Type',
      localized: true,
      defaultValue: 'short',
      admin: {
        readOnly: true,
      },
      options: [
        { label: 'Short', value: 'short' },
        { label: 'Long', value: 'long' },
      ],
    },
    {
      name: 'content',
      type: 'textarea',
      label: false,
      required: true,
      localized: true,
      maxLength: 10000,
      minLength: 2,
      validate: validateShortPostContent,
      admin: {
        components: {
          Field: '/payload/components/RichTextMarkdownField',
        },
      },
    },
    slugField('title', {
      unique: true,
      required: true,
      localized: false,
      hooks: {
        beforeValidate: [formatMicroPostSlug],
      },
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
      required: false,
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
      name: 'linkedMicroPosts',
      type: 'relationship',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      relationTo: 'micro_posts',
      label: 'Linked Micro Posts',
      hasMany: true,
      required: false,
      unique: true,
      localized: true,
    },

    {
      name: 'externalLinks',
      type: 'relationship',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      relationTo: 'micro_post_external_links',
      label: 'External Links',
      hasMany: true,
      required: false,
      localized: true,
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
    beforeValidate: [derivePostTypeBeforeValidateHook, applyDefaultAuthorsBeforeValidateHook],
    beforeChange: [
      derivePostTypeBeforeChangeHook,
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
