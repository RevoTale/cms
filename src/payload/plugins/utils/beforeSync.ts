import type { BeforeSync } from '@payloadcms/plugin-search/types'
import type { CollectionSlug, Payload } from 'payload'
import { locales } from 'src/i18n-config'

type ExcerptBuilder = (doc: Record<string, unknown>) => string

const excerptBuilders: Partial<Record<CollectionSlug, ExcerptBuilder>> = {
	micro_posts: doc => {
		const meta = (doc.meta as Record<string, unknown> | undefined) ?? {}
		return [doc.title, meta.description, doc.content, meta.title]
			.map(value => (typeof value === 'string' ? value : ''))
			.join(' ')
	},
	authors: doc => [doc.name, doc.bio, doc.slug].map(value => (typeof value === 'string' ? value : '')).join(' '),
	tags: doc => [doc.title, doc.name].map(value => (typeof value === 'string' ? value : '')).join(' '),
}

interface BuildExcerptArgs {
	payload: Payload
	collectionSlug: CollectionSlug
	docId: unknown
	builder: ExcerptBuilder
}

const buildLocalizedExcerpt = async ({
	payload,
	collectionSlug,
	docId,
	builder,
}: BuildExcerptArgs): Promise<string> => {
	let excerpt = ''

	for (const locale of locales) {
		const result = await payload.find({
			collection: collectionSlug,
			where: { id: { equals: docId } },
			locale,
		})

		if (result.totalDocs === 0) {
			continue
		}

		const docs = result.docs as unknown as Array<Record<string, unknown>>
		const [doc] = docs
		excerpt += `${builder(doc)} --- `
	}

	return excerpt
}

const beforeSync: BeforeSync = async ({ originalDoc, searchDoc, payload }) => {
	const collectionSlug = searchDoc.doc.relationTo as CollectionSlug
	const builder = excerptBuilders[collectionSlug]

	let excerpt = ''

	if (builder) {
		const computedExcerpt = await buildLocalizedExcerpt({
			payload,
			collectionSlug,
			docId: searchDoc.doc.value,
			builder,
		})

		if (computedExcerpt === '') {
			return searchDoc
		}

		excerpt = computedExcerpt
	}

	return {
		...searchDoc,
		title: originalDoc?.title || searchDoc.title || originalDoc?.name || '',
		// - Modify your docs in any way here, this can be async
		// - You also need to add the `excerpt` field in the `searchOverrides` config
		excerpt,
	}
}
export default beforeSync
