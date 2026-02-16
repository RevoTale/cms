import type { DefaultContext } from '@apollo/client'

interface NextJsApolloCacheOptions {
	revalidate: number
	tags?: string[]
	cache?: RequestCache
}

const getNextJsApolloCache = ({
	revalidate,
	tags = [],
	cache = 'force-cache',
}: NextJsApolloCacheOptions): DefaultContext => {
	return {
		fetchOptions: {
			cache,
			next: {
				revalidate,
				...(tags.length > 0 ? { tags } : {}),
			},
		},
	}
}
export default getNextJsApolloCache
