'use client'
import { useQuery } from '@apollo/client/react'
import { getFragmentData } from '@blog/gql'
import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import { Badge } from '@shadcn/ui/badge'
import { Separator } from '@shadcn/ui/separator'
import { useSearchParams } from 'next/navigation'
import type { Locale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { createLinker } from 'next-navigation-utils'
import { useSearchParam } from 'next-navigation-utils/client'
import { type FunctionComponent, Suspense, useMemo } from 'react'
import PaginationComponent from '../../../../components/PaginationComponent'
import { authorSlugInOption, pageOption, tagInURLOption } from '../../../../src/content/Blog/linking'
import {
	authorQuery,
	authorQueryInFrag,
	blogPostlistQueryFragment,
	getPosts,
} from '../../../../src/content/Microblog/blogPostListGql'
import MicroblogShortPostListWithData from '../../../../src/content/Microblog/MicroblogShortPostListWithData'
import getGqlLocale from '../../../../src/i18n/getGqlLocale'
import canonizeSearchQuery from '../../../../src/utils/canonizeSearchQuery'
import AvailableTags from '../notes/AvailableTags'
import TagDeleteLink from '../notes/TagDeleteLink'
import { availableParams } from './microParams'
import { getTagIds, tagFragment } from './microQueries'

const pageLimit = 12

const MicroPageClient: FunctionComponent<{
	locale: Locale
	rootUrl: string
}> = ({ locale, rootUrl }) => {
	const tNotes = useTranslations('Notes')
	const tBreadcrumbs = useTranslations('Breadcrumbs')
	const tMap = useTranslations('NavigationMap')
	const tagNameIn = useSearchParam(tagInURLOption)
	const authorSlugIn = useSearchParam(authorSlugInOption)
	const currentPage = useSearchParam(pageOption)

	const { data: tagsData, loading: tagsLoading } = useQuery(getTagIds, {
		variables: {
			tagNames: tagNameIn ?? [],
			locale: getGqlLocale(locale),
		},
		skip: (tagNameIn?.length ?? 0) === 0,
	})
	const tagsIn = tagsData?.Tags?.docs.filter(Boolean) ?? undefined

	const { data: authorData, loading: authorLoading } = useQuery(authorQuery, {
		variables: {
			authorSlugIn,
			locale: getGqlLocale(locale),
		},
		skip: authorSlugIn.length === 0,
	})
	const authorIn = authorData?.Authors?.docs.filter(Boolean) ?? undefined

	const waitingForFilters = ((tagNameIn?.length ?? 0) > 0 && tagsLoading) || (authorSlugIn.length > 0 && authorLoading)
	const { data: postsData, loading: postsLoading } = useQuery(getPosts, {
		variables: {
			page: currentPage,
			limit: pageLimit,
			locale: getGqlLocale(locale),
			postType: 'short',
			tagsIn: tagsIn?.map(tag => getFragmentData(tagFragment, tag).id),
			authorIn: authorIn?.map(author => getFragmentData(authorQueryInFrag, author).id),
		},
		skip: waitingForFilters,
	})
	const items = postsData?.Micro_posts?.docs.filter(Boolean) ?? null
	const totalPages = postsData?.Micro_posts?.totalPages ?? null

	const tagNameInValues = tagsIn?.map(item => getFragmentData(tagFragment, item).name)
	const searchParams = useSearchParams()
	const createPageLink = useMemo(() => {
		const base = canonizeSearchQuery('/blog/micro', searchParams, availableParams)
		return (page: number): string => createLinker(base).setValue(pageOption, page).asString()
	}, [searchParams])

	const showSkeletons = waitingForFilters || postsLoading
	const title = tMap('navigation.microTales')

	return (
		<div className="flex flex-col gap-4">
			<Breadcrumbs
				locale={locale}
				rootUrl={rootUrl}
				homeCrumb={{ title: tBreadcrumbs('home'), href: '/' }}
				title={title}
				currentHref="/blog/micro"
				crumbs={[{ title: tBreadcrumbs('blog'), href: '/blog' }]}
			/>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<h1 className="text-2xl font-semibold text-center sm:text-left">{title}</h1>
			</div>
			<Suspense>
				<AvailableTags usedNames={tagNameInValues ?? []} locale={locale} postType="short" />
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
								<TagDeleteLink locale={locale} tagNameIn={tagNameInValues?.filter(item => item !== tt.name) ?? []}>
									{tt.title}
								</TagDeleteLink>
							</Suspense>
						)
					})}
				</div>
			) : null}
			<Separator className="my-2" />
			{showSkeletons ? (
				<MicroblogShortPostListWithData locale={locale} rootUrl={rootUrl} items={null} skeletonCount={10} />
			) : items?.length === 0 ? (
				<p className="m-auto text-4xl text-center font-bold my-12">{tNotes('no_notes')}</p>
			) : (
				<MicroblogShortPostListWithData
					locale={locale}
					rootUrl={rootUrl}
					items={items?.map(item => getFragmentData(blogPostlistQueryFragment, item)) ?? null}
				/>
			)}
			<PaginationComponent
				className="mt-4"
				locale={locale}
				currentPage={currentPage}
				totalPages={totalPages}
				createPageLink={createPageLink}
				previousLabel={tNotes('pagination.previous')}
				nextLabel={tNotes('pagination.next')}
			/>
		</div>
	)
}

export default MicroPageClient
