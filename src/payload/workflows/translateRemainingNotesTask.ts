import type { WorkflowConfig } from 'payload'
import { locales } from 'src/i18n-config'

const translateRemainingNotesTask = {
  queue: 'default',
  retries: 1,
  schedule: [
    {
      cron: '0/10 * * * *', // Every 10 minutes
      queue: 'default',
    },
  ],
  slug: 'localizeRemainedDocuments',
  label: 'Localize remained documents',
  handler: async ({ req }) => {
    const { payload } = req

    for (const locale of locales) {
      const posts = await payload.find({
        collection: 'micro_posts',
        locale: 'en-US', //thi sgi
        where: {
          [`content.${locale}`]: {
            exists: false,
          },
          content: {
            not_equals: '',
          },
          cronTranslationLocalesQueued: {
            not_equals: locale,
          },
        },
        limit: 100,
      })
      for (const post of posts.docs) {
        await payload.update({
          collection: 'micro_posts',
          id: post.id,
          data: {
            cronTranslationLocalesQueued: [...(post.cronTranslationLocalesQueued || []), locale],
          },
        })
      }
      for (const post of posts.docs) {
        await payload.jobs.queue({
          task: 'translateDocument',
          input: {
            postID: post.id,
            collection: 'micro_posts',
            sourceLocale: 'en-US',
            targetLocale: locale,
            userId: undefined,
          },
        })
      }
    }
  },
} as WorkflowConfig<'localizeRemainedDocuments'>
export default translateRemainingNotesTask
