import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import ExternalLink from './ExternalLink'

export const PostOutgoingLinksListFragment = graphql(/* GraphQL */ `
	fragment OutGoingLinksList on Micro_post {
		externalLinks {
			id
			title
			target_url
		}
	}
`)

interface Props {
	post: FragmentType<typeof PostOutgoingLinksListFragment> | null
	locale: Locale
}
const OutgoingLinksList: FunctionComponent<Props> = async ({ post, locale }) => {
	if (!post) return null
	const data = getFragmentData(PostOutgoingLinksListFragment, post)
	const links = data.externalLinks ?? []
	if (links.length === 0) return null
	const t = await getTranslations({ locale, namespace: 'microblog' })
	return (
		<div className="mt-10">
			<h5 className="font-semibold text-xl ">{t('outgoingLinks')}</h5>
			<ul className="list-disc list-inside space-y-2 mt-3">
				{links.map(({ id, target_url: url, title }) => (
					<li key={id}>
						<ExternalLink href={url} className="text-sm text-muted-foreground p-0" title={title ?? undefined}>
							{url}
						</ExternalLink>
						{(title ?? '') === '' ? null : (
							<>
								{' - '}
								<ExternalLink href={url} className="p-0">
									{title}
								</ExternalLink>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
export default OutgoingLinksList
