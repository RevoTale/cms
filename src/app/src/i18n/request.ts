import { hasLocale } from 'next-intl'
import { getRequestConfig, type RequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
	const targetLocale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
	return {
		locale: targetLocale,

		messages: (await import(`../../dictionaries/${targetLocale}.json`)).default,
	}
})
