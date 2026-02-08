import getGqlLocale from '@/i18n/getGqlLocale'
import {getFragmentData, type FragmentType} from '@blog/gql'
import {getQueryParamValue} from 'next-navigation-utils'
import {cache} from 'react'
import {staleContentCache} from '../../../../src/cache-config'
import {
	authorSlugInOption,
	pageOption,
	tagInURLOption,
} from '../../../../src/content/Blog/linking'
import type {noteJsonldFragment} from '../../../../src/content/LdJson/NoteJsonLD'
import {
	authorQuery,
	authorQueryInFrag,
	type blogPostlistQueryFragment,
	type rssFrag,
} from '../../../../src/content/Microblog/blogPostListGql'
import fetchMicroblogPost from '../../../../src/content/Microblog/fetchMicroblogPostList'
import {getClient} from '../../../../src/gql/getClient'
import getNextJsApolloCache from '../../../../src/utils/getNextJsApolloCache'
import {getTagIds, tagFragment} from './notesQueries'
const fetchTagNameIn = async (
	tagNameIn: string[] | null,
	locale: string
): Promise<Array<FragmentType<typeof tagFragment>> | undefined> => {
	if (tagNameIn === null || tagNameIn.length === 0) {
		return undefined
	}
	const result = await getClient().query({
		query: getTagIds,
		variables: {
			tagNames: tagNameIn,
			locale: getGqlLocale(locale),
		},
		context: getNextJsApolloCache(staleContentCache),
	})
	const items = result.data?.Tags?.docs
	return items?.filter(Boolean) ?? undefined
}
const fetchAuthorIn = async (
	authorSlugIn: string[] | null,
	locale: string
): Promise<Array<FragmentType<typeof authorQueryInFrag>> | undefined> => {
	if (authorSlugIn === null || authorSlugIn.length === 0) {
		return undefined
	}
	const result = await getClient().query({
		query: authorQuery,
		variables: {
			authorSlugIn,
			locale: getGqlLocale(locale),
		},
		context: getNextJsApolloCache(staleContentCache),
	})
	const docs = result.data?.Authors?.docs
	return docs ? docs.filter(Boolean) : undefined
}
export const fetchData = cache(
	async (
		searchParams: Partial<Record<string, string[] | string>>,
		locale: string
	): Promise<{
		items: Array<
			FragmentType<typeof blogPostlistQueryFragment> &
				FragmentType<typeof noteJsonldFragment> &
				FragmentType<typeof rssFrag>
		> | null
		page: number
		totalPages: number | null
		tagsIn: Array<FragmentType<typeof tagFragment>> | undefined
		authorIn: Array<FragmentType<typeof authorQueryInFrag>> | undefined
	}> => {
		const tagNameIn = getQueryParamValue(searchParams, tagInURLOption)
		const authorSlugIn = getQueryParamValue(
			searchParams,
			authorSlugInOption
		)
		const page = getQueryParamValue(searchParams, pageOption)
		const limit = 12
		const [tagsIn, authorIn] = await Promise.all([
			fetchTagNameIn(tagNameIn, locale),
			fetchAuthorIn(authorSlugIn, locale),
		])

		const result = await fetchMicroblogPost(getClient(), {
			authorIn: authorIn?.map(tag =>
				getFragmentData(authorQueryInFrag, tag)
			),
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
)
