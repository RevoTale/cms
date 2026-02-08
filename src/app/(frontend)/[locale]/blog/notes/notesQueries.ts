import {graphql} from '@blog/gql'

export const tagFragment = graphql(/* GraphQL */ `
	fragment TagFragment on Tag {
		...fetchMicroblogPost_tag
		...MicroBlogTag
		name
		id
		title
	}
`)

export const getTagIds = graphql(/* GraphQL */ `
	query tagIds($tagNames: [String!], $locale: LocaleInputType!) {
		Tags(where: {name: {in: $tagNames}}, locale: $locale) {
			docs {
				...TagFragment
			}
		}
	}
`)

export const availableTagsQuery = graphql(/* GraphQL */ `
	query AvailableTags($locale: LocaleInputType!, $postType: String) {
		availableTagsByMicroPostType(locale: $locale, postType: $postType) {
			id
			name
			title
		}
	}
`)
