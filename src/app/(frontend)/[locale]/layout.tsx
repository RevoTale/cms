import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent, ReactNode } from 'react'
import { locales } from '@/i18n/config'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import { routing } from '@/i18n/routing'
import ImageIcon from '../../../../public/android-chrome-512x512.png'
import Analytics from '../../src/Analytics'
import getDomain from '../../src/config/getDomain'
import websiteName from '../../src/config/websiteName'
import MainLayout from '../../src/content/MainLayout'
import getImageUrlThumb from '../../src/content/utils/seo/getImageUrlThumb'
import getUrl from '../../src/linking/getUrl'

interface Props {
	children: ReactNode
}
export const generateMetadata = async ({ params }: PagePropsWithLocale): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'Metadata.Root' })
	const metadata: Metadata = {
		appleWebApp: true,
		metadataBase: new URL(getUrl('', locale)).toString(),
		title: {
			default: websiteName,
			template: `%s | ${websiteName}`,
		},
		openGraph: {
			siteName: websiteName,
			title: websiteName,
			type: 'website',
			description: t('openGraphDesc'),
			images: [
				{
					...getImageUrlThumb(ImageIcon.src, getDomain(), {
						width: ImageIcon.width,
						height: ImageIcon.height,
					}),
					alt: 'RevoTale Logo',
				},
			],
		},
		twitter: {
			site: '@RevoTale',
			title: websiteName,
		},
		robots: {
			follow: true,
			index: true,
		},
		authors: {
			name: 'l-you',
			url: 'https://github.com/l-you',
		},
		classification: t('classification'),
		applicationName: websiteName,
		manifest: '/site.webmanifest',
		icons: {
			icon: [
				{
					url: '/logo/transparent.svg',
					type: 'image/svg+xml',
					media: '(prefers-color-scheme:no-preference)',
				},
				{
					url: '/logo/inverted.svg',
					type: 'image/svg+xml',
					media: '(prefers-color-scheme:dark)',
				},
				{
					url: '/logo/transparent.svg',
					type: 'image/svg+xml',
					media: '(prefers-color-scheme:light)',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					url: '/favicon-32x32.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					url: '/favicon-16x16.png',
				},
			],

			apple: [
				{
					url: '/safari-pinned-tab.svg',
					rel: 'mask-icon',
					color: '#5bbad5',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					url: '/apple-touch-icon.png',
				},
			],
		},
		other: {
			'msapplication-TileColor': '#00aba9',
		},
	}
	return metadata
}

const Layout: FunctionComponent<Props & PagePropsWithLocale & LayoutProps<'/[locale]'>> = async ({
	children,
	params,
	searchButton,
}) => {
	const { locale } = await params
	if (!hasLocale(locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body>
				<MainLayout locale={locale} searchButton={searchButton}>
					{children}
				</MainLayout>
				<Analytics />
			</body>
		</html>
	)
}
export async function generateStaticParams(): Promise<Array<{ locale: Locale }>> {
	return routing.locales.map(locale => ({ locale }))
}
// noinspection JSUnusedGlobalSymbols
export default Layout
