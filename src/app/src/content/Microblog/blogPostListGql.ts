import { graphql } from '@blog/gql'

export const blogPostlistQueryFragment = graphql(/* GraphQL */ `
	fragment MicroBlogListItemQuery on Micro_post {
		id
		...MicroPostPublishDate_BlogPost
		...Blog_getMicropostHref
		...MicroBlogPostText_Text
		...MicroBlogPostListWithData
		...MicroBlogListItem
		meta {
			image {
				...Util_getImageThumb
				alt
			}
		}
	}
`)

export const rssFrag = graphql(/* GraphQL */ `
	fragment MicroPoss_RSS on Micro_post {
		id
		title
		content
		publishedAt
		authors {
			name
		}
		meta {
			description
		}
		tags {
			name
		}
	}
`)

export const getPosts = graphql(/* GraphQL */ `
	query MicroBlog_post_list(
		$authorIn: [JSON!]
		$locale: LocaleInputType
		$limit: Int!
		$tagsIn: [JSON!]
		$page: Int!
		$postType: Micro_post_post_type_Input!
	) {
		Micro_posts(
			limit: $limit
			where: {
				authors: {in: $authorIn}
				tags: {in: $tagsIn}
				post_type: {equals: $postType}
			}
			locale: $locale
			page: $page
		) {
			totalPages
			docs {
				...MicroBlogListItemQuery
				...SingleNoteJsonld
				...MicroPoss_RSS
			}
		}
	}
`)

export const tagFrag = graphql(/* GraphQL */ `
	fragment fetchMicroblogPost_tag on Tag {
		id
		name
	}
`)

export const authorInFrag = graphql(/* GraphQL */ `
	fragment authorInFrag_author on Author {
		id
		slug
	}
`)

export const authorQueryInFrag = graphql(/* GraphQL */ `
	fragment AuthorQueryFrag on Author {
		...authorInFrag_author
		name
		id
	}
`)

export const authorQuery = graphql(/* GraphQL */ `
	query authorInFrag($authorSlugIn: [String!]!, $locale: LocaleInputType!) {
		Authors(where: {slug: {in: $authorSlugIn}}, locale: $locale) {
			docs {
				...AuthorQueryFrag
			}
		}
	}
`)
