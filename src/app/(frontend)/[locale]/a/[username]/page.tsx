import { graphql } from '@blog/gql'
import { permanentRedirect, RedirectType } from 'next/navigation'
import type { Locale } from 'next-intl'
import { type AbsoltuteLinkBuilder, createLinkerUrl } from 'next-navigation-utils'
import getGqlLocale from '@/i18n/getGqlLocale'
import { routing } from '@/i18n/routing'
import { staleContentCache } from '../../../../src/cache-config'
import { getClient } from '../../../../src/gql/getClient'
import getUrl from '../../../../src/linking/getUrl'
import getNextJsApolloCache from '../../../../src/utils/getNextJsApolloCache'

const allAuthorsQuery = graphql(/* GraphQL */ `
	query Get_AllAuthors_Slugs($locale: LocaleInputType!, $limit: Int!) {
		Authors(limit: $limit, locale: $locale) {
			docs {
				slug
			}
		}
	}
`)

export default async function Profile({
	params,
}: {
	params: Promise<{ username: string; locale?: Locale }>
	searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<void> {
	const { username, locale } = await params
	const link: AbsoltuteLinkBuilder = createLinkerUrl(new URL(getUrl(`/blog/author/${username}`, locale ?? null)))
	permanentRedirect(link.asString(), RedirectType.push)
}

export async function generateStaticParams(): Promise<Array<{ locale: Locale; username: string }>> {
	const slugsByLocale = await Promise.all(
		routing.locales.map(async locale => {
			try {
				const result = await getClient().query({
					query: allAuthorsQuery,
					variables: {
						locale: getGqlLocale(locale),
						limit: 10000,
					},
					context: getNextJsApolloCache({
						revalidate: staleContentCache,
						tags: ['blog:authors', `blog:authors:${locale}`],
					}),
				})

				return (result.data?.Authors?.docs ?? [])
					.filter((doc): doc is { slug: string } => typeof doc?.slug === 'string')
					.map(doc => ({ locale, username: doc.slug }))
			} catch (error) {
				// eslint-disable-next-line no-console -- no need
				console.error(`Failed to fetch authors for locale ${locale}:`, error)
				return []
			}
		}),
	)

	return slugsByLocale.flat()
}
