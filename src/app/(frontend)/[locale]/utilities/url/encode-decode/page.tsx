import { Skeleton } from '@shadcn/ui/skeleton'
import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { type FunctionComponent, Suspense } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import UrlToolJsonLd from '../../../../../src/content/Tools/UrlTool/UrlToolJsonLd'
import UrlToolTranslated from '../../../../../src/content/Tools/UrlTool/UrlToolTranslated'
import UtilityTemplate from '../../../../../src/content/Tools/UtilityTemplate'
import { URLStringToolCrumb } from '../../../../../src/linking/map/tools'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'UrlCoder',
	})
	const t2 = await getTranslations({
		locale,
		namespace: 'keywords',
	})
	return {
		description: t('metaDesc'),
		title: t('title'),
		alternates: generateAlternatesMeta(URLStringToolCrumb.href, locale),

		keywords: [t2('url'), t2('encode'), t2('decode'), t2('online')],
	}
}
const URLString: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'UrlCoder',
	})
	return (
		<UtilityTemplate locale={locale} currentHref={URLStringToolCrumb.href} title={t('title')}>
			<Suspense fallback={<Skeleton className="w-full h-64" />}>
				<UrlToolTranslated locale={locale} tool={null} />
			</Suspense>
			<Suspense>
				<UrlToolJsonLd locale={locale} />
			</Suspense>
		</UtilityTemplate>
	)
}

// noinspection JSUnusedGlobalSymbols
export default URLString
