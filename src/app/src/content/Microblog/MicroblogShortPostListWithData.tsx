'use client'
import NextLink from '@/i18n/LocaleLink'
import {getFragmentData, type FragmentType} from '@blog/gql'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {Card, CardContent, CardHeader} from '@shadcn/ui/card'
import {Skeleton} from '@shadcn/ui/skeleton'
import type {Locale} from 'next-intl'
import type {FunctionComponent} from 'react'
import BlogListItemAuthor, {
	authorFragment,
} from '../Blog/List/BlogListItemAuthor'
import ContentfulImage from '../Contentful/ContentfulImage'
import getMicropostHref from './getMicroPostHref'
import MicroBlogTag from './MicroBlogTag'
import MicroBlogPostText from './MicroPostMarkdown'
import {postItemFragment} from './MicroblogListItem'
import PostPublishDate from './PostPublishDate'
import {tagFrag} from './ss'

interface Props {
	items: Array<FragmentType<typeof postItemFragment>> | null
	locale: Locale
	rootUrl: string
	skeletonCount?: number
}

const defaultSkeletonCount = 8
const MicroblogShortPostListWithData: FunctionComponent<Props> = ({
	items,
	locale,
	rootUrl,
	skeletonCount = defaultSkeletonCount,
}) => {
	if (items !== null && items.length === 0) {
		return null
	}

	return (
		<ul className="mx-auto flex w-full max-w-2xl flex-col gap-3">
			{items === null
				? Array(skeletonCount)
						.fill(null)
						.map((_, index) => {
							return (
								<li key={`micro_skeleton_${index}`}>
									<Card className="rounded-xl border-border/70">
										<CardHeader className="gap-2 px-3 py-2">
											<BlogListItemAuthor
												locale={locale}
												author={null}
											/>
											<InlineSkeleton className="h-4 w-28 ml-auto" />
										</CardHeader>
										<CardContent className="space-y-2 px-3 pb-3 pt-0">
											<InlineSkeleton className="h-4 w-full" />
											<InlineSkeleton className="h-4 w-5/6" />
											<InlineSkeleton className="h-4 w-2/3" />
											<Skeleton className="h-36 w-full" />
										</CardContent>
									</Card>
								</li>
							)
						})
				: items.map(item => {
						const data = getFragmentData(postItemFragment, item)
						return (
							<li key={data.id}>
								<Card className="rounded-xl border-border/70">
									<CardHeader className="gap-2 px-3 py-2">
										<div className="flex flex-wrap items-center gap-3">
											{(data.authors?.length ?? 0) > 0 ? (
												data.authors?.map(author => (
													<BlogListItemAuthor
														key={
															getFragmentData(
																authorFragment,
																author
															).id
														}
														locale={locale}
														author={author}
													/>
												))
											) : (
												<BlogListItemAuthor
													locale={locale}
													author={null}
												/>
											)}
											<PostPublishDate
												locale={locale}
												showTime
												className="ml-auto"
												post={data}
											/>
										</div>
									</CardHeader>
									<CardContent className="space-y-2 px-3 pb-3 pt-0">
										{data.title ? (
											<NextLink
												locale={locale}
												href={getMicropostHref(
													data
												).asString()}
												className="block text-base font-semibold leading-tight">
												{data.title}
											</NextLink>
										) : null}
										<div className="[&_.hljs]:text-xs [&_.hljs]:leading-5 [&_a]:break-words [&_figure]:my-2 [&_p]:my-2 [&_pre]:text-xs">
											<MicroBlogPostText
												locale={locale}
												post={data}
												small
												rootUrl={rootUrl}
											/>
										</div>
										{data.attachment ? (
											<NextLink
												locale={locale}
												href={getMicropostHref(
													data
												).asString()}>
												<ContentfulImage
													className="max-h-96 w-full rounded-xl object-contain"
													image={data.attachment}
													sizes="(max-width: 768px) 100vw, 736px"
												/>
											</NextLink>
										) : null}
										{(data.tags?.length ?? 0) > 0 ? (
											<div className="flex flex-wrap gap-2">
												{data.tags?.map(tag => (
													<MicroBlogTag
														key={
															getFragmentData(
																tagFrag,
																tag
															).id
														}
														locale={locale}
														tag={tag}
													/>
												))}
											</div>
										) : null}
									</CardContent>
								</Card>
							</li>
						)
					})}
		</ul>
	)
}

export default MicroblogShortPostListWithData
