import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import PostMarkdown from './PostMarkdown'
export const blogPostText = graphql(/* GraphQL */ `
	fragment BlogPostText_Text on Post {
		id
		content
	}
`)

interface Props {
	post: FragmentType<typeof blogPostText>
	locale: Locale
	rootUrl?: string
}

const BlogPostText: FunctionComponent<Props> = ({ post, locale, rootUrl }) => (
	<PostMarkdown locale={locale} markdown={getFragmentData(blogPostText, post).content ?? ''} rootUrl={rootUrl} />
)
export default BlogPostText
