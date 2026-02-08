import { graphql } from '@blog/gql'

const tagFrag = graphql(/* GraphQL */ `
	fragment MicroBlogTag on Tag {
		name
		title
		id
	}
`)

export { tagFrag }
