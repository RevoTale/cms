import LocaleLink from '@/i18n/LocaleLink'
import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import linkClassName from '@shadcn/ui/extended/linkClassName'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent} from 'react'
import getAuthorHref from '../Blog/getAuthorHref'
import getMicropostHref from './getMicroPostHref'
import PostPublishDate from './PostPublishDate'

export const PostInternalLinksListFragment = graphql(/* GraphQL */ `
	fragment PostInternalLinksList on Micro_post {
		linkedMicroPosts {
			id
			updatedAt
			title
			authors {
				id
				name
				...GetAuthorURL
			}
			...Blog_getMicropostHref
			...MicroPostPublishDate_BlogPost
		}
	}
`)

interface Props {
	post: FragmentType<typeof PostInternalLinksListFragment> | null
	locale: Locale
}
const InternalLinksList: FunctionComponent<Props> = async ({post, locale}) => {
	if (!post) return null
	const data = getFragmentData(PostInternalLinksListFragment, post)
	const links = data.linkedMicroPosts ?? []
	if (links.length === 0) return null
	const t = await getTranslations({locale, namespace: 'microblog'})
	return (
		<div className="mt-10">
			<h5 className="font-semibold text-xl ">{t('linkedNotes')}</h5>
			<ul className="list-disc list-inside space-y-2 mt-3">
				{links.map(doc => (
					<li key={doc.id}>
						<div className="flex flex-col">
							<LocaleLink
								locale={locale}
								className="font-semibold hover:underline"
								href={getMicropostHref(doc).asString()}
								title={doc.title ?? undefined}>
								{doc.title}
							</LocaleLink>
							<span className="text-sm">
								<PostPublishDate
									className="inline italic"
									locale={locale}
									post={doc}
								/>{' '}
								<span className="text-muted-foreground font-medium">
									{t('by')}
								</span>{' '}
								{doc.authors?.map(author => (
									<LocaleLink
										locale={locale}
										className={linkClassName(
											'font-medium text-muted-foreground'
										)}
										key={author.id}
										href={getAuthorHref(author).asString()}>
										{author.name}
									</LocaleLink>
								))}
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
export default InternalLinksList
