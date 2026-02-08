import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import NotFoundPage from '@revotale/ui/NotFoundPage'
import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent} from 'react'
export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations({
		locale: 'en',
		namespace: 'NotFound',
	})
	return {
		title: t('title'),
		description: t('message'),
	}
}
const Custom404: FunctionComponent<PagePropsWithLocale> = async () => {
	const t = await getTranslations({
		locale: 'en',
		namespace: 'NotFound',
	})

	return (
		<NotFoundPage
			h1={404}
			homeContent={t('goHome')}
			homeHref="/"
			p1={t('title')}
			p2={t('message')}
		/>
	)
}
// noinspection JSUnusedGlobalSymbols
export default Custom404
