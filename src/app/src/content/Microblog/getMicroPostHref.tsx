import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import { makeRelativeLink, type RelativeURL } from 'next-navigation-utils'
export const BlogGetMicropostHref = graphql(/* GraphQL */ `
	fragment Blog_getMicropostHref on Micro_post {
		id
		slug
	}
`)

const getMicropostHref = (micropost: FragmentType<typeof BlogGetMicropostHref>): RelativeURL => {
	const frag = getFragmentData(BlogGetMicropostHref, micropost)
	return makeRelativeLink(`/blog/note/${frag.slug}`)
}

export default getMicropostHref
