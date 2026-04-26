import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './app/src/i18n/routing'

type AppLocale = (typeof routing.locales)[number]

const intlProxy = createMiddleware(routing)
const localeSet = new Set<AppLocale>(routing.locales)
const noLocaleRewritePaths = new Set(['/sitemap-index'])
const toolsBaseURL = 'https://tools.revotale.com'
const isLocale = (value: string): value is AppLocale => (localeSet as Set<string>).has(value)

const normalizePathname = (pathname: string): string => {
	if (pathname.length > 1 && pathname.endsWith('/')) {
		return pathname.slice(0, -1)
	}

	return pathname
}

export default function proxy(request: NextRequest): Response {
	const pathname = normalizePathname(request.nextUrl.pathname)
	if (noLocaleRewritePaths.has(pathname)) {
		return NextResponse.next()
	}

	const segments = pathname.split('/').filter(Boolean)
	let locale = routing.defaultLocale
	let offset = 0

	const maybeLocale = segments[0]
	if (maybeLocale && isLocale(maybeLocale)) {
		locale = maybeLocale
		offset = 1
	}

	if (segments[offset] === 'utilities') {
		const utilityPath = segments.slice(offset + 1).join('/')
		const nextPath = utilityPath === 'image-collection-renderer' ? 'screen-fill-gallery' : utilityPath
		const targetPath = nextPath.length > 0 ? `/${locale}/${nextPath}` : `/${locale}`
		const target = new URL(`${toolsBaseURL}${targetPath}`)
		target.search = request.nextUrl.search
		return NextResponse.redirect(target, 308)
	}

	if (segments[offset] === 'sea-battle-game') {
		const nextPath = segments.slice(offset + 1).join('/')
		const targetPath = nextPath.length > 0 ? `/${locale}/${nextPath}` : `/${locale}/`
		const target = new URL(`https://sea-battle.revotale.com${targetPath}`)
		target.search = request.nextUrl.search
		return NextResponse.redirect(target, 308)
	}

	return intlProxy(request)
}

export const config = {
	matcher: ['/((?!api|admin|_next|_vercel|.*\\..*).*)'],
}
