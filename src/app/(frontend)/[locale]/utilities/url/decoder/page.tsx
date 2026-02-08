import { Skeleton } from '@shadcn/ui/skeleton'
import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { type FunctionComponent, Suspense } from 'react'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import UrlToolJsonLd from '../../../../../src/content/Tools/UrlTool/UrlToolJsonLd'
import UrlToolTranslated from '../../../../../src/content/Tools/UrlTool/UrlToolTranslated'
import UtilityTemplate from '../../../../../src/content/Tools/UtilityTemplate'
import getUrl from '../../../../../src/linking/getUrl'
import { URLStringDecoder } from '../../../../../src/linking/map/tools'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'URLDecoder',
	})
	const t2 = await getTranslations({
		locale,
		namespace: 'keywords',
	})
	return {
		title: t('seo_title'),
		description: t('seo_desc'),
		alternates: {
			canonical: getUrl(URLStringDecoder.href, locale).toString(),
			languages: generateSitemapLanguages(URLStringDecoder.href),
		},
		openGraph: {
			title: t('seo_title'),
			description: t('seo_desc'),
			url: getUrl(URLStringDecoder.href, locale),
		},

		keywords: [t2('url'), t2('decode'), t2('online')],
	}
}
const UrlEncoder: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'ToolsBoard.Breadcrumbs',
	})
	return (
		<UtilityTemplate locale={locale} currentHref={URLStringDecoder.href} title={t('decoder')}>
			<Suspense fallback={<Skeleton className="w-full h-64" />}>
				<UrlToolTranslated locale={locale} tool="decode" />
			</Suspense>
			<Suspense>
				<UrlToolJsonLd locale={locale} />
			</Suspense>
		</UtilityTemplate>
	)
}
// noinspection JSUnusedGlobalSymbols
export default UrlEncoder
