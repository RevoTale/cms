import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/client-integration-nextjs'
import 'server-only'

export const { getClient } = registerApolloClient(() => {
	const serverGraphqlUrl =
		process.env.GRAPHQL_SERVER_URL ??
		process.env.GRAPHQL_URL ??
		(process.env.APP_URL ? `${process.env.APP_URL}/api/graphql` : undefined) ??
		(process.env.PAYLOAD_PUBLIC_SERVER_URL
			? `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`
			: 'http://127.0.0.1:3000/api/graphql')
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
