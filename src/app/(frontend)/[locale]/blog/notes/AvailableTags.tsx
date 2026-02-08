'use client'
import { useQuery } from '@apollo/client/react'
import { Button } from '@shadcn/ui/button'
import type { Locale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { type FunctionComponent, Suspense } from 'react'
import getGqlLocale from '@/i18n/getGqlLocale'
import MicroBlogTagSkeleton from '../../../../src/content/Microblog/MicroBlogTagSkeleton'
import type { Micro_post_post_type_Input } from '../../../../src/gql/graphql'
import { availableTagsQuery } from './notesQueries'
import TagFilterLink from './TagFilterLink'

interface Props {
	usedNames: string[]
	locale: Locale
	postType: Micro_post_post_type_Input
}
const AvailableTags: FunctionComponent<Props> = ({ usedNames, locale, postType }) => {
	const { data, loading } = useQuery(availableTagsQuery, {
		variables: {
			locale: getGqlLocale(locale),
			postType: String(postType),
		},
	})
	const t = useTranslations('Blog')
	const tags = data?.availableTagsByMicroPostType ?? []
	return (
		<div className="flex flex-wrap gap-3 items-center ">
			<span className="text-base font-medium">{t('available_tags')} </span>
			<Suspense>
				{loading
					? Array.from({ length: 6 }).map((_, index) => <MicroBlogTagSkeleton key={`tag_skeleton_${index}`} />)
					: tags.map(item => {
							const used = usedNames.some(i => i === item.name)
							if (used) {
								return (
									<Button variant="secondary" disabled={true} key={item.name}>
										{item.title}
									</Button>
								)
							}
							return (
								<TagFilterLink locale={locale} key={item.name} newNames={[...usedNames, item.name]}>
									{item.title}
								</TagFilterLink>
							)
						})}
			</Suspense>
		</div>
	)
}
export default AvailableTags
