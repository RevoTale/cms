import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import getDomain from '../../../src/config/getDomain'
import ToolsBoard from '../../../src/content/Boards/ToolsBoard'
import getUrl from '../../../src/linking/getUrl'
import { ToolsCrumb } from '../../../src/linking/map/tools'

const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Metadata.Utils',
	})

	return {
		title: t('title'),
		alternates: {
			canonical: getUrl(`/utilities`, locale).toString(),
			languages: generateSitemapLanguages(`/utilities`),
		},
		description: t('desc'),
	}
}

export { generateMetadata }

const ToolsPage: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'ToolsBoard.Breadcrumbs',
	})
	const tBreadcrumbs = await getTranslations({
		locale,
		namespace: 'Breadcrumbs',
	})
	return (
		<>
			<Breadcrumbs
				rootUrl={getDomain()}
				locale={locale}
				className="mx-auto max-w-fit mt-1"
				homeCrumb={{ title: tBreadcrumbs('home'), href: '/' }}
				crumbs={[]}
				currentHref={ToolsCrumb.href}
				title={t('Utils')}
			/>
			<ToolsBoard locale={locale} />
		</>
	)
}

// noinspection JSUnusedGlobalSymbols
export default ToolsPage
