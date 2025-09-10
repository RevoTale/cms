import type { CollectionConfig } from 'payload'

import { anyone } from 'src/payload/access/anyone'
import { authenticated } from 'src/payload/access/authenticated'
export const MicroPostInternalLink: CollectionConfig = {
  slug: 'micro_post_internal_links',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  labels: {
    plural: 'MicroPost Links',
    singular: 'MicroPost Link',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      localized: true,
    },

    {
      name: 'source_note',
      type: 'relationship',
      localized: false,
      hasMany: false,
      relationTo: 'micro_posts',
      required: true,
    },
    {
      name: 'target_note',
      type: 'relationship',
      localized: false,
      hasMany: false,
      relationTo: 'micro_posts',
      required: true,
    },
  ],
}

export default MicroPostInternalLink
