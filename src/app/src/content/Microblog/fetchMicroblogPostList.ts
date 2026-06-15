import type { ApolloClient } from '@apollo/client'
import { type FragmentType, getFragmentData } from '@blog/gql'
import type { ResultOf } from '@graphql-typed-document-node/core'
import { cache } from 'react'
import getGqlLocale from '@/i18n/getGqlLocale'
import { staleContentCache } from '../../cache-config'
import type { Micro_post_post_type_Input } from '../../gql/graphql'
import getNextJsApolloCache from '../../utils/getNextJsApolloCache'
import { authorInFrag, getPosts, tagFrag } from './blogPostListGql'

interface Props {
	authorIn?: Array<FragmentType<typeof authorInFrag>>
	limit: number
	tagsIn?: Array<FragmentType<typeof tagFrag>>
	locale: string
	page?: number
	postType?: Micro_post_post_type_Input
}
const emptyTags = 0
const fetchMicroblogPostList = cache(
	async (
		client: ApolloClient,
		{ authorIn, limit, tagsIn, locale, page = 1, postType = 'long' }: Props,
	): Promise<ApolloClient.QueryResult<ResultOf<typeof getPosts>>> =>
		await client.query({
			query: getPosts,
			context: getNextJsApolloCache({
				revalidate: staleContentCache,
				tags: ['blog:posts', `blog:posts:${locale}`],
			}),
			variables: {
				page,
				authorIn:
					authorIn !== undefined && authorIn.length > emptyTags
						? authorIn.map(tag => {
								return getFragmentData(authorInFrag, tag).id
							})
						: undefined,
				locale: getGqlLocale(locale),
				limit,
				postType,
				tagsIn:
					tagsIn !== undefined && tagsIn.length > emptyTags
						? tagsIn.map(tag => {
								return getFragmentData(tagFrag, tag).id
							})
						: undefined,
			},
		}),
)
export default fetchMicroblogPostList
