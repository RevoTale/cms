import type { BreadcrumbInfo } from '@revotale/ui/Board/BoardListCrumbItem'

export const toolsBaseUrl = 'https://tools.revotale.com'

export const toolPaths = {
	root: '/',
	urlEncodeDecode: '/url/encode-decode',
	urlDecoder: '/url/decoder',
	urlEncoder: '/url/encoder',
	screenFillGallery: '/screen-fill-gallery',
	videoSpeedChanger: '/video-speed-up-slow-down',
	randomRecordSelector: '/random-record-selector',
} as const

export const getToolsHref = (locale: string, path: string = toolPaths.root): string => {
	const normalizedPath = path === '/' ? '' : path
	return `${toolsBaseUrl}/${locale}${normalizedPath}`
}

export const ToolsCrumb: BreadcrumbInfo = {
	href: toolsBaseUrl,
} as const
export const URLStringToolCrumb: BreadcrumbInfo = {
	href: toolPaths.urlEncodeDecode,
} as const
export const SeaBattleCrumb: BreadcrumbInfo = {
	href: `https://sea-battle.revotale.com`, //Nextjs doe snot allow me much iteractivity
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
	href: `/blog`,
} as const
