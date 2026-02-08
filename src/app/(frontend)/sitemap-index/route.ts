import getUrl from '../../src/linking/getUrl'
import {generateSitemaps as authors} from '../blog/author/sitemap'
import {generateSitemaps as notes} from '../blog/note/sitemap'
import {generateSitemaps as noteTags} from '../blog/notes/sitemap'
export const dynamic = 'force-static'

const GET = async (): Promise<Response> => {
	const notesPromise: string[] = await notes().then(notes =>
		notes.map(id =>
			getUrl(`/blog/note/sitemap/${id.id}.xml`, null).toString()
		)
	)
	const authorsPromise: string[] = await authors().then(ids =>
		ids.map(id =>
			getUrl(`/blog/author/sitemap/${id.id}.xml`, null).toString()
		)
	)
	const sitemaps: string[] = [
		getUrl('/sitemap.xml', null).toString(),
		...authorsPromise,
		...notesPromise,
		...(await noteTags()).map(id =>
			getUrl(`/blog/notes/sitemap/${id.id}.xml`, null).toString()
		),
	]
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
   <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
	.map(
		sitemap => `<sitemap>
<loc>${sitemap.replace(/[<>&'"]/g, (c: string) => {
			switch (c) {
				case '<':
					return '&lt;'
				case '>':
					return '&gt;'
				case '&':
					return '&amp;'
				case "'":
					return '&apos;'
				case '"':
					return '&quot;'
			}
			return c
		})}</loc>
</sitemap>`
	)
	.join('\n')}
</sitemapindex>
    ` // generate your sitemap somehow as xml

	const response = new Response(xml, {
		status: 200,
		statusText: 'ok',
	})

	response.headers.set('content-type', 'application/xml')
	response.headers.set(
		'Cache-Control',
		'public, max-age=3600, s-maxage=3600, stale-while-revalidate=9000, stale-if-error=86400'
	)

	return response
}

export {GET}
