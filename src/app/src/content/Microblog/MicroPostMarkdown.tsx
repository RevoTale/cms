import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import PostMarkdown from '../Blog/Post/PostMarkdown'
export const blogPostText = graphql(/* GraphQL */ `
	fragment MicroBlogPostText_Text on Micro_post {
		id
		content
	}
`)

interface Props {
	post: FragmentType<typeof blogPostText>
	small?: boolean
	translateLinks?: Record<string, string>
	locale: Locale
	rootUrl?: string
}

const MicroBlogPostText: FunctionComponent<Props> = ({ post, small = false, translateLinks, locale, rootUrl }) => (
	<PostMarkdown
		locale={locale}
		markdown={getFragmentData(blogPostText, post).content ?? ''}
		translateLinks={translateLinks}
		size={small ? 'small' : 'large'}
		rootUrl={rootUrl}
	/>
)
export default MicroBlogPostText
