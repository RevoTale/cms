import type { BreadcrumbInfo } from '@revotale/ui/Board/BoardListCrumbItem'
import { defaultLocale } from '@/i18n/config'
import { blogUrl, rootWebsiteUrl, seaBattleUrl, toolsUrl } from '../../../../config/siteUrls'

export const toolPaths = {
	root: '/',
	urlEncodeDecode: '/url/encode-decode',
	urlDecoder: '/url/decoder',
	urlEncoder: '/url/encoder',
	screenFillGallery: '/screen-fill-gallery',
	videoSpeedChanger: '/video-speed-up-slow-down',
	randomRecordSelector: '/random-record-selector',
} as const

export const blogPaths = {
	root: '/',
	notes: '/',
	articles: '/tales',
	micro: '/micro-tales',
} as const

const normalizePath = (path: string): string => {
	if (path === '/') {
		return ''
	}

	return path.startsWith('/') ? path : `/${path}`
}

const getLocalizedHref = (
	baseUrl: URL,
	locale: string,
	path: string = '/',
	options: { alwaysLocale?: boolean } = {},
): string => {
	const localePrefix = options.alwaysLocale || locale !== defaultLocale ? `/${locale}` : ''
	return `${baseUrl.origin}${localePrefix}${normalizePath(path)}`
}

export const getRootWebsiteHref = (locale: string, path: string = '/'): string =>
	getLocalizedHref(rootWebsiteUrl, locale, path)

export const getToolsHref = (locale: string, path: string = toolPaths.root): string => {
	return getLocalizedHref(toolsUrl, locale, path, { alwaysLocale: true })
}

export const getBlogHref = (locale: string, path: string = blogPaths.root): string =>
	getLocalizedHref(blogUrl, locale, path)

export const ToolsCrumb: BreadcrumbInfo = {
	href: toolsUrl.origin,
} as const
export const URLStringToolCrumb: BreadcrumbInfo = {
	href: toolPaths.urlEncodeDecode,
} as const
export const SeaBattleCrumb: BreadcrumbInfo = {
	href: seaBattleUrl.origin,
} as const
export const URLStringDecoder: BreadcrumbInfo = {
	href: toolPaths.urlDecoder,
} as const
export const URLStringEncoder: BreadcrumbInfo = {
	href: toolPaths.urlEncoder,
}

export const ScreenFillGalleryTool: BreadcrumbInfo = {
	href: toolPaths.screenFillGallery,
}
export const VideoDurationChanger: BreadcrumbInfo = {
	href: toolPaths.videoSpeedChanger,
}
export const RandomRecordSelector: BreadcrumbInfo = {
	href: toolPaths.randomRecordSelector,
}
export const BlogCrumb: BreadcrumbInfo = {
	href: getBlogHref(defaultLocale),
} as const
