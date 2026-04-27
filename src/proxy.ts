import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routing } from './app/src/i18n/routing'
import { blogUrl, rootWebsiteUrl, seaBattleUrl, toolsUrl } from './config/siteUrls'

type AppLocale = (typeof routing.locales)[number]

const localeSet = new Set<AppLocale>(routing.locales)
const isLocale = (value: string): value is AppLocale => (localeSet as Set<string>).has(value)

const normalizePathname = (pathname: string): string => {
	if (pathname.length > 1 && pathname.endsWith('/')) {
		return pathname.slice(0, -1)
	}

	return pathname
}

const normalizeTargetPath = (path: string): string => {
	if (path.length === 0 || path === '/') {
		return ''
	}

	return path.startsWith('/') ? path : `/${path}`
}

const localizedPath = (locale: AppLocale, path: string = '/', options: { alwaysLocale?: boolean } = {}): string => {
	const prefix = options.alwaysLocale || locale !== routing.defaultLocale ? `/${locale}` : ''
	const targetPath = `${prefix}${normalizeTargetPath(path)}`
	return targetPath.length === 0 ? '/' : targetPath
}

const redirectExternal = (request: NextRequest, baseUrl: URL, targetPath: string): Response => {
	const target = new URL(targetPath, baseUrl)
	target.search = request.nextUrl.search

	if (target.origin === request.nextUrl.origin && target.pathname === request.nextUrl.pathname) {
		return NextResponse.next()
	}

	return NextResponse.redirect(target, 308)
}

const getLegacyBlogPath = (segments: string[], locale: AppLocale): string => {
	const [firstSegment, secondSegment, ...restSegments] = segments

	if (!firstSegment || firstSegment === 'notes') {
		return localizedPath(locale)
	}

	if (firstSegment === 'articles') {
		return localizedPath(locale, '/tales')
	}

	if (firstSegment === 'micro') {
		return localizedPath(locale, '/micro-tales')
	}

	if ((firstSegment === 'note' || firstSegment === 'author') && secondSegment) {
		return localizedPath(locale, `/${[firstSegment, secondSegment, ...restSegments].join('/')}`)
	}

	return localizedPath(locale, `/${segments.join('/')}`)
}

export default function proxy(request: NextRequest): Response {
	const pathname = normalizePathname(request.nextUrl.pathname)
	const segments = pathname.split('/').filter(Boolean)
	let locale = routing.defaultLocale
	let offset = 0

	const maybeLocale = segments[0]
	if (maybeLocale && isLocale(maybeLocale)) {
		locale = maybeLocale
		offset = 1
	}

	if (segments[offset] === 'utilities' || segments[offset] === 'tools') {
		const utilityPath = segments.slice(offset + 1).join('/')
		const nextPath = utilityPath === 'image-collection-renderer' ? 'screen-fill-gallery' : utilityPath
		return redirectExternal(request, toolsUrl, localizedPath(locale, nextPath, { alwaysLocale: true }))
	}

	if (segments[offset] === 'sea-battle-game' || segments[offset] === 'sea-battle') {
		const nextPath = segments.slice(offset + 1).join('/')
		return redirectExternal(request, seaBattleUrl, localizedPath(locale, nextPath, { alwaysLocale: true }))
	}

	if (segments[offset] === 'blog') {
		return redirectExternal(request, blogUrl, getLegacyBlogPath(segments.slice(offset + 1), locale))
	}

	return redirectExternal(request, rootWebsiteUrl, pathname)
}

export const config = {
	matcher: ['/((?!api|admin|cdn|_next|_vercel|.*\\..*).*)'],
}
