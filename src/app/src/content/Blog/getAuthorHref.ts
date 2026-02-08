import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import {makeRelativeLink, type RelativeURL} from 'next-navigation-utils'
export const AuthorFragment = graphql(/* GraphQL */ `
	fragment GetAuthorURL on Author {
		slug
		id
	}
`)

const getAuthorHref = (
	author: FragmentType<typeof AuthorFragment>
): RelativeURL => {
	const {slug} = getFragmentData(AuthorFragment, author)
	return makeRelativeLink(`/blog/author/${slug}`)
}

export default getAuthorHref
