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
  admin:{
     useAsTitle:'target_url',
      listSearchableFields: ['title', 'target_url', 'id'],
  },
  
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'target_url',
      type: 'text',
      required: true,
      unique:true,
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
