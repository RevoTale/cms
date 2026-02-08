import {getFragmentData, graphql, type FragmentType} from '@blog/gql'
import BreaadcrumbsSkeleton from '@revotale/ui/BreaadcrumbsSkeleton'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import type {Locale} from 'next-intl'
import {Suspense, type FunctionComponent} from 'react'
import getDomain from '../../config/getDomain'
import BlogListItemAuthor from '../Blog/List/BlogListItemAuthor'
import ContentfulImage from '../Contentful/ContentfulImage'
import NoteJsonLD from '../LdJson/NoteJsonLD'
import InternalLinksList from './InternalLinksList'
import MicroBlogTag from './MicroBlogTag'
import MicroBlogTagSkeleton from './MicroBlogTagSkeleton'
import MicroPostContentSkeleton from './MicroPostContentSkeleton'
import MicroBlogPostText from './MicroPostMarkdown'
import NoteBreadcrumbs from './NoteBreadcrumbs'
import OutgoingLinksList from './OutgoingLinksList'
import PostPublishDate from './PostPublishDate'
import ShareButtons from './ShareButtons'
import ShareButtonsSkeleton from './ShareButtonsSkeleton'
import getMicropostHref from './getMicroPostHref'
export const dataFrag = graphql(/* GraphQL */ `
	fragment SinglePostPageData on Micro_post {
		...MicroBlogPostText_Text
		...SingleMicroBlogPostBreadCrumb
		title
		authors {
			id
			...BlogListAuthor
		}
		...MicroPostPublishDate_BlogPost
		...Blog_getMicropostHref
		tags {
			id
			...MicroBlogTag
		}
		externalLinks {
			id
			target_url
		}
		linkedMicroPosts {
			id
			...Blog_getMicropostHref
		}
		attachment {
			...ContentfulImage
		}
		...OutGoingLinksList
		...PostInternalLinksList
		...SingleNoteJsonld
	}
`)
interface Props {
	post: FragmentType<typeof dataFrag> | null
	locale: Locale
	priority?: boolean
}

const getTranslateLinks = (
	post: FragmentType<typeof dataFrag>
): Record<string, string> => {
	const {externalLinks, linkedMicroPosts} = getFragmentData(dataFrag, post)

	const externalLinksMap: Record<string, string> = {}
	if (externalLinks) {
		for (const doc of externalLinks) {
			externalLinksMap[doc.id] = doc.target_url
		}
	}

	const internalLinksMap: Record<string, string> = {}
	if (linkedMicroPosts) {
		for (const doc of linkedMicroPosts) {
			internalLinksMap[doc.id] = getMicropostHref(doc).asString()
		}
	}

	return {
		...externalLinksMap,
		...internalLinksMap,
	}
}

const SingleMicroBlogPostPageData: FunctionComponent<Props> = ({
	post,
	priority,
	locale,
}) => {
	const data = getFragmentData(dataFrag, post)
	const tags = data?.tags ?? null
	const breadCrumSkeleton = (
		<BreaadcrumbsSkeleton className="m-auto" count={4} />
	)
	return (
		<div className="max-w-2xl mx-auto">
			{data === null ? null : (
				<Suspense>
					<NoteJsonLD
						rootUrl={getDomain()}
						note={data}
						locale={locale}
					/>
				</Suspense>
			)}

			{data === null ? (
				breadCrumSkeleton
			) : (
				<Suspense fallback={breadCrumSkeleton}>
					<NoteBreadcrumbs
						locale={locale}
						className="m-auto"
						post={data}
					/>
				</Suspense>
			)}
			<div className="mt-5 flex flex-wrap gap-4 items-center">
				{data ? (
					data.authors?.map(author => (
						<BlogListItemAuthor
							key={author.id}
							author={author}
							locale={locale}
						/>
					))
				) : (
					<BlogListItemAuthor author={null} locale={locale} />
				)}
				<PostPublishDate
					post={data}
					showTime
					className="ml-auto"
					locale={locale}
				/>
			</div>
			{tags === null || tags.length > 0 ? (
				<div className="flex gap-3 justify-end mt-1">
					{tags === null ? (
						<>
							<MicroBlogTagSkeleton />
							<MicroBlogTagSkeleton />
						</>
					) : (
						tags.map(tag => (
							<MicroBlogTag
								key={tag.id}
								locale={locale}
								tag={tag}
							/>
						))
					)}
				</div>
			) : null}
			{data === null ? (
				<ShareButtonsSkeleton />
			) : (
				<ShareButtons
					attachmentScroll={Boolean(data.attachment ?? undefined)}
					post={data}
					locale={locale}
				/>
			)}

			<article className="mt-8">
				{data ? (
					data.title === null || data.title === '' ? null : (
						<h1 className="text-3xl font-bold mb-2">
							{data.title}
						</h1>
					)
				) : (
					<InlineSkeleton className="w-40 h-9 block font-bold mb-2" />
				)}

				{data && post ? (
					<MicroBlogPostText
						locale={locale}
						post={data}
						translateLinks={getTranslateLinks(post)}
						rootUrl={getDomain()}
					/>
				) : (
					<MicroPostContentSkeleton />
				)}
				{data?.attachment ? (
					<ContentfulImage
						className="max-w-full max-h-96 h-auto object-contain"
						image={data.attachment}
						priority={priority}
						id="featured-attachment-of-the-note"
						sizes="(max-width: 660px) 100vw, 672px"
					/>
				) : null}
			</article>

			<InternalLinksList post={data} locale={locale} />
			<OutgoingLinksList post={data} locale={locale} />
		</div>
	)
}
export default SingleMicroBlogPostPageData
