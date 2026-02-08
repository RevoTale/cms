import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent} from 'react'
import {BlogCrumb} from '../../../linking/map/tools'
import getAuthorHref from '../getAuthorHref'
import getPostHref from '../getPostHref'
import getDomain from '../../../config/getDomain'
const postFrag = graphql(/* GraphQL */ `
	fragment SingleBlogPostBreadCrumb on Post {
		id
		authors {
			name
			slug
			...GetAuthorURL
		}
		title
		...GetPostURL
	}
`)
interface Props {
	post: FragmentType<typeof postFrag> | null
	className?: string
	locale: Locale
}
const BlogPostBreadCrumbs: FunctionComponent<Props> = async ({
	post,
	className,
	locale,
}) => {
	const data = getFragmentData(postFrag, post)
	const t = await getTranslations({
		locale,
		namespace: 'Breadcrumbs',
	})
	const crumbs: Array<{title: string; href: string}> = [
		{
			title: t('blog'),
			href: BlogCrumb.href,
		},
	]
	const firstAuthor = (data?.authors ?? [])[0] ?? null
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
			homeCrumb={{title: t('home'), href: '/'}}
			crumbs={crumbs}
			currentHref={data ? getPostHref(data).asString() : '/'}
			title={data?.title ?? ''}
		/>
	)
}
export default BlogPostBreadCrumbs
