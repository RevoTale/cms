import getGqlLocale from '@/i18n/getGqlLocale'
import {graphql} from '@blog/gql'
import type {Locale} from 'next-intl'
import {notFound} from 'next/navigation'
import {type FunctionComponent, cache} from 'react'
import {metadataCache} from '../../cache-config'
import {getClient} from '../../gql/getClient'
import getNextJsApolloCache from '../../utils/getNextJsApolloCache'
import SingleMicroBlogPostPageData from './SingleMicroPostPageData'

const postQuery = graphql(/* GraphQL */ `
	query get_singleBlogMicroPost($slug: String!, $locale: LocaleInputType) {
		Micro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {
			docs {
				...SinglePostPageData
			}
		}
	}
`)
export const fetchPost = cache(async (slug: string, locale: string) => {
	const result = await getClient().query({
		query: postQuery,
		variables: {
			slug,
			locale: getGqlLocale(locale),
		},
		context: getNextJsApolloCache(metadataCache),
	})
	return (result.data?.Micro_posts?.docs ?? [])[0] ?? null
})
interface Props {
	slug: string
	priority?: boolean
	locale: Locale
}
const SingleMicroBlogPostPage: FunctionComponent<Props> = async ({
	slug,
	priority,
	locale,
}) => {
	const item = await fetchPost(slug, locale)
	if (item === null) {
		notFound()
	}

	return (
		<SingleMicroBlogPostPageData
			post={item}
			locale={locale}
			priority={priority}
		/>
	)
}
export default SingleMicroBlogPostPage
