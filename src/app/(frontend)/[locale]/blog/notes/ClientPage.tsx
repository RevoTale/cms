'use client'
import type { ApolloClient } from '@apollo/client'
import { useApolloClient } from '@apollo/client/react'
import { useOnChange, useOnce, usePromiseHandler } from '@bladl/react-hooks'
import { type FragmentType, getFragmentData } from '@blog/gql'
import { type ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { getSearchParamValue } from 'next-navigation-utils'
import { useRelativeLink } from 'next-navigation-utils/client'
import { type FunctionComponent, Suspense } from 'react'
import type { Locale } from 'use-intl'
import getGqlLocale from '@/i18n/getGqlLocale'
import { authorSlugInOption, pageOption, tagInURLOption } from '../../../../src/content/Blog/linking'
import type { noteJsonldFragment } from '../../../../src/content/LdJson/NoteJsonLD'
import NotesBlogJsonLd from '../../../../src/content/LdJson/NotesBlogJsonLd'
import {
	authorQuery,
	authorQueryInFrag,
	type blogPostlistQueryFragment,
	type rssFrag,
} from '../../../../src/content/Microblog/blogPostListGql'
import fetchMicroblogPostList from '../../../../src/content/Microblog/fetchMicroblogPostList'
import canonizeSearchQuery from '../../../../src/utils/canonizeSearchQuery'
import NotesPageClient from './NotesPageClient'
import { availableParams } from './notesParams'
import { getTagIds, tagFragment } from './notesQueries'

const fetchTagNameIn = async (
	c: ApolloClient,
	tagNameIn: string[] | null,
	locale: string,
): Promise<Array<FragmentType<typeof tagFragment>> | undefined> => {
	if (tagNameIn === null || tagNameIn.length === 0) {
		return undefined
	}
	const result = await c.query({
		query: getTagIds,
		variables: {
			tagNames: tagNameIn,
			locale: getGqlLocale(locale),
		},
	})
	const items = result.data?.Tags?.docs
	return items?.filter(Boolean) ?? undefined
}
const fetchAuthorIn = async (
	c: ApolloClient,
	authorSlugIn: string[] | null,
	locale: string,
): Promise<Array<FragmentType<typeof authorQueryInFrag>> | undefined> => {
	if (authorSlugIn === null || authorSlugIn.length === 0) {
		return undefined
	}
	const result = await c.query({
		query: authorQuery,
		variables: {
			authorSlugIn,
			locale: getGqlLocale(locale),
		},
	})
	const docs = result.data?.Authors?.docs
	return docs ? docs.filter(Boolean) : undefined
}
interface DataResult {
	items: Array<
		FragmentType<typeof blogPostlistQueryFragment> &
			FragmentType<typeof noteJsonldFragment> &
			FragmentType<typeof rssFrag>
	> | null
	page: number
	totalPages: number | null
	tagsIn: Array<FragmentType<typeof tagFragment>> | undefined
	authorIn: Array<FragmentType<typeof authorQueryInFrag>> | undefined
}
const fetchData = async (
	c: ApolloClient,
	searchParams: ReadonlyURLSearchParams,
	locale: string,
): Promise<DataResult> => {
	const tagNameIn = getSearchParamValue(searchParams, tagInURLOption)
	const authorSlugIn = getSearchParamValue(searchParams, authorSlugInOption)
	const page = getSearchParamValue(searchParams, pageOption)
	const limit = 12
	const [tagsIn, authorIn] = await Promise.all([
		fetchTagNameIn(c, tagNameIn, locale),
		fetchAuthorIn(c, authorSlugIn, locale),
	])

	const result = await fetchMicroblogPostList(c, {
		authorIn: authorIn?.map(tag => getFragmentData(authorQueryInFrag, tag)),
		limit,
		tagsIn: tagsIn?.map(tag => getFragmentData(tagFragment, tag)),
		locale,
		page,
	})

	const docs = result.data?.Micro_posts?.docs
	const items = docs ? docs.filter(Boolean) : null

	return {
		items,
		tagsIn,
		authorIn,
		page,
		totalPages: result.data?.Micro_posts?.totalPages ?? null,
	}
}
const getRssUrl = (searchparams: ReadonlyURLSearchParams, locale: Locale): string => {
	return canonizeSearchQuery(`/blog/notes/feed.xml?locale=${locale}`, searchparams, availableParams).asString()
}
const ClientPage: FunctionComponent<{
	locale: Locale
	rootUrl: string
}> = ({ locale, rootUrl }) => {
	const searchparams = useSearchParams()
	const rssFeedUrl = getRssUrl(searchparams, locale)
	const c = useApolloClient()
	const { setPromise, result } = usePromiseHandler<DataResult>()
	const url = useRelativeLink()
	useOnChange(() => {
		setPromise(fetchData(c, searchparams, locale))
	}, url.asString())
	useOnce(() => {
		setPromise(fetchData(c, searchparams, locale))
	})
	const items = result?.items ?? null
	return (
		<>
			<NotesPageClient rootUrl={rootUrl} locale={locale} rssFeedUrl={rssFeedUrl} />
			<Suspense>
				{items === null ? null : (
					<NotesBlogJsonLd
						locale={locale}
						rootUrl={rootUrl}
						items={items}
						href={canonizeSearchQuery('/blog/notes', searchparams, availableParams).asString()}
					/>
				)}
			</Suspense>
		</>
	)
}
export default ClientPage
