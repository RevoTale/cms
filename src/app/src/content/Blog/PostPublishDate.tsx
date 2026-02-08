import NextLink from '@/i18n/LocaleLink'
import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {clsx} from 'clsx'
import type {Locale} from 'next-intl'
import type {FunctionComponent} from 'react'
import getPostHref from './getPostHref'
export const postPublishDate = graphql(/* GraphQL */ `
	fragment PostPublishDate_BlogPost on Post {
		id
		publishedAt
		slug
		...GetPostURL
	}
`)
interface Props {
	post: FragmentType<typeof postPublishDate> | null
	className?: string
	locale: Locale
}
const PostPublishDate: FunctionComponent<Props> = ({
	post,
	className,
	locale,
}) => {
	const unmaskedPost = getFragmentData(postPublishDate, post)
	if (!unmaskedPost) {
		return <InlineSkeleton className="block h-4 w-24" />
	}
	if (typeof unmaskedPost.publishedAt !== 'string') {
		return null
	}
	return (
		<NextLink
			className={clsx(
				'text-sm text-muted-foreground block hover:text-foreground break-words',
				className
			)}
			href={getPostHref(unmaskedPost).asString()}
			locale={locale}>
			{' '}
			{new Date(unmaskedPost.publishedAt).toLocaleDateString('en-US', {
				month: 'short',
				day: 'numeric',
				year: 'numeric',
			})}
		</NextLink>
	)
}
export default PostPublishDate
