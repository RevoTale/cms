import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import type { BlogPosting, WithContext } from 'schema-dts'
import formatUrl from '../../linking/formatUrl'
import getMicropostHref from '../Microblog/getMicroPostHref'
import { getAuthorJsonLD } from './AuthorJsonLD'
import getImageJsonLd from './getImageJsonLd'
import { getOrganizationJsonLD } from './OrganizationJsonLd'
export const noteJsonldFragment = graphql(/* GraphQL */ `
	fragment SingleNoteJsonld on Micro_post {
		id
		authors {
			...SingleAuthorJsonLd
		}
		meta {
			title
			description
			image {
				...ImageJsonLd
			}
		}
		title
		publishedAt
		linkedMicroPosts {
			id
			...Blog_getMicropostHref
		}
		externalLinks {
			id
			title
			target_url
		}
		...Blog_getMicropostHref
	}
`)
export const getNoteJsonLD = (
	note: FragmentType<typeof noteJsonldFragment>,
	rootUrl: string,
	locale: string,
): WithContext<BlogPosting> => {
	const data = getFragmentData(noteJsonldFragment, note)
	const [url, authors, org] = [
		formatUrl(rootUrl, getMicropostHref(data), locale).toString(),
		data.authors?.map(author => getAuthorJsonLD(author, rootUrl, locale)) ?? [],
		getOrganizationJsonLD(rootUrl),
	]
	const image = data.meta?.image ?? null

	// Extract mentions for broader semantic web compatibility (Bing, Wikidata, etc.)
	const internalMentions = (data.linkedMicroPosts ?? []).map(link => ({
		'@id': formatUrl(rootUrl, getMicropostHref(link), locale).toString(),
	}))
	const externalMentions = (data.externalLinks ?? []).map(link => ({
		'@id': link.target_url,
	}))
	const mentions = [...internalMentions, ...externalMentions]

	const jsonLd: WithContext<BlogPosting> = {
		'@type': 'BlogPosting',
		'@context': 'https://schema.org',
		'@id': url.toString(),
		headline: data.title ?? data.meta?.title ?? undefined,
		url: url.toString(),
		datePublished: typeof data.publishedAt === 'string' ? new Date(data.publishedAt).toISOString() : undefined,
		author: authors,
		publisher: org,
		description: data.meta?.description ?? undefined,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url.toString(),
		},
		image: image === null ? undefined : getImageJsonLd(rootUrl, image),
		inLanguage: locale,
		...(mentions.length > 0 && { mentions }),
	}
	return jsonLd
}
const NoteJsonLD: FunctionComponent<{
	note: FragmentType<typeof noteJsonldFragment>
	locale: Locale
	rootUrl: string
}> = ({ note, locale, rootUrl }) => {
	const jsonLd = getNoteJsonLD(note, rootUrl, locale)
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(jsonLd),
			}}
		/>
	)
}
export default NoteJsonLD
