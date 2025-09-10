import type { CollectionConfig } from 'payload'

import { anyone } from 'src/payload/access/anyone'
import { authenticated } from 'src/payload/access/authenticated'
function isHttpsOnly(url: string): boolean {
  try {
    const urlObject = new URL(url)
    return urlObject.protocol === 'https:'
  } catch {
    // Handle invalid URL strings that throw a TypeError
    return false
  }
}
export const MicroPostExternalLink: CollectionConfig = {
  slug: 'micro_post_external_links',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  labels: {
    plural: 'MicroPost Outgoing Links',
    singular: 'MicroPost Outgoing Link',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      localized: true,
    },

    {
      name: 'note',
      type: 'relationship',
      localized: false,
      hasMany: false,
      relationTo: 'micro_posts',
      required: true,
    },
    {
      name: 'target_url',
      type: 'text',
      required: true,
      localized: false,
      validate: (value: unknown) => {
        // Custom validation logic here
        // Return true for valid, or a string for an error message
        if (!value) {
          return 'URL is required.'
        }
        if (typeof value !== 'string') {
          return 'URL must be a string.'
        }
        return isHttpsOnly(value) || 'URL must start with https://'
      },
    },
  ],
}

export default MicroPostExternalLink
