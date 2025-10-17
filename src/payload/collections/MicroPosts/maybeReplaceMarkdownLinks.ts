/* eslint-disable no-param-reassign */
import type { CollectionBeforeChangeHook, DataFromCollectionSlug } from 'payload'
import { remark } from 'remark'
import remarkLinkRewrite from './remarkLinkRewrite'
const isUrl = (str: string): boolean => {
  try {
    // eslint-disable-next-line no-new -- URL constructor used for validation
    new URL(str)
    return true
  } catch {
    return false
  }
}
const maybeReplaceMarkdownLink: CollectionBeforeChangeHook<
  DataFromCollectionSlug<'micro_posts'>
> = async ({ data, req }) => {
  if (data.content) {
    data.content = (
      await remark()
        .use(remarkLinkRewrite, {
          replacer: async (url) => {
            if (isUrl(url)) {
              const externalLinks = await req.payload.find({
                collection: 'micro_post_external_links',
                where: {
                  target_url: {
                    equals: url,
                  },
                },
              })
              let link = externalLinks.docs[0] ?? null
              if (link === null) {
                link = await req.payload.create({
                  collection: 'micro_post_external_links',
                  data: {
                    title: url,
                    target_url: url,
                  },
                })
              }
              if (
                !data.externalLinks?.some((l) =>
                  typeof l === 'string' ? l === link.id : l.id === link.id,
                )
              ) {
                data.externalLinks = [...(data.externalLinks || []), link.id]
              }
              return `external_link://${link.id}`
            }
            if (url.startsWith('micro_post://')) {
              const microPostId = url.replace('micro_post://', '')
              const microPost = await req.payload.findByID({
                collection: 'micro_posts',
                id: microPostId,
              })
              if (microPost) {
                const internalLinks = await req.payload.find({
                  collection: 'micro_post_internal_links',
                  where: {
                    source_note: {
                      equals: microPost.id,
                    },
                    target_note: {
                      equals: microPostId,
                    },
                  },
                })
                let link = internalLinks.docs[0] ?? null
                if (link === null) {
                  link = await req.payload.create({
                    collection: 'micro_post_internal_links',
                    data: {
                      source_note: microPost.id,
                      target_note: microPostId,
                    },
                  })
                }
                return `internal_link://${link.id}`
              }
            }
            return url
          },
        })
        .process(data.content)
    ).toString()
    // Fetch the attachment to validate it's an image
  }
}

export default maybeReplaceMarkdownLink
