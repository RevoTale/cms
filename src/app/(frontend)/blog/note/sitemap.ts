import { graphql } from '@blog/gql'
import type { MetadataRoute } from 'next'
import { defaultLocale } from '@/i18n/config'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import { sitemapCache } from '../../../src/cache-config'
import getDomain from '../../../src/config/getDomain'
import getMicropostHref from '../../../src/content/Microblog/getMicroPostHref'
import getImageThumb from '../../../src/content/utils/seo/getImageThumb'
import { getClient } from '../../../src/gql/getClient'
import getUrl from '../../../src/linking/getUrl'
import getNextJsApolloCache from '../../../src/utils/getNextJsApolloCache'

const postsQuery = graphql(/* GraphQL */ `
	query sitemap_blog_post_list_dffd($page: Int!) {
		Micro_posts(limit: 1000, page: $page) {
			docs {
				id
				publishedAt
				updatedAt
				meta {
					image {
						...Util_getImageThumb
					}
				}

				attachment {
					...Util_getImageThumb
				}
				...Blog_getMicropostHref
			}
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
const totalCountQuery = graphql(/* GraphQL */ `
	query sitemap_blog_post_list_total_dfsdf {
		Micro_posts(limit: 1000) {
			totalPages
		}
	}
`)
const generateSitemaps = async (): Promise<Array<{ id: number }>> => {
	const result = await getClient().query({
		query: totalCountQuery,
		context: getNextJsApolloCache(sitemapCache),
	})
	const total = result.data?.Micro_posts?.totalPages ?? null
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
		query: postsQuery,
		variables: {
			page: numId + 1,
		},
		context: getNextJsApolloCache(sitemapCache),
	})

	if (!data?.Micro_posts?.docs) {
		return []
	}
	return data.Micro_posts.docs.map(post => {
		const imageSet = new Set<string>()
		if (post.meta?.image) {
			imageSet.add(getImageThumb(post.meta.image, getDomain()).url)
		}
		if (post.attachment) {
			imageSet.add(getImageThumb(post.attachment, getDomain()).url)
		}
		return {
			url: getUrl(getMicropostHref(post), defaultLocale).toString(),
			lastModified: typeof post.updatedAt === 'string' ? new Date(post.updatedAt) : new Date(),
			changeFrequency: 'weekly',
			images: Array.from(imageSet.values()),
			alternates: {
				languages: generateSitemapLanguages(getMicropostHref(post)),
			},
		}
	})
}
export default sitemap
