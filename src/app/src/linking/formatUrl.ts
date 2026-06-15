import type { RelativeURL } from 'next-navigation-utils'
import { defaultLocale } from '@/i18n/config'
import { withSubdomain } from '../../../config/siteUrls'

const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z\d+.-]*:\/\//i.test(url)

const formatUrl = (rootUrl: string | URL, path: string | RelativeURL, locale: string | null, sub?: string): URL => {
	const pathStr = typeof path === 'string' ? path : path.asString()
	if (isAbsoluteUrl(pathStr)) {
		return new URL(pathStr)
	}

	const root = typeof rootUrl === 'string' ? new URL(rootUrl) : rootUrl
	const domain = sub ? withSubdomain(root, sub) : root
	return new URL(`${domain.origin}${locale === defaultLocale || locale === null ? '' : `/${locale}`}${pathStr}`)
}
export default formatUrl
