import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import getAuthorHref from '../../../../../src/content/Blog/getAuthorHref'
import getOGImage from '../../../../../src/content/utils/seo/getOGImage'
import getUrl from '../../../../../src/linking/getUrl'

export const OGPostFragment = graphql(/* GraphQL */ `
	fragment MicroPostPage_getOG on Micro_post {
		id
		authors {
			...GetAuthorURL
		}
		meta {
			image {
				...SEO_getOGImage
			}
			title
			description
		}
		tags {
			name
		}
		attachment {
			...SEO_getOGImage
		}
		publishedAt
		title
	}
`)
const getOG = (post: FragmentType<typeof OGPostFragment>, locale: string): OpenGraph => {
	const { authors, meta, tags, publishedAt, title, attachment } = getFragmentData(OGPostFragment, post)
	const metaImage = meta?.image
	return {
		authors: authors?.map(author => getUrl(getAuthorHref(author), locale)).toString() ?? [],
		type: 'article',
		images: metaImage ? getOGImage(metaImage) : attachment ? getOGImage(attachment) : undefined,
		tags: tags?.map(tag => tag.name) ?? undefined,
		title: meta?.title ?? title ?? undefined,
		description: meta?.description ?? undefined,
		publishedTime: typeof publishedAt === 'string' ? new Date(publishedAt).toISOString() : undefined,
	}
}
export default getOG
