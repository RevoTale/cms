import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import getDomain from '../../config/getDomain'
import { BlogCrumb } from '../../linking/map/tools'
import getAuthorHref from '../Blog/getAuthorHref'
import getMicropostHref from './getMicroPostHref'

const postFrag = graphql(/* GraphQL */ `
	fragment SingleMicroBlogPostBreadCrumb on Micro_post {
		authors {
			name
			slug
			...GetAuthorURL
		}
		id
		title
		...Blog_getMicropostHref
	}
`)
interface Props {
	post: FragmentType<typeof postFrag>
	className?: string
	locale: Locale
}
const NoteBreadcrumbs: FunctionComponent<Props> = async ({ post, className, locale }) => {
	const data = getFragmentData(postFrag, post)
	const t = await getTranslations({
		locale,
		namespace: 'Breadcrumbs',
	})
	const crumbs: Array<{ title: string; href: string }> = [
		{
			title: t('blog'),
			href: BlogCrumb.href,
		},
	]
	const firstAuthor = (data.authors ?? [])[0] ?? null
	if (firstAuthor !== null && (firstAuthor.name ?? '') !== '') {
		crumbs.push({
			title: firstAuthor.name ?? '',
			href: getAuthorHref(firstAuthor).asString(),
		})
	}
	return (
		<Breadcrumbs
			rootUrl={getDomain()}
			locale={locale}
			className={className}
			homeCrumb={{ title: t('home'), href: '/' }}
			crumbs={crumbs}
			currentHref={getMicropostHref(data).asString()}
			title={data.title ?? ''}
		/>
	)
}
export default NoteBreadcrumbs
