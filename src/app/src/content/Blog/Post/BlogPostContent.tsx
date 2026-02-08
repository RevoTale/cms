import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import {Button} from '@shadcn/ui/button'
import type {Locale} from 'next-intl'
import type {FunctionComponent, ReactNode} from 'react'
import BlogListItemAuthor, {authorFragment} from '../List/BlogListItemAuthor'
import PostPublishDate from '../PostPublishDate'
import BlogPostHeader from './BlogPostHeader'
import BlogPostImage from './BlogPostImage'
import BlogPostShortDesc from './BlogPostShortDesc'

const postFragment = graphql(/* GraphQL */ `
	fragment SingleBlogPostContent on Post {
		id
		slug
		title
		...PostPublishDate_BlogPost
		authors {
			...BlogListAuthor
		}
		subtitle
		tags {
			name
		}
		...BlogPost_featuredImageFrag
	}
`)
interface Props {
	text: ReactNode
	item: FragmentType<typeof postFragment> | null
	locale: Locale
}
const BlogPostContent: FunctionComponent<Props> = ({item, text, locale}) => {
	const data = getFragmentData(postFragment, item)
	const tags = data?.tags ?? []
	return (
		<article className="max-w-3xl m-auto">
			{!data || (data.title ?? '') !== '' ? (
				<BlogPostHeader>{data?.title ?? null}</BlogPostHeader>
			) : null}
			{!data || (data.subtitle ?? '') !== '' ? (
				<BlogPostShortDesc>{data?.subtitle ?? null}</BlogPostShortDesc>
			) : null}
			<div className="flex items-center gap-3 font-semibold italic">
				{!data || data.authors
					? data?.authors?.map(author => (
							<BlogListItemAuthor
								author={author}
								key={getFragmentData(authorFragment, author).id}
								locale={locale}
							/>
						))
					: null}
				<div className="text-sm text-muted-foreground">·</div>
				<PostPublishDate locale={locale} post={data} />
			</div>
			<BlogPostImage post={data} />
			{text}
			{tags.length > 0 ? (
				<div className="p-2 flex gap-2 flex-wrap">
					{tags
						.map(tag => tag.name)
						.map(tag => (
							<Button
								key={tag}
								size="sm"
								type="button"
								variant="secondary">
								#{tag}
							</Button>
						))}
				</div>
			) : null}
		</article>
	)
}

export default BlogPostContent
