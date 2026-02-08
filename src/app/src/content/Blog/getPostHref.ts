import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import { makeRelativeLink, type RelativeURL } from 'next-navigation-utils'
export const PostFragment = graphql(/* GraphQL */ `
	fragment GetPostURL on Post {
		slug
		id
	}
`)

const getPostHref = (post: FragmentType<typeof PostFragment>): RelativeURL => {
	const { slug } = getFragmentData(PostFragment, post)
	return makeRelativeLink(`/blog/article/${slug}`)
}

export default getPostHref
