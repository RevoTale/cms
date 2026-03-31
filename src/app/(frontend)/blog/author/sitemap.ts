import { graphql } from '@blog/gql'
import type { MetadataRoute } from 'next'
import { defaultLocale } from '@/i18n/config'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import { sitemapCache } from '../../../src/cache-config'
import getAuthorHref from '../../../src/content/Blog/getAuthorHref'
import { getClient } from '../../../src/gql/getClient'
import getUrl from '../../../src/linking/getUrl'
import getNextJsApolloCache from '../../../src/utils/getNextJsApolloCache'

export const revalidate = 21600

const authorsQuery = graphql(/* GraphQL */ `
	query sitemap_blog_authors_list($page: Int!) {
		Authors(limit: 1000, page: $page) {
			docs {
				slug
				...GetAuthorURL
			}
		}
	}
`)

const generateSitemapIds = (count: number): number[] => {
	const pageNumbers: number[] = []
	for (let i = 0; i < count; i++) {
		pageNumbers.push(i)
	}
	return pageNumbers
}
const totalCountQuery = graphql(/* GraphQL */ `
	query sitemap_blog_authors_list_total {
		Authors {
			totalPages
		}
	}
`)
const generateSitemaps = async (): Promise<Array<{ id: number }>> => {
	const result = await getClient().query({
		query: totalCountQuery,
		context: getNextJsApolloCache({
			revalidate: sitemapCache,
			tags: ['sitemap', 'blog:authors'],
		}),
	})
	const total = result.data?.Authors?.totalPages ?? null
	if (total !== null) {
		return generateSitemapIds(total).map(index => ({ id: index }))
	}
	return []
}

export { generateSitemaps }

const sitemap = async ({ id }: { id: Promise<number> }): Promise<MetadataRoute.Sitemap> => {
	const numId = Number(await id)
	if (Number.isNaN(numId) || numId < 0) {
		return []
	}
	const { data } = await getClient().query({
		query: authorsQuery,
		variables: {
			page: numId + 1,
		},
		context: getNextJsApolloCache({
			revalidate: sitemapCache,
			tags: ['sitemap', 'blog:authors'],
		}),
	})

	if (!data?.Authors?.docs) {
		return []
	}
	return data.Authors.docs.map(author => ({
		url: getUrl(getAuthorHref(author), defaultLocale).toString(),
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 1,
		alternates: {
			languages: generateSitemapLanguages(getAuthorHref(author), defaultLocale),
		},
	}))
}
export default sitemap
