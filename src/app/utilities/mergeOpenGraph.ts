import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
	type: 'website',
	description: 'An open-source website built with Payload and Next.js.',
	images: [
		{
			url: process.env.PAYLOAD_PUBLIC_SERVER_URL
				? `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/website-template-OG.webp`
				: '/website-template-OG.webp',
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
