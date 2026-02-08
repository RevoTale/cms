import type { BreadcrumbInfo } from '@revotale/ui/Board/BoardListCrumbItem'

export const ToolsCrumb: BreadcrumbInfo = {
	href: `/utilities`,
} as const
export const URLStringToolCrumb: BreadcrumbInfo = {
	href: `${ToolsCrumb.href}/url/encode-decode`,
} as const
export const SeaBattleCrumb: BreadcrumbInfo = {
	href: `https://sea-battle.revotale.com`, //Nextjs doe snot allow me much iteractivity
} as const
export const URLStringDecoder: BreadcrumbInfo = {
	href: `${ToolsCrumb.href}/url/decoder`,
} as const
export const URLStringEncoder: BreadcrumbInfo = {
	href: `${ToolsCrumb.href}/url/encoder`,
}

export const ScreenFillGalleryTool: BreadcrumbInfo = {
	href: `${ToolsCrumb.href}/screen-fill-gallery` as const,
}
export const VideoDurationChanger: BreadcrumbInfo = {
	href: `${ToolsCrumb.href}/video-speed-up-slow-down` as const,
}
export const RandomRecordSelector: BreadcrumbInfo = {
	href: `${ToolsCrumb.href}/random-record-selector` as const,
}
export const BlogCrumb: BreadcrumbInfo = {
	href: `/blog`,
} as const
