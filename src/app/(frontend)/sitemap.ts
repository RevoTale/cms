import {defaultLocale} from '@/i18n/config'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import type {MetadataRoute} from 'next'
import getUrl from '../src/linking/getUrl'
import {
	RandomRecordSelector,
	ScreenFillGalleryTool,
	URLStringDecoder,
	URLStringEncoder,
	URLStringToolCrumb,
	VideoDurationChanger,
} from '../src/linking/map/tools'
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		URLStringEncoder.href,
		URLStringDecoder.href,
		URLStringToolCrumb.href,
		'',
		VideoDurationChanger.href,
		ScreenFillGalleryTool.href,
		RandomRecordSelector.href,
		'/blog/notes',
		'/blog',
		'/blog/articles',
	].map(href => ({
		url: getUrl(href, defaultLocale).toString(),
		lastModified: new Date(),
		changeFrequency: 'weekly',
		alternates: {
			languages: generateSitemapLanguages(href, defaultLocale),
		},
	}))
}
