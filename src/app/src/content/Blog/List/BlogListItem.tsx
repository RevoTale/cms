import NextLink from '@/i18n/LocaleLink'
import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {cn} from '@shadcn/lib/utils'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@shadcn/ui/card'
import {Skeleton} from '@shadcn/ui/skeleton'
import type {Locale} from 'next-intl'
import type {FunctionComponent} from 'react'
import ContentfulImage from '../../Contentful/ContentfulImage'
import getPostHref from '../getPostHref'
import PostPublishDate from '../PostPublishDate'
import BlogListItemAuthor, {authorFragment} from './BlogListItemAuthor'

const postItemFragment = graphql(/* GraphQL */ `
	fragment ContentfulBlogItem on Post {
		...PostPublishDate_BlogPost
		authors {
			...BlogListAuthor
			...GetAuthorURL
		}
		featuredImage {
			...ContentfulImage
		}
		tags {
			name
		}
		slug
		title
		subtitle
		...GetPostURL
	}
`)

interface Props {
	post: FragmentType<typeof postItemFragment> | null
	className?: string
	imageSizes: string
	locale: Locale
}
const BlogListItem: FunctionComponent<Props> = ({
	post,
	className,
	imageSizes,
	locale,
}) => {
	const data = getFragmentData(postItemFragment, post)

	return (
		<Card
			className={cn(
				'overflow-hidden flex flex-col py-0 gap-0',
				className
			)}>
			{data?.featuredImage && post ? (
				<NextLink
					locale={locale}
					className="block"
					href={getPostHref(data).asString()}
					title={data.title ?? undefined}>
					<ContentfulImage
						className="max-w-full max-h-64 object-contain"
						image={data.featuredImage}
						sizes={imageSizes}
					/>
				</NextLink>
			) : data === null ? (
				<Skeleton className="h-36 w-full" />
			) : null}
			<CardHeader className="p-3 px-4">
				{data && post ? (
					<NextLink
						locale={locale}
						href={getPostHref(data).asString()}>
						<CardTitle className="text-lg line-clamp-3 h-20 font-semibold">
							{data.title}
						</CardTitle>
					</NextLink>
				) : (
					<CardTitle>
						<InlineSkeleton className="w-full h-5" />
						<InlineSkeleton className="w-3/5 h-5" />
					</CardTitle>
				)}
				{data && post ? (
					<CardDescription className="hover:text-accent-foreground line-clamp-4 h-20">
						<NextLink
							locale={locale}
							href={getPostHref(data).asString()}>
							{data.subtitle}
						</NextLink>
					</CardDescription>
				) : (
					<CardDescription>
						<InlineSkeleton className="h-3 w-full" />
						<InlineSkeleton className="h-3 w-full" />

						<InlineSkeleton className="h-3 w-4/5" />
					</CardDescription>
				)}
			</CardHeader>
			<CardFooter className="py-0 px-4 mb-3 flex flex-wrap justify-end gap-1">
				{data === null || data.authors
					? data?.authors?.map(item => (
							<BlogListItemAuthor
								locale={locale}
								author={item}
								key={getFragmentData(authorFragment, item).id}
							/>
						))
					: null}
				<PostPublishDate
					className="ml-auto italic"
					locale={locale}
					post={data}
				/>
			</CardFooter>
		</Card>
	)
}
export default BlogListItem
