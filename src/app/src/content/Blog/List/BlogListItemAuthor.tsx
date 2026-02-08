import NextLink from '@/i18n/LocaleLink'
import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {cn} from '@shadcn/lib/utils'
import type {Locale} from 'next-intl'
import type {FunctionComponent} from 'react'
import ContentfulImageFill from '../../Contentful/ContentfulImageFill'
import getAuthorHref from '../getAuthorHref'

export const authorFragment = graphql(/* GraphQL */ `
	fragment BlogListAuthor on Author {
		id
		avatar {
			...ContentfulImage
		}
		name
		slug
		bio
		...GetAuthorURL
	}
`)
interface Props {
	author: FragmentType<typeof authorFragment> | null
	className?: string
	gap?: boolean
	locale: Locale
}
const abbrName = (word: string): string => {
	// Split the sentence into an array of words
	const words = word.split(' ')

	// Take the first letter of each word
	return words
		.map(word => word[0] ?? '')
		.join('')
		.toUpperCase()
}
const BlogListItemAuthor: FunctionComponent<Props> = ({
	author,
	className,
	locale,
	gap = true,
}) => {
	const authorData = getFragmentData(authorFragment, author)
	const imageClassName = cn(
		'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-auto',
		gap ? 'mr-0' : null
	)
	return (
		<i
			className={cn(
				'flex items-center justify-left gap-3 flex-wrap',
				className
			)}>
			{authorData && authorData.avatar && authorData.slug ? (
				<NextLink
					locale={locale}
					className={imageClassName}
					href={getAuthorHref(authorData).asString()}>
					<ContentfulImageFill
						alt={abbrName(authorData.name ?? '')}
						asset={authorData.avatar}
						sizes="3rem"
					/>
				</NextLink>
			) : (
				<InlineSkeleton className={imageClassName} />
			)}
			{authorData && authorData.slug && authorData.name !== null ? (
				<NextLink
					locale={locale}
					className="text-sm font-bold hover:underline"
					href={getAuthorHref(authorData).asString()}>
					{authorData.name}
				</NextLink>
			) : (
				<InlineSkeleton className="w-32 h-4" />
			)}
		</i>
	)
}
export default BlogListItemAuthor
