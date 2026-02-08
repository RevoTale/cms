import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import {Skeleton} from '@shadcn/ui/skeleton'
import type {Metadata} from 'next'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import {type FunctionComponent, Suspense} from 'react'
import RandomizerSettings from '../../../../../src/content/Randomizer/RandomizerSettings'
import getUrl from '../../../../../src/linking/getUrl'
import {RandomRecordSelector} from '../../../../../src/linking/map/tools'
export const generateMetadata = async ({
	params,
}: {
	params: Promise<{locale: Locale}>
}): Promise<Metadata> => {
	const {locale} = await params
	const t = await getTranslations({
		locale,
		namespace: 'RecordRandomizer',
	})
	return {
		description: t('setting_seo_desc'),
		title: t('setting_seo_title'),
		alternates: {
			canonical: getUrl(
				RandomRecordSelector.href + '/settings',
				locale
			).toString(),
		},
	}
}
const Page: FunctionComponent<PagePropsWithLocale> = async ({params}) => {
	const {locale} = await params
	const t = await getTranslations({
		locale,
		namespace: 'RecordRandomizer',
	})
	return (
		<Suspense fallback={<Skeleton className="h-72 w-full" />}>
			<RandomizerSettings
				className="max-w-96 mx-auto"
				label={t('duration_setting_title')}
				disableDialogTitle={t('setting_disable_winner_dialog_title')}
				description={t('duration_setting_desc')}
				disableDialogDesc={t('setting_disable_winner_dialog_desc')}
				settingsSave={t('setting_save')}
				settingTitle={t('setting_title')}
			/>
		</Suspense>
	)
}

export default Page
