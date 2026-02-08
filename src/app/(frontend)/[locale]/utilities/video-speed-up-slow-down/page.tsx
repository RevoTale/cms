import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { type FunctionComponent, Suspense } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import DurationResize from '../../../../src/content/Tools/DurationResize'
import UtilityTemplate from '../../../../src/content/Tools/UtilityTemplate'
import { VideoDurationChanger } from '../../../../src/linking/map/tools'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'DurationConverter' })
	return {
		title: t('seo_title'),
		description: t('seo_desc'),
		alternates: generateAlternatesMeta(VideoDurationChanger.href, locale),
	}
}
const DurationConverter: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const [t, tVideoUtility] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'ToolsBoard.Breadcrumbs',
		}),
		getTranslations({
			locale,
			namespace: 'VideoUtility',
		}),
	])
	return (
		<UtilityTemplate locale={locale} currentHref={VideoDurationChanger.href} title={t('VideoSpeedChange')}>
			<div className="flex justify-start w-full">
				<Suspense
					fallback={
						<>
							<InlineSkeleton />
							<InlineSkeleton />
							<InlineSkeleton />
						</>
					}
				/>
			</div>
			<DurationResize
				placeholder={tVideoUtility('placeholder')}
				labelText={tVideoUtility('label')}
				downloadText={tVideoUtility('download')}
				closeText={tVideoUtility('close')}
				logTitleText={tVideoUtility('log_title')}
				viewLogsText={tVideoUtility('view_logs')}
				notSupportedText={tVideoUtility('not_support')}
				transform={tVideoUtility('transform')}
				loadingText={tVideoUtility('loading')}
				orChoosePresetText={tVideoUtility('or_choose_preset')}
				videoLabel={tVideoUtility('video_label')}
				selectedVideoText={tVideoUtility('selected_video')}
				notice={tVideoUtility.rich('notice', {
					b: c => <b>{c}</b>,
					br: c => (
						<>
							{c}
							<br />
						</>
					),
				})}
			/>
		</UtilityTemplate>
	)
}

export default DurationConverter
