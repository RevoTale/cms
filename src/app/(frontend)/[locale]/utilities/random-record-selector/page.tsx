import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import { Skeleton } from '@shadcn/ui/skeleton'
import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { type FunctionComponent, Suspense } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import RecordsRandomizer from '../../../../src/content/Randomizer/RecordsRandomizer'
import UtilityTemplate from '../../../../src/content/Tools/UtilityTemplate'
import { RandomRecordSelector } from '../../../../src/linking/map/tools'
import SettingLink from './SettingLink'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'RandomRecordSelector',
	})
	return {
		description: t('meta_desc'),
		title: t('title'),
		alternates: generateAlternatesMeta(RandomRecordSelector.href, locale),
		openGraph: {
			type: 'website',
			description: t('meta_desc'),
			title: t('title'),
		},
	}
}
const RandomRecordSelectorPage: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'RandomRecordSelector',
	})
	const settingsText = t('settings')
	const tPaste = await getTranslations({
		locale,
		namespace: 'Paste',
	})
	return (
		<UtilityTemplate locale={locale} currentHref={RandomRecordSelector.href} title={t('title')}>
			<Suspense fallback={<Skeleton className="w-full h-32" />}>
				<RecordsRandomizer
					placeholder={t('records')}
					pasteButton={{
						paste: tPaste('text'),
						loading: tPaste('loading'),
						error: tPaste('error'),
					}}
				/>
			</Suspense>

			<Suspense fallback={null}>
				<SettingLink
					locale={locale}
					className={cn(
						buttonVariants({
							variant: 'secondary',
							size: 'default',
						}),
					)}
				>
					{settingsText}
				</SettingLink>
			</Suspense>
		</UtilityTemplate>
	)
}
export default RandomRecordSelectorPage
