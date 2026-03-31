import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import { routing } from '@/i18n/routing'
import getDomain from '../../src/config/getDomain'
import BlogPostsBoard from '../../src/content/Boards/BlogPostsBoard'
import GamesBoard from '../../src/content/Boards/GamesBoard'
import OpenSourceBoard from '../../src/content/Boards/OpenSourceBoard'
import SelfHostingBoard from '../../src/content/Boards/SelfHostingBoard'
import ToolsBoard from '../../src/content/Boards/ToolsBoard'
import WebsiteJSONLD from '../../src/content/LdJson/OrganizationJsonLd'
import getUrl from '../../src/linking/getUrl'

const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'Metadata.Root' })
	return {
		alternates: generateAlternatesMeta('', locale),
		description: t('desc'),
		title: t('title'),
		openGraph: {
			title: t('title'),
			description: t('openGraphDesc'),
			url: getUrl('/', locale).toString(),
		},
	}
}

export { generateMetadata }

const RootPage: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	return (
		<>
			<WebsiteJSONLD rootUrl={getDomain()} />
			<GamesBoard priority locale={locale} />
			<BlogPostsBoard locale={locale} />
			<OpenSourceBoard locale={locale} />
			<SelfHostingBoard locale={locale} />
			<ToolsBoard locale={locale} />
		</>
	)
}

export async function generateStaticParams(): Promise<Array<{ locale: Locale }>> {
	return routing.locales.map(locale => ({ locale }))
}
// noinspection JSUnusedGlobalSymbols
export default RootPage
