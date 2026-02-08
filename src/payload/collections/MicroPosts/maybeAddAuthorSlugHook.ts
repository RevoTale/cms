import type { CollectionBeforeChangeHook, DataFromCollectionSlug } from 'payload'

const maybeAddAuthorSlugHook: CollectionBeforeChangeHook<DataFromCollectionSlug<'micro_posts'>> = async ({
	data,
	req,
}) => {
	if (!data?.authors || data.authors.length === 0) {
		return data
	}

	const authorId = typeof data.authors[0] === 'string' ? data.authors[0] : data.authors[0].id
	const author = await req.payload.findByID({
		collection: 'authors',
		id: authorId,
	})

	if (!author?.slug) {
		return data
	}

	return {
		...data,
		authorSlug: author.slug,
	}
}

export default maybeAddAuthorSlugHook
