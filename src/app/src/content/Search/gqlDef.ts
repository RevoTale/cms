import {graphql} from '@blog/gql'

export const SearchQueryDocFragment = graphql(/* GraphQL */ `
	fragment SearchQueryDoc on Search {
		id
		title
		doc {
			...SearchItem
		}
	}
`)
export const SearchQuery = graphql(/* GraphQL */ `
	query SearchQuery($query: String!, $locale: LocaleInputType!) {
		Searches(
			locale: $locale
			limit: 10
			where: {
				OR: [{excerpt: {like: $query}}, {excerpt: {contains: $query}}]
			}
		) {
			docs {
				...SearchQueryDoc
			}
		}
	}
`)
