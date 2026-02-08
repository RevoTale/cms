import type { Locale } from 'next-intl'

interface PagePropsWithLocale {
	params: Promise<{
		locale: Locale
	}>
}
export default PagePropsWithLocale
