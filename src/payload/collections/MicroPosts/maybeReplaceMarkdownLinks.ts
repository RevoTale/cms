/* eslint-disable no-param-reassign */
import type { CollectionBeforeChangeHook, DataFromCollectionSlug } from 'payload'
import { remark } from 'remark'
import type { MicroPost } from 'src/payload-types'
import remarkLinkRewrite from './remarkLinkRewrite'

type MicroPostData = DataFromCollectionSlug<'micro_posts'>

const MICRO_POST_PREFIX = 'micro_post://'

async function ensureExternalLinkAndAttach(
  url: string,
  req: Parameters<CollectionBeforeChangeHook<MicroPostData>>[0]['req'],
  data: Partial<MicroPostData>,
): Promise<string> {
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

  return `externallink://${link.id}`
}

async function ensureInternalLinkTokenFromUrl(
  data: Partial<MicroPost>,
  url: string,
  req: Parameters<CollectionBeforeChangeHook<MicroPostData>>[0]['req'],
): Promise<string | null> {
  if (!url.startsWith(MICRO_POST_PREFIX) || data.id === undefined) return null

  const targetId = url.slice(MICRO_POST_PREFIX.length)
  const sourceMicroPost = await req.payload.findByID({
    collection: 'micro_posts',
    id: data.id,
  })

  if (!sourceMicroPost) {
    throw new Error(`Source micro post with ID ${data.id} not found.`)
  }

  const internalLinks = await req.payload.find({
    collection: 'micro_post_internal_links',
    where: {
      source_note: {
        equals: sourceMicroPost.id,
      },
      target_note: {
        equals: targetId,
      },
    },
  })

  let link = internalLinks.docs[0] ?? null
  if (link === null) {
    link = await req.payload.create({
      collection: 'micro_post_internal_links',
      data: {
        source_note: sourceMicroPost.id,
        target_note: targetId,
      },
    })
  }

  return `internallink://${link.id}`
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
              try {
                return await ensureExternalLinkAndAttach(url, req, data)
              } catch (e) {
                throw new Error(`Failed to process external link: ${url}.`, {
                  cause: e,
                })
              }
            }

            const internalLinkToken = await ensureInternalLinkTokenFromUrl(data, url, req)
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
