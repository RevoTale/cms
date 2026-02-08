import { getFragmentData } from '@blog/gql'
import type { Metadata } from 'next'
import { type Locale, NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import 'server-only'
import getDomain from '../../../../src/config/getDomain'
import websiteName from '../../../../src/config/websiteName'
import { blogPostlistQueryFragment } from '../../../../src/content/Microblog/blogPostListGql'
import getImageThumb from '../../../../src/content/utils/seo/getImageThumb'
import BlogApolloProvider from '../../../../src/gql/BlogApolloProvider'
import getUrl from '../../../../src/linking/getUrl'
import canonizeSearchQuery from '../../../../src/utils/canonizeSearchQuery'
import pick from '../../../../src/utils/pick'
import ClientPage from './ClientPage'
import { fetchData } from './fetchData'
import { availableParams } from './microParams'
import { tagFragment } from './microQueries'

const maxImages = 6
export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const [t, tMap] = await Promise.all([
		getTranslations({
			namespace: 'PageMeta.notes',
			locale,
		}),
		getTranslations({
			namespace: 'NavigationMap',
			locale,
		}),
	])
	const sp: Record<string, never> = {}
	const { items, tagsIn } = await fetchData(sp, locale)

	const tagTitle = getFragmentData(tagFragment, tagsIn?.[0] ?? null)?.title
	const microTalesTitle = tMap('navigation.microTales')
	return {
		title: microTalesTitle,
		robots: {
			index: false,
			follow: true,
		},
		description: t('description'),
		openGraph: {
			type: 'website',
			title: tagTitle === null || tagTitle === undefined ? microTalesTitle : `${tagTitle} | ${microTalesTitle}`,
			description: t('description'),
			siteName: websiteName,
			url: getUrl(canonizeSearchQuery('/blog/micro', sp, availableParams).asString(), locale),
			images:
				items === null
					? []
					: items
							.slice(0, maxImages)
							.map(item => {
								const image = getFragmentData(blogPostlistQueryFragment, item).meta?.image ?? null
								if (image === null) {
									return null
								}

								return {
									...getImageThumb(image, getDomain()),
									alt: image.alt ?? undefined,
								}
							})
							.filter((image): image is NonNullable<typeof image> => image !== null),
		},
		alternates: generateAlternatesMeta(canonizeSearchQuery('/blog/micro', sp, availableParams), locale),
	}
}

const Page: FunctionComponent<
	{
		searchParams: Promise<{
			tag_name_in: string | string[]
			authorSlug: string | string[]
		}>
	} & PagePropsWithLocale
> = async ({ params }) => {
	const { locale } = await params
	const messages = pick(
		await getMessages({
			locale,
		}),
		['Blog', 'Notes', 'microblog', 'Breadcrumbs', 'NavigationMap', 'copyButton'],
	)
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<BlogApolloProvider>
				<ClientPage rootUrl={getDomain()} locale={locale} />
			</BlogApolloProvider>
		</NextIntlClientProvider>
	)
}

export default Page
