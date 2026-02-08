import type { MetadataRoute } from 'next'
import getUrl from '../src/linking/getUrl'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: getUrl('/sitemap-index', null).toString(),
	}
}
