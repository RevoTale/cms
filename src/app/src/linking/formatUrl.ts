import {defaultLocale} from '@/i18n/config'
import type {RelativeURL} from 'next-navigation-utils'

const formatUrl = (
	rootUrl: string,
	path: string | RelativeURL,
	locale: string | null,
	sub?: string
): URL => {
	const pathStr = typeof path === 'string' ? path : path.asString()
	let domain = rootUrl
	if ((sub ?? '') !== '') {
		domain = domain.replace('https://', `https://${sub}.`)
	}
	return new URL(
		`${domain}${locale === defaultLocale || locale === null ? '' : `/${locale}`}${pathStr}`
	)
}
export default formatUrl
