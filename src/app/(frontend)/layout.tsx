import type { Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const viewport: Viewport = {
	themeColor: [
		{
			color: '#09090b',
			media: '(prefers-color-scheme:dark)',
		},
		{
			color: '#ffffff',
			media: '(prefers-color-scheme:light)',
		},
	],
	colorScheme: 'light dark',
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function RootLayout({ children }: LayoutProps<'/'>): Promise<ReactNode> {
	return await children
}
