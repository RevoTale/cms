'use client'
import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import type { Locale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { type FunctionComponent, useMemo } from 'react'
import BlogPostList from '../Blog/List/BlogPostList'
import BlogListItem from './MicroblogListItem'
import { PLACEHOLDER_MAP, type PlaceholderMapTranslationKeys } from './shortTextPlaceholders'
export const blogPostlistFragment = graphql(/* GraphQL */ `
	fragment MicroBlogPostListWithData on Micro_post {
		id
		...MicroBlogListItem
	}
`)
interface Props {
	items: Array<FragmentType<typeof blogPostlistFragment>> | null
	skeletonCount?: number
	locale: Locale
}
const noPostsThreshold = 0
const skeletonCountDefault = 8

const getSkeletonKeys = (count: number): string[] =>
	Array.from({ length: count }, (_, index) => `micro-skeleton-${index + 1}`)

const MicroBlogPostListWithData: FunctionComponent<Props> = ({
	items,
	skeletonCount = skeletonCountDefault,
	locale,
}) => {
	const t = useTranslations('microblog')
	const tKeys = useMemo(() => {
		const translatedKeys = {} as PlaceholderMapTranslationKeys
		Object.keys(PLACEHOLDER_MAP).forEach(key => {
			const mapKey = PLACEHOLDER_MAP[key]
			if (mapKey === undefined) {
				throw new Error(`No mapping found for key: ${key}`)
			}
			translatedKeys[key] = t(mapKey)
		})
		return translatedKeys
	}, [t])
	if (items?.length === noPostsThreshold) {
		return <p className="m-auto text-4xl text-center font-bold my-12">No notes yet :(</p>
	}
	const imageSizes = '(max-width: 178px) 100vw, 178px'
	return (
		<BlogPostList>
			{items === null
				? getSkeletonKeys(skeletonCount).map(key => {
						return (
							<li className="basis-64" key={key}>
								<BlogListItem
									translationKeys={null}
									className="max-w-64"
									imageSizes={imageSizes}
									locale={locale}
									post={null}
								/>
							</li>
						)
					})
				: items.map(item => {
						const data = getFragmentData(blogPostlistFragment, item)
						return (
							<li className="basis-64" key={data.id}>
								<BlogListItem
									translationKeys={tKeys}
									className="max-w-64"
									imageSizes={imageSizes}
									locale={locale}
									post={data}
								/>
							</li>
						)
					})}
		</BlogPostList>
	)
}
export default MicroBlogPostListWithData
