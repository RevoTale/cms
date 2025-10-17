/* eslint-disable no-param-reassign */
import type { CollectionBeforeChangeHook, DataFromCollectionSlug } from 'payload'
import { remark } from 'remark'
import remarkLinkRewrite from './remarkLinkRewrite'

type MicroPostData = DataFromCollectionSlug<'micro_posts'>

const MICRO_POST_PREFIX = 'micro_post://'

async function ensureExternalLinkAndAttach(
  url: string,
  req: Parameters<CollectionBeforeChangeHook<MicroPostData>>[0]['req'],
  data: Partial<MicroPostData>,
): Promise<string> {
  data.externalLinks = []
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
    !data.externalLinks?.some((l) => (typeof l === 'string' ? l === link.id : l.id === link.id))
  ) {
    data.externalLinks = [...(data.externalLinks || []), link.id]
  }

  return `external_link://${link.id}`
}

async function ensureInternalLinkTokenFromUrl(
  url: string,
  req: Parameters<CollectionBeforeChangeHook<MicroPostData>>[0]['req'],
): Promise<string | null> {
  if (!url.startsWith(MICRO_POST_PREFIX)) return null

  const microPostId = url.slice(MICRO_POST_PREFIX.length)
  const microPost = await req.payload.findByID({
    collection: 'micro_posts',
    id: microPostId,
  })

  if (!microPost) return null

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
              return await ensureExternalLinkAndAttach(url, req, data)
            }

            const internalLinkToken = await ensureInternalLinkTokenFromUrl(url, req)
            if (internalLinkToken) return internalLinkToken

            return url
          },
        })
        .process(data.content)
    ).toString()
    // Fetch the attachment to validate it's an image
  }
}

export default maybeReplaceMarkdownLink
