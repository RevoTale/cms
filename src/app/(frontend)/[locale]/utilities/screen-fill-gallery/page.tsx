import { Skeleton } from '@shadcn/ui/skeleton'
import type { Metadata } from 'next'
import { type Locale, NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { type FunctionComponent, Suspense } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import ScreenFillGalleryBoard from '../../../../src/content/Tools/ScreenFillGallery/ScreenFillGalleryBoard'
import UtilityTemplate from '../../../../src/content/Tools/UtilityTemplate'
import { getTwitterCard } from '../../../../src/content/utils/seo/getTwitterCard'
import getUrl from '../../../../src/linking/getUrl'
import { ScreenFillGalleryTool } from '../../../../src/linking/map/tools'
import pick from '../../../../src/utils/pick'
export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'ScreenFillGallery',
	})
	const pageUrl = getUrl(ScreenFillGalleryTool.href, locale)

	// Open Graph data
	const openGraph = {
		type: 'website' as const,
		url: pageUrl,
		title: t('seo_title'),
		description: t('seo_desc'),
		siteName: 'RevoTale',
		locale,
	}

	// Twitter card
	const twitter = getTwitterCard(openGraph, {
		defaultSite: '@RevoTale',
		forceCardType: 'summary',
	})

	return {
		description: t('seo_desc'),
		title: t('seo_title'),
		keywords: [
			t('keyword1'),
			t('keyword2'),
			t('keyword3'),
			t('keyword4'),
			t('keyword5'),
			t('keyword6'),
			t('keyword7'),
			t('keyword8'),
		],
		authors: {
			name: 'RevoTale',
			url: 'https://github.com/RevoTale',
		},
		creator: t('creator'),
		publisher: t('publisher'),
		category: t('category'),
		classification: t('classification'),
		applicationName: t('applicationName'),
		alternates: generateAlternatesMeta(ScreenFillGalleryTool.href, locale),
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph,
		twitter,
		other: {
			'theme-color': '#000000',
		},
	}
}

const ScreenFillGallery: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'ScreenFillGallery',
	})
	const messages = pick(
		await getMessages({
			locale,
		}),
		['ScreenFillGallery'],
	)
	const translations = {
		title: t('title'),
		description: t('description'),
		imageLabel: t('imageLabel'),
		fullscreenMode: t('fullscreenMode'),
	}
	return (
		<UtilityTemplate locale={locale} currentHref={ScreenFillGalleryTool.href} title={t('title')}>
			<Suspense fallback={<Skeleton className="w-full h-32" />}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ScreenFillGalleryBoard translations={translations} />
				</NextIntlClientProvider>
			</Suspense>
		</UtilityTemplate>
	)
}

export default ScreenFillGallery
