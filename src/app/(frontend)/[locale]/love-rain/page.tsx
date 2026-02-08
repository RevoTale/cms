import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import type {Metadata} from 'next'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent} from 'react'
import LoveRain from '../../../src/content/LoveRain/LoveRain'
import getUrl from '../../../src/linking/getUrl'

const PAGE_PATH = '/love-rain'

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{locale: Locale}>
}): Promise<Metadata> => {
	const {locale} = await params
	const t = await getTranslations({
		locale,
		namespace: 'LoveRain.meta',
	})

	return {
		title: t('title'),
		description: t('description'),
		alternates: {
			canonical: getUrl(PAGE_PATH, locale).toString(),
			languages: generateSitemapLanguages(PAGE_PATH),
		},
	}
}

const LoveRainPage: FunctionComponent<PagePropsWithLocale> = () => <LoveRain />

export default LoveRainPage
