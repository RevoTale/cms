import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type {Metadata} from 'next'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import {makeRelativeLink} from 'next-navigation-utils'
import type {FunctionComponent} from 'react'
import SchemaNavigation from '../../../src/content/SchemaNavigation/SchemaNavigation'
import getUrl from '../../../src/linking/getUrl'
import {
	RandomRecordSelector,
	ScreenFillGalleryTool,
	URLStringDecoder,
	URLStringEncoder,
	URLStringToolCrumb,
	VideoDurationChanger,
} from '../../../src/linking/map/tools'

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{locale: Locale}>
}): Promise<Metadata> => {
	const {locale} = await params
	const t = await getTranslations({
		locale,
		namespace: 'NavigationMap',
	})

	return {
		title: t('meta.title'),
		description: t('meta.description'),
		alternates: generateAlternatesMeta(
			makeRelativeLink('/navigation-map'),
			locale
		),

		openGraph: {
			type: 'website',
			title: t('meta.title'),
			description: t('meta.description'),
			url: getUrl('/navigation-map', locale).toString(),
		},
	}
}

const Page: FunctionComponent<{params: Promise<{locale: Locale}>}> = async ({
	params,
}) => {
	const {locale} = await params
	const t = await getTranslations({
		locale,
		namespace: 'NavigationMap',
	})

	const schema = [
		{
			name: t('navigation.revotale'),
			href: `/`,
			children: [
				{
					name: t('navigation.utilities'),
					href: `/utilities`,
					children: [
						{
							name: t('navigation.recordsRandomizer'),
							href: RandomRecordSelector.href,
						},
						{
							name: t('navigation.urlEncoderDecoder'),
							href: URLStringToolCrumb.href,
							children: [
								{
									name: t('navigation.encode'),
									href: URLStringEncoder.href,
								},
								{
									name: t('navigation.decode'),
									href: URLStringDecoder.href,
								},
							],
						},
						{
							name: t('navigation.screenFillGallery'),
							href: ScreenFillGalleryTool.href,
						},
						{
							name: t('navigation.videoDurationChanger'),
							href: VideoDurationChanger.href,
						},
					],
				},
				{
					name: t('navigation.browserGames'),
					href: `/browser-games`,
					children: [
						{
							name: t('navigation.battleShipGame'),
							href: `/sea-battle`,
						},
					],
				},
				{
					name: t('navigation.blog'),
					href: `/blog`,
					children: [
						{
							name: t('navigation.articles'),
							href: `/blog/articles`,
						},
						{
							name: t('navigation.notes'),
							href: `/blog/notes`,
						},
						{
							name: t('navigation.microTales'),
							href: `/blog/micro`,
						},
					],
				},
				{
					name: t('navigation.selfHostedServices'),
					href: `/homelab`,
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
			<h1 className="text-2xl font-semibold text-center">
				{t('pageTitle')}
			</h1>
			<div className="max-w-full">
				<SchemaNavigation locale={locale} schema={schema} />
			</div>
		</div>
	)
}
export default Page
