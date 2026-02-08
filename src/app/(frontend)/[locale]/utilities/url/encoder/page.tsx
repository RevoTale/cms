import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import {Skeleton} from '@shadcn/ui/skeleton'
import type {Metadata} from 'next'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import {type FunctionComponent, Suspense} from 'react'
import UrlToolJsonLd from '../../../../../src/content/Tools/UrlTool/UrlToolJsonLd'
import UrlToolTranslated from '../../../../../src/content/Tools/UrlTool/UrlToolTranslated'
import UtilityTemplate from '../../../../../src/content/Tools/UtilityTemplate'
import {URLStringEncoder} from '../../../../../src/linking/map/tools'

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{locale: Locale}>
}): Promise<Metadata> => {
	const {locale} = await params
	const t = await getTranslations({
		namespace: 'URLEncoder',
		locale,
	})
	const t2 = await getTranslations({
		namespace: 'keywords',
		locale,
	})
	return {
		title: t('seo_title'),
		description: t('seo_desc'),
		alternates: generateAlternatesMeta(URLStringEncoder.href, locale),

		keywords: [t2('url'), t2('encode'), t2('online')],
	}
}
const Encoder: FunctionComponent<PagePropsWithLocale> = async ({params}) => {
	const {locale} = await params
	const t = await getTranslations({
		locale,
		namespace: 'ToolsBoard.Breadcrumbs',
	})
	return (
		<UtilityTemplate
			locale={locale}
			currentHref={URLStringEncoder.href}
			title={t('encoder')}>
			<Suspense fallback={<Skeleton className="w-full h-64" />}>
				<UrlToolTranslated tool="encode" locale={locale} />
			</Suspense>

			<Suspense>
				<UrlToolJsonLd locale={locale} />
			</Suspense>
		</UtilityTemplate>
	)
}
// noinspection JSUnusedGlobalSymbols
export default Encoder
