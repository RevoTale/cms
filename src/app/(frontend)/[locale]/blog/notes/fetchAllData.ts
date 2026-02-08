import { graphql } from '@blog/gql'
import 'server-only'
import { blogPostlistFragment } from '../../../../src/content/Microblog/MicroblogPostListWithData'

// Define tag fragment for type safety
export const tagFragment = graphql(/* GraphQL */ `
	fragment FetchAllData_Tag on Tag {
		id
		name
		title
	}
`)

// Define fragment with explicit fields for filtering + display
export const notesListItemFragment = graphql(/* GraphQL */ `
	fragment NotesListItem on Micro_post {
		id
		slug
		title
		content
		publishedAt
		tags {
			id
			name
			title
		}
		authors {
			id
			name
			slug
			avatar {
				url
				alt
				width
				height
			}
			bio
		}
		attachment {
			url
			alt
			width
			height
		}
		meta {
			image {
				url
				alt
				width
				height
			}
		}
	}
`)

// Re-export blogPostlistFragment for display component compatibility
export { blogPostlistFragment }
