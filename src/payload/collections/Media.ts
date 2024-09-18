import type {CollectionConfig} from 'payload'

import {anyone} from '../access/anyone'
import {authenticated} from '../access/authenticated'
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
  upload: {


    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
      },
      {
        name: 'portrait',
        width: 768,
      },
      {
        name: 'square',
        width: 1200,
      },
      {
        name: 'feature',
        height: 576,
      },
    ],
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: '/app/file-storage',
    mimeTypes: ["image/*"],
  },
}
