'use client'
import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import { cn } from '@shadcn/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/ui/card'
import { Skeleton } from '@shadcn/ui/skeleton'
import type { Locale } from 'next-intl'
import { type FunctionComponent, Suspense } from 'react'
import NextLink from '@/i18n/LocaleLink'
import BlogListItemAuthor, { authorFragment } from '../Blog/List/BlogListItemAuthor'
import ContentfulImage from '../Contentful/ContentfulImage'
import GoToNoteLink from './GoToNoteLink'
import GoToNoteLinkSkeleton from './GoToNoteLinkSkeleton'
import getMicropostHref from './getMicroPostHref'
import MicroBlogTag from './MicroBlogTag'
import PostPublishDate from './PostPublishDate'
import ShortPostTextPreview from './ShortPostTextPreview'
import type { PlaceholderMapTranslationKeys } from './shortTextPlaceholders'

const characterPreviewCount = 180
export const postItemFragment = graphql(/* GraphQL */ `
	fragment MicroBlogListItem on Micro_post {
		id
		...MicroPostPublishDate_BlogPost
		...Blog_getMicropostHref
		...MicroBlogPostText_Text
		authors {
			...BlogListAuthor
		}
		attachment {
			...ContentfulImage
		}
		tags {
			name
			...MicroBlogTag
		}
		meta {
			image {
				...ContentfulImage
			}
		}
		content
		title
		...MicroBlogListItem_toReactTranslate
	}
`)
interface Props {
	post: FragmentType<typeof postItemFragment> | null
	className?: string
	imageSizes: string
	translationKeys: PlaceholderMapTranslationKeys | null
	locale: Locale
}
const MicroblogListItem: FunctionComponent<Props> = ({ post, className, imageSizes, translationKeys, locale }) => {
	const data = getFragmentData(postItemFragment, post)
	const textPlaceHolder = (
		<div>
			<InlineSkeleton className="h-3 w-full" />

			<InlineSkeleton className="h-3 w-4/5" />
			<InlineSkeleton className="h-3 w-4/5" />
			<InlineSkeleton className="h-3 w-4/5" />
		</div>
	)
	const image = data?.attachment ?? null //Do not use OG image as preview according to the GPT 5.2 thinking: https://chatgpt.com/share/69860a0b-8f68-8007-bc3e-360f5679e23c
	return (
		<Card className={cn('overflow-hidden px-3 py-2 gap-0.5 h-fit w-full relative', className)}>
			<CardHeader className="px-0 py-1">
				{!data || data.authors
					? data?.authors?.map(item => (
							<BlogListItemAuthor author={item} key={getFragmentData(authorFragment, item).id} locale={locale} />
						))
					: null}
				{post === null ? <BlogListItemAuthor author={null} locale={locale} /> : null}
				{data === null ? (
					<CardTitle>
						<InlineSkeleton className="w-full h-5" />
						<InlineSkeleton className="w-3/5 h-5" />
					</CardTitle>
				) : data.title === '' || data.title === null ? null : (
					<NextLink href={getMicropostHref(data).asString()} locale={locale} prefetch={false}>
						<CardTitle className="text-lg line-clamp-2 font-semibold">{data.title}</CardTitle>
					</NextLink>
				)}
				{(data?.tags?.length ?? 0) > 0 ? (
					<div className="flex flex-wrap gap-1">
						{data?.tags?.map(tag => {
							return <MicroBlogTag key={tag.name} locale={locale} tag={tag} />
						})}
					</div>
				) : null}
				{data ? (
					<div className="absolute right-1 top-1">
						<Suspense fallback={<GoToNoteLinkSkeleton />}>
							<GoToNoteLink data={data} locale={locale} />
						</Suspense>
					</div>
				) : null}
			</CardHeader>
			<CardContent className="flex flex-col gap-2 px-0 py-1">
				{data && translationKeys ? (
					<Suspense fallback={textPlaceHolder}>
						<div className="overflow-hidden line-clamp-8 relative whitespace-pre-line text-muted-foreground text-sm">
							<ShortPostTextPreview post={data} charLimit={characterPreviewCount} translationKeys={translationKeys} />
						</div>
					</Suspense>
				) : (
					textPlaceHolder
				)}
				<PostPublishDate showTime className="ml-auto italic" locale={locale} post={data} />
			</CardContent>

			{image && data ? (
				<NextLink
					locale={locale}
					className="block"
					href={getMicropostHref(data).asString()}
					title={data.title ?? undefined}
					prefetch={false}
				>
					<ContentfulImage
						className="max-h-64 object-contain rounded-xl max-w-[70%] mx-auto mb-2 mt-2"
						image={image}
						sizes={imageSizes}
					/>
				</NextLink>
			) : data === null ? (
				<Skeleton className="h-36 w-full" />
			) : null}
		</Card>
	)
}
export default MicroblogListItem
