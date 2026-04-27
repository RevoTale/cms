import type { Metadata } from 'next'
import { cmsUrl } from '../../config/siteUrls'

const defaultOpenGraph: Metadata['openGraph'] = {
	type: 'website',
	description: 'An open-source website built with Payload and Next.js.',
	images: [
		{
			url: `${cmsUrl.origin}/website-template-OG.webp`,
		},
	],
	siteName: 'RevoTale',
	title: 'RevoTale',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => ({
	...defaultOpenGraph,
	...og,
	images: og?.images ? og.images : defaultOpenGraph.images,
})
