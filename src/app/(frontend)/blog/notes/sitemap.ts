import { graphql } from '@blog/gql'
import type { MetadataRoute } from 'next'
import { defaultLocale } from '@/i18n/config'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import { sitemapCache } from '../../../src/cache-config'
import { getClient } from '../../../src/gql/getClient'
import getUrl from '../../../src/linking/getUrl'
import getNextJsApolloCache from '../../../src/utils/getNextJsApolloCache'

const SITEMAP_PAGE_LIMIT = 50
export const revalidate = 21600

const tagsQuery = graphql(/* GraphQL */ `
	query sitemap_blog_tags_list($page: Int!, $limit: Int!) {
		Tags(limit: $limit, page: $page) {
			docs {
				id
				name
				createdAt
				updatedAt
			}
		}
	}
`)

interface TagType {
	id: string
	name: string
	createdAt?: string | null
	updatedAt?: string | null
}

const getTagHref = (tag: TagType): string => {
	return `/blog/notes?tag_name_in=${encodeURIComponent(tag.name)}`
}

const totalCountQuery = graphql(/* GraphQL */ `
	query sitemap_blog_tags_list_total($limit: Int!) {
		Tags(limit: $limit) {
			totalPages
		}
	}
`)

const generateIds = (count: number): number[] => {
	const pageNumbers = []
	for (let i = 0; i < count; i++) {
		pageNumbers.push(i)
	}
	return pageNumbers
}

const generateSitemaps = async (): Promise<Array<{ id: number }>> => {
	const result = await getClient().query({
		query: totalCountQuery,
		variables: {
			limit: SITEMAP_PAGE_LIMIT,
		},
		context: getNextJsApolloCache({
			revalidate: sitemapCache,
			tags: ['sitemap', 'blog:tags'],
		}),
	})
	const total = result.data?.Tags?.totalPages ?? null
	if (total !== null) {
		return generateIds(total).map(index => ({ id: index }))
	}
	return []
}

export { generateSitemaps }

const sitemap = async ({ id }: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> => {
	const numId = Number(await id)
	if (Number.isNaN(numId) || numId < 0) {
		return []
	}
	const { data } = await getClient().query({
		query: tagsQuery,
		variables: {
			page: numId + 1,
			limit: SITEMAP_PAGE_LIMIT,
		},
		context: getNextJsApolloCache({
			revalidate: sitemapCache,
			tags: ['sitemap', 'blog:tags'],
		}),
	})

	if (!data?.Tags?.docs) {
		return []
	}

	return data.Tags.docs.filter(Boolean).map(tag => ({
		url: getUrl(getTagHref(tag), defaultLocale).toString(),
		lastModified: typeof tag.updatedAt === 'string' ? new Date(tag.updatedAt) : new Date(),
		changeFrequency: 'weekly' as const,
		alternates: {
			languages: generateSitemapLanguages(getTagHref(tag)),
		},
	}))
}

export default sitemap
