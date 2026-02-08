import {getFragmentData} from '@blog/gql'
import {Feed} from 'feed'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {NextRequest} from 'next/server'
import {rssFrag} from '../../../../src/content/Microblog/blogPostListGql'
import {defaultLocale, locales} from '../../../../src/i18n/config'
import getUrl from '../../../../src/linking/getUrl'
import {fetchData} from '../../../[locale]/blog/notes/fetchData'

function isValidLocale(locale: string): locale is Locale {
	return (locales as readonly string[]).includes(locale)
}

async function createFeed(req: NextRequest): Promise<Feed> {
	// Extract locale from query parameters since this route is not in [locale] directory
	const localeParam = req.nextUrl.searchParams.get('locale')
	const locale: Locale =
		localeParam !== null &&
		localeParam.trim() !== '' &&
		isValidLocale(localeParam)
			? localeParam
			: defaultLocale
	const t = await getTranslations({locale, namespace: 'RssFeed'})

	// Fetch the micro posts
	const resultPosts = await fetchData(
		Object.fromEntries(req.nextUrl.searchParams.entries()),
		locale
	)

	const posts = resultPosts.items ?? []

	const firstValidPost =
		0 in posts ? getFragmentData(rssFrag, posts[0]) : null
	const feedUpdated =
		firstValidPost !== null &&
		typeof firstValidPost.publishedAt === 'string'
			? new Date(firstValidPost.publishedAt)
			: new Date()

	// Create the feed
	const feed = new Feed({
		title: t('title'),
		description: t('description'),
		id: getUrl('/', locale).toString(),
		link: getUrl('/', locale).toString(),
		language: locale,
		image: getUrl('/logo/logo.png', locale).toString(),
		favicon: getUrl('/favicon.ico', locale).toString(),
		copyright: `© ${new Date().getFullYear()} ${t('authorName')}`,
		updated: feedUpdated,
		generator: t('generator'),
		feedLinks: {
			rss2: getUrl('/blog/notes/feed.xml', locale).toString(),
		},
		author: {
			name: t('authorName'),
			email: t('authorEmail'),
			link: getUrl('/', locale).toString(),
		},
	})

	// Add posts to the feed
	for (const post of posts) {
		const postData = getFragmentData(rssFrag, post)

		const postUrl = getUrl(`/blog/note/${postData.id}`, locale)
		const authors =
			postData.authors
				?.map(author => author.name ?? t('unknownAuthor'))
				.join(', ') ?? t('authorName')
		const tags = postData.tags?.map(tag => tag.name).filter(Boolean) ?? []

		feed.addItem({
			title: postData.title ?? t('untitledNote'),
			id: postUrl.toString(),
			link: postUrl.toString(),
			description: postData.meta?.description ?? '',
			content: postData.content ?? '',
			author: [
				{
					name: authors,
				},
			],

			date:
				postData.publishedAt !== null &&
				postData.publishedAt !== undefined
					? new Date(postData.publishedAt)
					: new Date(),
			category: tags
				.filter((tag): tag is string => typeof tag === 'string')
				.map((tag: string) => ({name: tag})),
		})
	}

	return feed
}

export async function GET(request: NextRequest): Promise<Response> {
	try {
		const feed = await createFeed(request)
		const rssXml = feed.rss2()

		return new Response(rssXml, {
			headers: {
				'Content-Type': 'application/rss+xml; charset=utf-8',
				'Cache-Control': 'public, max-age=3600, s-maxage=3600',
			},
		})
	} catch (error) {
		// Extract locale for error message
		const localeParam = request.nextUrl.searchParams.get('locale')
		const locale: Locale =
			localeParam !== null &&
			localeParam.trim() !== '' &&
			isValidLocale(localeParam)
				? localeParam
				: defaultLocale
		const t = await getTranslations({locale, namespace: 'RssFeed'})
		return new Response(t('internalServerError'), {status: 500})
	}
}
