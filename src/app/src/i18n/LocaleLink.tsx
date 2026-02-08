import Link from 'next/link'
import type { Locale } from 'next-intl'
import { type ReactNode, use } from 'react'
import { routing } from '@/i18n/routing'
import type { LinkLocale } from './linkProps'

// Function to check if a URL is absolute
const isAbsoluteUrl = (url: string): boolean => {
	return /^(?:[a-z+]+:)?\/\/|^mailto:|^tel:|#/i.test(url)
}

interface ServerLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	locale: LinkLocale
	scroll?: boolean
	prefetch?: boolean
}
const clearHref = (href: string): string => {
	if (href === '/') {
		return href
	}
	const nonLocalizedPart = href.slice(1 + maxLocaleLen)
	return nonLocalizedPart.startsWith('/') ? nonLocalizedPart : `/${nonLocalizedPart}`
}
const maxLocaleLen = 2
const LocaleLink = ({ href, locale: promisedLocale, scroll, ...props }: ServerLinkProps): ReactNode => {
	const locale = typeof promisedLocale === 'string' ? promisedLocale : use(promisedLocale)
	if (isAbsoluteUrl(href)) {
		return <Link scroll={scroll} href={href} hrefLang={locale} {...props} />
	}
	if (href.startsWith('/')) {
		const currentLocaleStr = href.substring(1, 1 + maxLocaleLen)
		const currentLocale: Locale =
			routing.locales.find((i): i is Locale => i === currentLocaleStr) ?? routing.defaultLocale
		const cleanedHref = routing.locales.some(i => i === currentLocaleStr) ? clearHref(href) : href

		return (
			<Link
				scroll={scroll}
				href={locale === routing.defaultLocale ? cleanedHref : `/${locale}${cleanedHref}`}
				hrefLang={currentLocale}
				{...props}
			/>
		)
	}
	return <Link scroll={scroll} href={href} {...props} />
}

export default LocaleLink
