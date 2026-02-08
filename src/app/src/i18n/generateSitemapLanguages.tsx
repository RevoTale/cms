import {defaultLocale, locales} from '@/i18n/config'
import type {RelativeURL} from 'next-navigation-utils'
import getUrl from '../linking/getUrl'

const generateSitemapLanguages = (
	path: string | RelativeURL,
	excludedLocale: string = defaultLocale
): Record<string, string> => {
	const withoutDefault = locales.filter(locale => locale !== excludedLocale)
	const localeMap = new Map<(typeof locales)[number], string>()
	for (const locale of withoutDefault) {
		localeMap.set(locale, getUrl(path, locale).toString())
	}
	return Object.fromEntries(localeMap)
}
export default generateSitemapLanguages
