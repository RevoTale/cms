import { createNavigation } from 'next-intl/navigation'
import { defaultLocale, localePrefix, locales } from './config'
export const { redirect, getPathname } = createNavigation({
	locales,
	localePrefix,
	defaultLocale,
})
