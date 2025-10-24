import type { TaskConfig } from 'payload'
import translateHandler from './translate/translateHandler'

const documentTranslationTask = {
  retries: 1,
  slug: 'translateDocument',
  inputSchema: [
    {
      name: 'postID',
      type: 'text',
      required: true,
    },
    {
      name: 'sourceLocale',
      type: 'text',
      required: true,
    },
    {
      name: 'collection',
      type: 'text',
      required: true,
    },
    {
      name: 'userId',
      type: 'text',
      required: false,
    },
    {
      name: 'targetLocale',
      type: 'text',
      required: true,
    },
  ],
  handler: translateHandler,
} as TaskConfig<'translateDocument'>
export default documentTranslationTask
