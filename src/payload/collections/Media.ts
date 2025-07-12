import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { AutoTranslate } from '../fields/autoTranslate'
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    AutoTranslate,
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized:true
    },
    {
      name: 'description',
      type: 'text',
      localized:true
    },
    {
      name: 'caption',
      type: 'text',
      localized:true
    },
  ],
  upload: {
    disableLocalStorage: process.env.NODE_ENV !== 'development' ? true : false,
    mimeTypes: ["image/*"],
  },
}
