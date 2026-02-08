import type {Locale} from 'next-intl'
import {usePathname as useNextPathname, useParams} from 'next/navigation'
import {routing} from './routing'
const usePathname = (): string => {
	const pathname = useNextPathname()
	const locale =
		useParams<{locale?: Locale}>().locale ?? routing.defaultLocale
	let formattedPathname = pathname
	if (pathname.startsWith('/' + locale)) {
		formattedPathname = pathname.substring(locale.length + 1)
	}
	return formattedPathname === '' ? '/' : formattedPathname
}
export default usePathname
