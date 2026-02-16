import { graphql } from '@blog/gql'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Locale } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { cache, type FunctionComponent } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import getGqlLocale from '@/i18n/getGqlLocale'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import { routing } from '@/i18n/routing'
import { metadataCache, staleContentCache } from '../../../../../src/cache-config'
import getAuthorHref from '../../../../../src/content/Blog/getAuthorHref'
import getMicropostHref from '../../../../../src/content/Microblog/getMicroPostHref'
import SingleMicroBlogPostPage from '../../../../../src/content/Microblog/SingleMicroPostPage'
import { getTwitterCardForMicroPost } from '../../../../../src/content/utils/seo/getTwitterCard'
import { getClient } from '../../../../../src/gql/getClient'
import getUrl from '../../../../../src/linking/getUrl'
import getNextJsApolloCache from '../../../../../src/utils/getNextJsApolloCache'
import pick from '../../../../../src/utils/pick'
import getOG from './getOG'

type Props = {
	params: Promise<{
		slug: string
	}>
} & PagePropsWithLocale

const postSeoQuery = graphql(/* GraphQL */ `
	query Get_SingleMicroPost_SEO($slug: String!, $locale: LocaleInputType!) {
		Micro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {
			docs {
				authors {
					...GetAuthorURL
					name
				}
				...MicroPostPage_getOG
				meta {
					title
					description
				}
				...Blog_getMicropostHref
			}
		}
	}
`)

const allPostsQuery = graphql(/* GraphQL */ `
	query Get_AllMicroPosts_Slugs($locale: LocaleInputType!, $limit: Int!) {
		Micro_posts(limit: $limit, locale: $locale) {
			docs {
				slug
			}
		}
	}
`)
const getPostsSeo = cache(async (slug: string, locale: Locale) => {
	const result = await getClient().query({
		query: postSeoQuery,
		variables: {
			slug,
			locale: getGqlLocale(locale),
		},
		context: getNextJsApolloCache({
			revalidate: metadataCache,
			tags: ['blog:posts', `blog:post:${slug}`, `blog:post:${slug}:${locale}`],
		}),
	})
	const docs = result.data?.Micro_posts?.docs
	if (!docs) {
		return null
	}
	return docs[0] ?? null
})

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const { slug, locale } = await params
	const post = await getPostsSeo(slug, locale)
	if (post === null) {
		notFound()
	}

	// Generate Open Graph data
	const [openGraph, authors] = [
		getOG(post, locale),
		post.authors?.map(author => ({
			url: getUrl(getAuthorHref(author), locale).toString(),
			name: author.name ?? '',
		})) ?? [],
	]

	const twitter = getTwitterCardForMicroPost(openGraph, {
		authors,
		siteName: '@RevoTale',
		hasAttachment: Boolean(openGraph.images),
	})

	return {
		title: post.meta?.title ?? '',
		description: post.meta?.description ?? '',
		publisher: 'RevoTale',
		alternates: generateAlternatesMeta(getMicropostHref(post), locale),
		authors,
		robots: {
			follow: true,
			index: true,
		},
		twitter,
		pinterest: {
			richPin: true,
		},
		openGraph,
	}
}
const Page: FunctionComponent<Props> = async ({ params }) => {
	const { slug, locale } = await params
	const messages = pick(
		await getMessages({
			locale,
		}),
		['copyButton'],
	)
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<SingleMicroBlogPostPage locale={locale} slug={slug} priority />
		</NextIntlClientProvider>
	)
}
export async function generateStaticParams(): Promise<Array<{ locale: Locale; slug: string }>> {
	const slugsByLocale = await Promise.all(
		routing.locales.map(async locale => {
			try {
				const result = await getClient().query({
					query: allPostsQuery,
					variables: {
						locale: getGqlLocale(locale),
						limit: 10000, // Fetch all posts (adjust if you have more)
					},
					context: getNextJsApolloCache({
						revalidate: staleContentCache,
						tags: ['blog:posts', `blog:posts:${locale}`],
					}),
				})

				return (result.data?.Micro_posts?.docs ?? [])
					.filter((doc): doc is { slug: string } => typeof doc?.slug === 'string')
					.map(doc => ({ locale, slug: doc.slug }))
			} catch (error) {
				// eslint-disable-next-line no-console -- needed
				console.error(`Failed to fetch posts for locale ${locale}:`, error)
				return []
			}
		}),
	)

	return slugsByLocale.flat()
}
export default Page
