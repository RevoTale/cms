import NextLink from '@/i18n/LocaleLink'
import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {cn} from '@shadcn/lib/utils'
import linkClassName from '@shadcn/ui/extended/linkClassName'
import type {Locale} from 'next-intl'
import type {FunctionComponent} from 'react'
import getMicropostHref from './getMicroPostHref'
export const postPublishDate = graphql(/* GraphQL */ `
	fragment MicroPostPublishDate_BlogPost on Micro_post {
		publishedAt
		id
		...Blog_getMicropostHref
	}
`)
interface Props {
	post: FragmentType<typeof postPublishDate> | null
	className?: string
	showTime?: boolean
	locale: Locale
}
const PostPublishDate: FunctionComponent<Props> = ({
	post,
	className,
	showTime = false,
	locale,
}) => {
	const unmaskedPost = getFragmentData(postPublishDate, post)
	const classNameOver = cn(
		linkClassName(),
		'text-sm text-muted-foreground block break-words font-normal',
		className
	)
	if (unmaskedPost === null) {
		return <InlineSkeleton className={cn(classNameOver, 'h-5 w-24')} />
	}

	const publishedAt = unmaskedPost.publishedAt ?? null
	return (
		<NextLink
			className={classNameOver}
			href={getMicropostHref(unmaskedPost).asString()}
			locale={locale}>
			{publishedAt === null
				? 'not published'
				: new Date(publishedAt).toLocaleDateString('en-US', {
						month: 'short',
						day: 'numeric',
						year: 'numeric',
						...(showTime
							? {hour: '2-digit', minute: '2-digit'}
							: {}),
					})}
		</NextLink>
	)
}
export default PostPublishDate
