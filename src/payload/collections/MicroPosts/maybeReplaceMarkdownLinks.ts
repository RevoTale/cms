import type { CollectionBeforeChangeHook, DataFromCollectionSlug, Payload } from 'payload'
import { remark } from 'remark'
import type { MicroPost, MicroPostExternalLink } from 'src/payload-types'
import remarkLinkRewrite from './remarkLinkRewrite'

const MICRO_POST_PREFIX = 'micro_post://'
const EXTERNAL_LINK_PREFIX = 'external_link://'
const findExternalLinkByUrl = async (url: string, payload: Payload): Promise<MicroPostExternalLink | null> => {
	const externalLinks = await payload.find({
		collection: 'micro_post_external_links',
		where: {
			target_url: {
				equals: url,
			},
		},
	})

	return externalLinks.docs[0] ?? null
}

const maybeCreateExternalLink = async (url: string, payload: Payload): Promise<MicroPostExternalLink> => {
	const existingLink = await findExternalLinkByUrl(url, payload)
	if (existingLink) return existingLink

	return await payload.create({
		collection: 'micro_post_external_links',
		data: {
			title: url,
			target_url: url,
		},
	})
}

export const isExternalLink = (url: string): boolean =>
	url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')
async function maybeTransformURLToExternalLink(url: string, payload: Payload): Promise<MicroPostExternalLink | null> {
	if (!isExternalLink(url)) {
		return null
	}
	return await maybeCreateExternalLink(url, payload)
}

const maybeRevalidateMicroPostLink = async (url: string, payload: Payload): Promise<MicroPost | null> => {
	if (!url.startsWith(MICRO_POST_PREFIX)) return null

	const targetId = url.slice(MICRO_POST_PREFIX.length)
	const microPost = await payload.findByID({
		collection: 'micro_posts',
		id: targetId,
	})
	if (microPost === null) {
		throw new Error(`MicroPost with ID ${targetId} not found`)
	}
	return microPost
}
const maybeRevalidateExternalLink = async (url: string, payload: Payload): Promise<MicroPostExternalLink | null> => {
	if (!url.startsWith(EXTERNAL_LINK_PREFIX)) return null

	const externalLinkId = url.slice(EXTERNAL_LINK_PREFIX.length)
	return await payload.findByID({
		collection: 'micro_post_external_links',
		id: externalLinkId,
	})
}

const maybeReplaceMarkdownLink: CollectionBeforeChangeHook<DataFromCollectionSlug<'micro_posts'>> = async ({
	data,
	req,
}) => {
	if (!data?.content) {
		return data
	}

	const externalLinkIds = new Set<string>()
	const linkedMicroPostIds = new Set<string>()
	const content = (
		await remark()
			.use(remarkLinkRewrite, {
				replacer: async url => {
					const externalLink =
						(await maybeRevalidateExternalLink(url, req.payload)) ??
						(await maybeTransformURLToExternalLink(url, req.payload))
					if (externalLink) {
						const externalLinkId = externalLink.id
						externalLinkIds.add(externalLinkId)
						return EXTERNAL_LINK_PREFIX + externalLinkId
					}

					const internalLink = await maybeRevalidateMicroPostLink(url, req.payload)
					if (internalLink) {
						const linkedMicroPostId = internalLink.id
						linkedMicroPostIds.add(linkedMicroPostId)
						return MICRO_POST_PREFIX + linkedMicroPostId
					}

					throw new Error(`None of transformers match url: ${url}`)
				},
			})
			.process(data.content)
	).toString()

	return {
		...data,
		externalLinks: Array.from(externalLinkIds),
		linkedMicroPosts: Array.from(linkedMicroPostIds),
		content,
	}
}

export default maybeReplaceMarkdownLink
