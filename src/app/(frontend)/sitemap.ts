import type { MetadataRoute } from 'next'
import { defaultLocale } from '@/i18n/config'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import getUrl from '../src/linking/getUrl'

export default function sitemap(): MetadataRoute.Sitemap {
	return ['', '/blog/notes', '/blog', '/blog/articles'].map(href => ({
		url: getUrl(href, defaultLocale).toString(),
		lastModified: new Date(),
		changeFrequency: 'weekly',
		alternates: {
			languages: generateSitemapLanguages(href, defaultLocale),
		},
	}))
}

export const revalidate = 21600
