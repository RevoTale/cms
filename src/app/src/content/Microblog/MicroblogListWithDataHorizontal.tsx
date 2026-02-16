import { getFragmentData } from '@blog/gql'
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@shadcn/ui/carousel'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import getGqlLocale from '@/i18n/getGqlLocale'
import { staleContentCache } from '../../cache-config'
import { getClient } from '../../gql/getClient'
import getNextJsApolloCache from '../../utils/getNextJsApolloCache'
import BlogListCarousel from '../Blog/List/BlogListCarousel'
import { authorQuery, authorQueryInFrag, blogPostlistQueryFragment } from './blogPostListGql'
import fetchMicroblogPost from './fetchMicroblogPostList'
import getPlaceholderMapTranslation from './getPlaceholderMapTranslation'
import MicroblogListItem from './MicroblogListItem'

const emptyPostCount = 0
interface Props {
	authorSlug?: string
	limit?: number
	locale: Locale
}
const defaultLimit = 10
const MicroblogListWithDataHorizontal: FunctionComponent<Props> = async ({
	authorSlug,
	locale,

	limit = defaultLimit,
}) => {
	const result =
		authorSlug === undefined
			? null
			: ((
					await getClient().query({
						query: authorQuery,
						variables: {
							authorSlugIn: [authorSlug],
							locale: getGqlLocale(locale),
						},
						context: getNextJsApolloCache({
							revalidate: staleContentCache,
							tags: ['blog:authors', `blog:author:${authorSlug}`, `blog:authors:${locale}`],
						}),
					})
				).data?.Authors?.docs[0] ?? null)
	const items = (
		await fetchMicroblogPost(getClient(), {
			authorIn: result === null ? undefined : [getFragmentData(authorQueryInFrag, result)],
			limit,
			locale,
		})
	).data?.Micro_posts?.docs

	if (items?.length === emptyPostCount) {
		return <p className="m-auto text-4xl text-center font-bold my-12">No posts yet :(</p>
	}
	const translationKeys = await getPlaceholderMapTranslation(locale)
	return (
		<div className="px-12 w-full flex justify-center items-start">
			<BlogListCarousel>
				<CarouselContent>
					{items?.map(item => {
						const data = getFragmentData(blogPostlistQueryFragment, item)

						return (
							<CarouselItem className="basis-64 max-w-full justify-center flex w-full " key={data.id}>
								<MicroblogListItem
									translationKeys={translationKeys}
									imageSizes="(max-width: 178px) 100vw, 178px"
									className="h-fit w-full"
									locale={locale}
									key={data.id}
									post={data}
								/>
							</CarouselItem>
						)
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</BlogListCarousel>
		</div>
	)
}
export default MicroblogListWithDataHorizontal
