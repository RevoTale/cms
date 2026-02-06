import type { Payload, PayloadRequest, TypedLocale } from 'payload'

import { defaultLocale } from '../../i18n-config'

const AUTHOR_NAME_MAX_LENGTH = 32
const USER_ID_SLICE_LENGTH = 8

const normalizeId = (id: unknown): string => {
  if (typeof id === 'string') {
    return id
  }

  if (typeof id === 'number') {
    return id.toString()
  }

  throw new Error('Unexpected identifier value while seeding')
}

const toSlug = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')

interface ExternalLinkSeed {
  title: string
  url: string
}

interface MicroPostSeed {
  title: string
  slug: string
  content: string
  tags: string[]
  externalLinks?: ExternalLinkSeed[]
  linkedSlugs?: string[]
}

interface TagSeed {
  name: string
  title: string
}

const ensureTag = async (
  payload: Payload,
  locale: TypedLocale,
  tagSeed: TagSeed,
): Promise<string> => {
  const tagQuery = await payload.find({
    collection: 'tags',
    where: {
      name: {
        equals: tagSeed.name,
      },
    },
    limit: 1,
  })

  const existingTag = tagQuery.docs[0] as { id: unknown } | undefined
  if (existingTag?.id !== undefined && existingTag.id !== null) {
    return normalizeId(existingTag.id)
  }

  const createdTag = (await payload.create({
    collection: 'tags',
    locale,
    data: {
      name: tagSeed.name,
      title: tagSeed.title,
    },
    draft: false,
  })) as { id: unknown }

  return normalizeId(createdTag.id)
}

const ensureExternalLink = async (
  payload: Payload,
  externalLinkSeed: ExternalLinkSeed,
): Promise<string> => {
  const externalLinkQuery = await payload.find({
    collection: 'micro_post_external_links',
    where: {
      target_url: {
        equals: externalLinkSeed.url,
      },
    },
    limit: 1,
  })

  const existingExternalLink = externalLinkQuery.docs[0] as { id: unknown } | undefined

  if (existingExternalLink?.id !== undefined && existingExternalLink.id !== null) {
    return normalizeId(existingExternalLink.id)
  }

  const createdExternalLink = (await payload.create({
    collection: 'micro_post_external_links',
    data: {
      title: externalLinkSeed.title,
      target_url: externalLinkSeed.url,
    },
    draft: false,
  })) as { id: unknown }

  return normalizeId(createdExternalLink.id)
}

const resolveAuthorId = async ({
  payload,
  locale,
  userId,
  userName,
}: {
  payload: Payload
  locale: TypedLocale
  userId: string
  userName?: string | null
}): Promise<string> => {
  const authorQuery = await payload.find({
    collection: 'authors',
    where: {
      user: {
        equals: userId,
      },
    },
    limit: 1,
  })

  const existingAuthorId = (authorQuery.docs[0] as { id: unknown } | undefined)?.id

  if (existingAuthorId !== undefined && existingAuthorId !== null) {
    return normalizeId(existingAuthorId)
  }

  const fallbackAuthorName = 'Seed Author'
  const trimmedUserName = typeof userName === 'string' ? userName.trim() : ''
  const safeAuthorName =
    trimmedUserName.length > 0
      ? trimmedUserName.slice(0, AUTHOR_NAME_MAX_LENGTH)
      : fallbackAuthorName
  const baseAuthorSlug = toSlug(safeAuthorName) || toSlug(fallbackAuthorName)
  const authorSlug = `${baseAuthorSlug}-${userId.slice(0, USER_ID_SLICE_LENGTH).toLowerCase()}`

  const createdAuthor = (await payload.create({
    collection: 'authors',
    locale,
    data: {
      name: safeAuthorName,
      slug: authorSlug,
      bio: 'Maintains the project and writes release notes for demo content.',
      user: userId,
    },
    draft: false,
  })) as { id: unknown }

  return normalizeId(createdAuthor.id)
}

