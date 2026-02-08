'use client'
import {getFragmentData, graphql, type FragmentType} from '@blog/gql'
import type {Locale} from 'next-intl'
import {useTranslations} from 'next-intl'
import {useMemo, type FunctionComponent} from 'react'
import BlogPostList from '../Blog/List/BlogPostList'
import BlogListItem from './MicroblogListItem'
import {
	PLACEHOLDER_MAP,
	type PlaceholderMapTranslationKeys,
} from './shortTextPlaceholders'
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
const MicroBlogPostListWithData: FunctionComponent<Props> = ({
	items,
	skeletonCount = skeletonCountDefault,
	locale,
}) => {
	const t = useTranslations('microblog')
	const tKeys = useMemo(() => {
		return Object.keys(
			PLACEHOLDER_MAP
		).reduce<PlaceholderMapTranslationKeys>((acc, key) => {
			const mapKey = PLACEHOLDER_MAP[key]
			if (mapKey === undefined) {
				throw new Error(`No mapping found for key: ${key}`)
			}
			return {
				...acc,
				[key]: t(mapKey),
			}
		}, {})
	}, [t])
	if (items?.length === noPostsThreshold) {
		return (
			<p className="m-auto text-4xl text-center font-bold my-12">
				No notes yet :(
			</p>
		)
	}
	const imageSizes = '(max-width: 178px) 100vw, 178px'
	return (
		<BlogPostList>
			{items === null
				? Array(skeletonCount)
						.fill(null)
						.map((_, i) => {
							return (
								<li className="basis-64" key={`index_${i}`}>
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
