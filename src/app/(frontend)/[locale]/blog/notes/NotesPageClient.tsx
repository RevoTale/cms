'use client'
import NextLink from '@/i18n/LocaleLink'
import { useQuery } from '@apollo/client/react'
import { getFragmentData } from '@blog/gql'
import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import { Badge } from '@shadcn/ui/badge'
import { buttonVariants } from '@shadcn/ui/button'
import { Separator } from '@shadcn/ui/separator'
import { RssIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { createLinker } from 'next-navigation-utils'
import { useSearchParam } from 'next-navigation-utils/client'
import { useSearchParams } from 'next/navigation'
import { Suspense, useMemo, type FunctionComponent } from 'react'
import PaginationComponent from '../../../../components/PaginationComponent'
import {
	authorSlugInOption,
	pageOption,
	tagInURLOption,
} from '../../../../src/content/Blog/linking'
import MicroBlogPostListWithData from '../../../../src/content/Microblog/MicroblogPostListWithData'
import MicroBlogPostListWithDataSkeleton from '../../../../src/content/Microblog/MicroblogPostListWithDataSkeleton'
import {
	authorQuery,
	authorQueryInFrag,
	blogPostlistQueryFragment,
	getPosts,
} from '../../../../src/content/Microblog/blogPostListGql'
import { Micro_post_post_type_Input } from '../../../../src/gql/graphql'
import getGqlLocale from '../../../../src/i18n/getGqlLocale'
import canonizeSearchQuery from '../../../../src/utils/canonizeSearchQuery'
import AvailableTags from './AvailableTags'
import TagDeleteLink from './TagDeleteLink'
import { availableParams } from './notesParams'
import { getTagIds, tagFragment } from './notesQueries'

const pageLimit = 12

const NotesPageClient: FunctionComponent<{
	locale: Locale
	rootUrl: string
	rssFeedUrl: string
}> = ({locale, rssFeedUrl, rootUrl}) => {
	const t = useTranslations('Notes')
	const tBreadcrumbs = useTranslations('Breadcrumbs')
	const tagNameIn = useSearchParam(tagInURLOption)
	const authorSlugIn = useSearchParam(authorSlugInOption)
	const currentPage = useSearchParam(pageOption)

	const {data: tagsData, loading: tagsLoading} = useQuery(getTagIds, {
		variables: {
			tagNames: tagNameIn ?? [],
			locale: getGqlLocale(locale),
		},
		skip: (tagNameIn?.length ?? 0) === 0,
	})
	const tagsIn = tagsData?.Tags?.docs.filter(Boolean) ?? undefined

	const {data: authorData, loading: authorLoading} = useQuery(authorQuery, {
		variables: {
			authorSlugIn,
			locale: getGqlLocale(locale),
		},
		skip: authorSlugIn.length === 0,
	})
	const authorIn = authorData?.Authors?.docs.filter(Boolean) ?? undefined

	const waitingForFilters =
		((tagNameIn?.length ?? 0) > 0 && tagsLoading) ||
		(authorSlugIn.length > 0 && authorLoading)
	const {data: postsData, loading: postsLoading} = useQuery(getPosts, {
		variables: {
			page: currentPage,
			limit: pageLimit,
			locale: getGqlLocale(locale),
			postType: Micro_post_post_type_Input.Long,
			tagsIn: tagsIn?.map(tag => getFragmentData(tagFragment, tag).id),
			authorIn: authorIn?.map(
				author => getFragmentData(authorQueryInFrag, author).id
			),
		},
		skip: waitingForFilters,
	})
	const items = postsData?.Micro_posts?.docs.filter(Boolean) ?? null
	const totalPages = postsData?.Micro_posts?.totalPages ?? null

	const tagNameInValues = tagsIn?.map(
		item => getFragmentData(tagFragment, item).name
	)
	const searchParams = useSearchParams()
	const createPageLink = useMemo(() => {
		const base = canonizeSearchQuery(
			'/blog/notes',
			searchParams,
			availableParams
		)
		return (page: number): string =>
			createLinker(base).setValue(pageOption, page).asString()
	}, [searchParams])

	const showSkeletons = waitingForFilters || postsLoading

	return (
		<div className="flex flex-col gap-4">
			<Breadcrumbs
				locale={locale}
				rootUrl={rootUrl}
				homeCrumb={{title: tBreadcrumbs('home'), href: '/'}}
				title={t('title')}
				currentHref="/blog/notes"
				crumbs={[{title: t('title_blog'), href: '/blog'}]}
			/>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<h1 className="text-2xl font-semibold text-center sm:text-left">
					{t('notes_heading')}
				</h1>
			</div>
			<Suspense>
				<AvailableTags
					usedNames={tagNameInValues ?? []}
					locale={locale}
					postType={Micro_post_post_type_Input.Long}
				/>
			</Suspense>
			{showSkeletons ? (
				<div className="flex flex-wrap gap-3 items-center">
					<InlineSkeleton className="h-6 w-20" />
					<InlineSkeleton className="h-6 w-24" />
				</div>
			) : (authorIn?.length ?? 0) > 0 ? (
				<div className="flex flex-wrap gap-3 items-center">
					{authorIn?.map(item => {
						const data = getFragmentData(authorQueryInFrag, item)
						return <Badge key={data.id}>{data.name}</Badge>
					})}
				</div>
			) : null}
			{showSkeletons ? (
				<div className="flex flex-wrap gap-3">
					<InlineSkeleton className="h-6 w-24" />
					<InlineSkeleton className="h-6 w-28" />
				</div>
			) : (tagsIn?.length ?? 0) > 0 ? (
				<div className="flex flex-wrap gap-3">
					{tagsIn?.map(tag => {
						const tt = getFragmentData(tagFragment, tag)
						return (
							<Suspense key={tt.id}>
								<TagDeleteLink
									locale={locale}
									tagNameIn={
										tagNameInValues?.filter(
											i => i !== tt.name
										) ?? []
									}>
									{tt.title}
								</TagDeleteLink>
							</Suspense>
						)
					})}
				</div>
			) : null}
			<div>
				<NextLink
					locale={locale}
					prefetch={false}
					className={buttonVariants({variant: 'outline'})}
					href={rssFeedUrl}
					target="_blank"
					type="application/rss+xml"
					rel="noopener noreferrer">
					<RssIcon className="mr-2 h-4 w-4" />
					RSS
				</NextLink>
			</div>
			<Separator className="my-2" />
			{showSkeletons ? (
				<MicroBlogPostListWithDataSkeleton skeletonCount={16} />
			) : items?.length === 0 ? (
				<p className="m-auto text-4xl text-center font-bold my-12">
					{t('no_notes')}
				</p>
			) : (
				<MicroBlogPostListWithData
					locale={locale}
					items={
						items?.map(item =>
							getFragmentData(blogPostlistQueryFragment, item)
						) ?? null
					}
				/>
			)}
			<PaginationComponent
				className="mt-4"
				locale={locale}
				currentPage={currentPage}
				totalPages={totalPages}
				createPageLink={createPageLink}
				previousLabel={t('pagination.previous')}
				nextLabel={t('pagination.next')}
			/>
		</div>
	)
}

export default NotesPageClient
