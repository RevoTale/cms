import getGqlLocale from '@/i18n/getGqlLocale'
import {routing} from '@/i18n/routing'
import {graphql} from '@blog/gql'
import type {Locale} from 'next-intl'
import {createLinkerUrl, type AbsoltuteLinkBuilder} from 'next-navigation-utils'
import {permanentRedirect, RedirectType} from 'next/navigation'
import {getClient} from '../../../../src/gql/getClient'
import getUrl from '../../../../src/linking/getUrl'

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
	params: Promise<{username: string; locale?: Locale}>
	searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<void> {
	const {username, locale} = await params
	const link: AbsoltuteLinkBuilder = createLinkerUrl(
		new URL(getUrl(`/blog/author/${username}`, locale ?? null))
	)
	permanentRedirect(link.asString(), RedirectType.push)
}

export async function generateStaticParams(): Promise<
	Array<{locale: Locale; username: string}>
> {
	const params: Array<{locale: Locale; username: string}> = []

	for (const locale of routing.locales) {
		try {
			const result = await getClient().query({
				query: allAuthorsQuery,
				variables: {
					locale: getGqlLocale(locale),
					limit: 10000,
				},
			})

			const docs = result.data?.Authors?.docs ?? []
			for (const doc of docs) {
				if (doc.slug) {
					params.push({locale, username: doc.slug})
				}
			}
		} catch (error) {
			// eslint-disable-next-line no-console -- no need
			console.error(
				`Failed to fetch authors for locale ${locale}:`,
				error
			)
		}
	}

	return params
}
