import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import type { WebSite, WithContext } from 'schema-dts'
import 'server-only'
import getUrl from '../../../linking/getUrl'
import { URLStringToolCrumb } from '../../../linking/map/tools'

interface Props {
	locale: Locale
}
const UrlToolJsonLd: FunctionComponent<Props> = async ({ locale }) => {
	const [t, t2] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'UrlCoder',
		}),
		getTranslations({
			locale,
			namespace: 'keywords',
		}),
	])
	const json: WithContext<WebSite> = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		url: getUrl(URLStringToolCrumb.href, locale).toString(),
		name: t('title'),
		description: t('metaDesc'),
		keywords: [t2('url'), t2('encode'), t2('decode'), t2('online')].join(', '),
		inLanguage: locale,
		dateCreated: '2024',
		isAccessibleForFree: true,
	}
	return <script type="application/ld+json">{JSON.stringify(json)}</script>
}

export default UrlToolJsonLd