const seedMicroPosts = async ({
  payload,
  locale,
  authorId,
  tagIds,
}: {
  payload: Payload
  locale: TypedLocale
  authorId: string
  tagIds: {
    release: string
    tooling: string
    community: string
  }
}): Promise<void> => {
  const microPostSeeds: MicroPostSeed[] = [
    {
      title: 'Shipping the New CMS Playground',
      slug: 'shipping-the-new-cms-playground',
      content:
        'We stood up the CMS stack and configured Payload to manage micro updates. Expect faster content delivery and built-in changelog workflows. See the highlights at https://payloadcms.com/blog/community-case-studies.',
      tags: [tagIds.release, tagIds.tooling],
      externalLinks: [
        {
          title: 'Payload Community Case Studies',
          url: 'https://payloadcms.com/blog/community-case-studies',
        },
      ],
    },
    {
      title: 'Improving the Editing Experience',
      slug: 'improving-the-editing-experience',
      content:
        'Draft previews and live markdown rendering are now wired up. Our writers can review changes without leaving the admin dashboard. Dive into the guide at https://nextjs.org/docs/pages/building-your-application/routing.',
      tags: [tagIds.tooling],
      externalLinks: [
        {
          title: 'Next.js Routing Docs',
          url: 'https://nextjs.org/docs/pages/building-your-application/routing',
        },
      ],
      linkedSlugs: ['shipping-the-new-cms-playground'],
    },
    {
      title: 'Community Feedback Loop Opened',
      slug: 'community-feedback-loop-opened',
      content:
        'We wired in anonymized analytics, turned on the feedback inbox, and queued the first batch of community questions for follow-up. Join the discussion inside the previous editing update for the full context.',
      tags: [tagIds.community, tagIds.release],
      externalLinks: [
        {
          title: 'RevoTale Discussions',
          url: 'https://github.com/RevoTale/discussions',
        },
      ],
      linkedSlugs: ['improving-the-editing-experience'],
    },
    {
      title: 'QA Benchmarks Published',
      slug: 'qa-benchmarks-published',
      content:
        'Load tests are automated and benchmarks are published inside the analytics workspace. We charted regressions and linked the dashboards so releases stay accountable.',
      tags: [tagIds.release, tagIds.tooling],
      externalLinks: [
        {
          title: 'k6 Performance Testing Docs',
          url: 'https://k6.io/docs/',
        },
      ],
      linkedSlugs: ['shipping-the-new-cms-playground', 'community-feedback-loop-opened'],
    },
    {
      title: 'Roadmap Snapshot Q4',
      slug: 'roadmap-snapshot-q4',
      content:
        'Quarterly roadmap snapshot is live with prioritized initiatives, release windows, and community votes. The QA benchmarks summary feeds directly into this plan.',
      tags: [tagIds.community, tagIds.tooling],
      externalLinks: [
        {
          title: 'Feedback Portal',
          url: 'https://feedback.revotale.com',
        },
      ],
      linkedSlugs: ['qa-benchmarks-published'],
    },
  ]

  const createdMicroPosts: Array<{ id: string; slug: string }> = []

  for (const seedData of microPostSeeds) {
    const externalLinkIds: string[] = []
    if (seedData.externalLinks) {
      for (const link of seedData.externalLinks) {
        externalLinkIds.push(await ensureExternalLink(payload, link))
      }
    }

    const linkedMicroPostIds = seedData.linkedSlugs
      ? seedData.linkedSlugs.map((linkedSlug) => {
          const linkedTarget = createdMicroPosts.find((microPost) => microPost.slug === linkedSlug)
          if (!linkedTarget) {
            throw new Error(`Linked micro post with slug "${linkedSlug}" not found.`)
          }
          return linkedTarget.id
        })
      : []

    const createdMicroPost = (await payload.create({
      collection: 'micro_posts',
      locale,
      data: {
        title: seedData.title,
        slug: seedData.slug,
        content: seedData.content,
        tags: seedData.tags,
        authors: [authorId],
        post_type:'long',
        _status: 'published' as const,
        externalLinks: externalLinkIds,
        linkedMicroPosts: linkedMicroPostIds,
      },
      draft: false,
    })) as { id: unknown }

    const createdMicroPostId = normalizeId(createdMicroPost.id)
    createdMicroPosts.push({ id: createdMicroPostId, slug: seedData.slug })

    payload.logger.info(`Micro post seeded: ${seedData.title}`)
  }
}
// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')
  const { user } = req
  if (user === null) {
    throw new Error('No user found in request')
  }
  const userId = normalizeId(user.id)
  const existingMicroPosts = await payload.find({
    collection: 'micro_posts',
    limit: 1,
  })

  if (existingMicroPosts.docs.length > 0) {
    throw new Error('Seeding disable because there is already data')
  }

  const locale = defaultLocale

  const [releaseTagId, toolingTagId, communityTagId] = await Promise.all([
    ensureTag(payload, locale, { name: 'release', title: 'Release Notes' }),
    ensureTag(payload, locale, { name: 'tooling', title: 'Tooling' }),
    ensureTag(payload, locale, { name: 'community', title: 'Community' }),
  ])

  const authorId = await resolveAuthorId({
    payload,
    locale,
    userId,
    userName: user.name,
  })

  await seedMicroPosts({
    payload,
    locale,
    authorId,
    tagIds: {
      release: releaseTagId,
      tooling: toolingTagId,
      community: communityTagId,
    },
  })

  payload.logger.info('Micro posts seed completed')
}
