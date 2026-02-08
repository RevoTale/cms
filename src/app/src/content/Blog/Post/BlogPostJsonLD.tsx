import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import type { FunctionComponent } from 'react'
import type { BlogPosting, WithContext } from 'schema-dts'
import getDomain from '../../../config/getDomain'
import getUrl from '../../../linking/getUrl'
import { getAuthorJsonLD } from '../../LdJson/AuthorJsonLD'
import getImageJsonLd from '../../LdJson/getImageJsonLd'
import { getOrganizationJsonLD } from '../../LdJson/OrganizationJsonLd'

const blogPost = graphql(/* GraphQL */ `
	fragment SingleBlogPostJsonLD on Post {
		id
		slug
		title
		subtitle
		authors {
			name
			slug
			...GetAuthorURL
			...SingleAuthorJsonLd
		}
		createdAt
		updatedAt
		publishedAt
		featuredImage {
			...ImageJsonLd
		}
	}
`)
interface Props {
	post: FragmentType<typeof blogPost>
	rootUrl: string
	locale: string
}
const BlogPostJsonLD: FunctionComponent<Props> = ({ post, locale, rootUrl }) => {
	const {
		featuredImage,
		title,
		authors,
		slug,
		subtitle: shortDescription,
		createdAt,
		updatedAt,
		publishedAt,
	} = getFragmentData(blogPost, post)

	const author = authors !== undefined && authors !== null && authors.length > 0 ? authors[0] : null

	const markup: WithContext<BlogPosting> = {
		'@type': 'BlogPosting',
		'@context': 'https://schema.org',
		headline: title ?? undefined,
		author: author ? getAuthorJsonLD(author, rootUrl, locale) : undefined,
		description: shortDescription ?? undefined,
		dateCreated: typeof createdAt === 'string' ? new Date(createdAt).toISOString() : undefined,
		dateModified: typeof updatedAt === 'string' ? new Date(updatedAt).toISOString() : undefined,

		datePublished: typeof publishedAt === 'string' ? new Date(publishedAt).toISOString() : undefined,
		url: getUrl(`/blog/${slug}`, locale).toString(),
		publisher: getOrganizationJsonLD(getDomain()),
		image: featuredImage !== undefined && featuredImage !== null ? getImageJsonLd(rootUrl, featuredImage) : undefined,
	}
	return <script type="application/ld+json">{JSON.stringify(markup)}</script>
}
export default BlogPostJsonLD
