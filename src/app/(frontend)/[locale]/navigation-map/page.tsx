import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { makeRelativeLink } from 'next-navigation-utils'
import type { FunctionComponent } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import SchemaNavigation from '../../../src/content/SchemaNavigation/SchemaNavigation'
import getUrl from '../../../src/linking/getUrl'
import {
	blogPaths,
	getBlogHref,
	getRootWebsiteHref,
	getToolsHref,
	RandomRecordSelector,
	ScreenFillGalleryTool,
	SeaBattleCrumb,
	URLStringDecoder,
	URLStringEncoder,
	URLStringToolCrumb,
	VideoDurationChanger,
} from '../../../src/linking/map/tools'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'NavigationMap',
	})

	return {
		title: t('meta.title'),
		description: t('meta.description'),
		alternates: generateAlternatesMeta(makeRelativeLink('/navigation-map'), locale),

		openGraph: {
			type: 'website',
			title: t('meta.title'),
			description: t('meta.description'),
			url: getUrl('/navigation-map', locale).toString(),
		},
	}
}

const Page: FunctionComponent<{ params: Promise<{ locale: Locale }> }> = async ({ params }) => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'NavigationMap',
	})

	const schema = [
		{
			name: t('navigation.revotale'),
			href: getRootWebsiteHref(locale),
			children: [
				{
					name: t('navigation.utilities'),
					href: getToolsHref(locale),
					children: [
						{
							name: t('navigation.recordsRandomizer'),
							href: getToolsHref(locale, RandomRecordSelector.href),
						},
						{
							name: t('navigation.urlEncoderDecoder'),
							href: getToolsHref(locale, URLStringToolCrumb.href),
							children: [
								{
									name: t('navigation.encode'),
									href: getToolsHref(locale, URLStringEncoder.href),
								},
								{
									name: t('navigation.decode'),
									href: getToolsHref(locale, URLStringDecoder.href),
								},
							],
						},
						{
							name: t('navigation.screenFillGallery'),
							href: getToolsHref(locale, ScreenFillGalleryTool.href),
						},
						{
							name: t('navigation.videoDurationChanger'),
							href: getToolsHref(locale, VideoDurationChanger.href),
						},
					],
				},
				{
					name: t('navigation.browserGames'),
					href: getRootWebsiteHref(locale, '/browser-games'),
					children: [
						{
							name: t('navigation.battleShipGame'),
							href: SeaBattleCrumb.href,
						},
					],
				},
				{
					name: t('navigation.blog'),
					href: getBlogHref(locale),
					children: [
						{
							name: t('navigation.articles'),
							href: getBlogHref(locale, blogPaths.articles),
						},
						{
							name: t('navigation.notes'),
							href: getBlogHref(locale, blogPaths.notes),
						},
						{
							name: t('navigation.microTales'),
							href: getBlogHref(locale, blogPaths.micro),
						},
					],
				},
				{
					name: t('navigation.selfHostedServices'),
					href: getRootWebsiteHref(locale, '/homelab'),
					children: [
						{
							name: t('navigation.tv'),
							href: getUrl('/', null, 'tv'),
						},
						{
							name: t('navigation.dashboard'),
							href: getUrl('/', null, 'board'),
						},
						{
							name: t('navigation.personalNotes'),
							href: getUrl('/', null, 'notes'),
						},
					],
				},
			],
		},
	]

	return (
		<div className="flex flex-col gap-7 py-7">
			<h1 className="text-2xl font-semibold text-center">{t('pageTitle')}</h1>
			<div className="max-w-full">
				<SchemaNavigation locale={locale} schema={schema} />
			</div>
		</div>
	)
}
export default Page
