import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/client-integration-nextjs'
import 'server-only'
import { cmsUrl } from '../../../config/siteUrls'

export const { getClient } = registerApolloClient(() => {
	const defaultServerGraphqlUrl =
		process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/api/graphql' : `${cmsUrl.origin}/api/graphql`
	const serverGraphqlUrl =
		process.env.GRAPHQL_SERVER_URL ??
		process.env.GRAPHQL_URL ??
		(process.env.PAYLOAD_PUBLIC_SERVER_URL
			? `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`
			: undefined) ??
		defaultServerGraphqlUrl
	const clientGraphqlUrl = process.env.GRAPHQL_URL ?? '/api/graphql'

	return new ApolloClient({
		cache: new InMemoryCache({}),
		// ssrMode is intended for the pages router and is redundant here.

		link: new HttpLink({
			uri: typeof window === 'undefined' ? serverGraphqlUrl : clientGraphqlUrl,
			// Default to uncached fetches; opt into Data Cache per query via getNextJsApolloCache.
			fetchOptions: { cache: 'no-store' },
		}),
	})
})
