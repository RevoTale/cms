import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import getDomain from '../../../src/config/getDomain'
import GamesBoard from '../../../src/content/Boards/GamesBoard'
import SeaBattleImg from '../../../src/content/Boards/images/sea-battle.png'
import getImageUrlThumb from '../../../src/content/utils/seo/getImageUrlThumb'
import getUrl from '../../../src/linking/getUrl'

const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Metadata.BrowserGames',
	})

	return {
		title: t('title'),
		alternates: generateAlternatesMeta('/browser-games', locale),
		description: t('desc'),
		openGraph: {
			url: getUrl('/browser-games', locale).toString(),
			title: t('title'),
			description: t('desc'),
			images: {
				...getImageUrlThumb(SeaBattleImg.src, getDomain(), {
					width: SeaBattleImg.width,
					height: SeaBattleImg.height,
				}),
				alt: 'Sea Battle Game Gameplay preview',
			},
			type: 'website',
		},
	}
}

export { generateMetadata }

const Page: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	return <GamesBoard locale={locale} />
}
export default Page
