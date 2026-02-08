import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@shadcn/ui/breadcrumb'
import type { Locale } from 'next-intl'
import { Fragment, type FunctionComponent } from 'react'
import type { BreadcrumbList as BreadcrumbListSchema, ListItem, WithContext } from 'schema-dts'
import NextLink from '@/i18n/LocaleLink'
import formatUrl from '../linking/formatUrl'

interface Props {
	crumbs: Array<{ title: string; href: string }>
	title: string
	currentHref: string
	home?: boolean
	homeCrumb: { title: string; href: string }
	locale: Locale
	className?: string
	rootUrl: string
}
const Breadcrumbs: FunctionComponent<Props> = ({
	crumbs: additionalCrumbs,
	title,
	currentHref,
	home = true,
	homeCrumb,
	locale,
	rootUrl,
	className,
}) => {
	const crumbs: Array<{ title: string; href: string }> = []
	if (home) {
		crumbs.push(homeCrumb)
	}
	crumbs.push(...additionalCrumbs, {
		title,
		href: currentHref,
	})
	const elems: ListItem[] = crumbs.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.title,
		item: formatUrl(rootUrl, item.href, locale).toString(),
	}))
	const jsonLd: WithContext<BreadcrumbListSchema> = {
		'@type': 'BreadcrumbList',
		'@context': 'https://schema.org',
		itemListElement: elems,
	}
	return (
		<>
			<Breadcrumb className={className}>
				<BreadcrumbList>
					{crumbs.map((crumb, index) => (
						<Fragment key={index}>
							<BreadcrumbItem>
								<NextLink
									locale={locale}
									className="max-w-44 inline-block whitespace-nowrap overflow-hidden text-ellipsis"
									href={crumb.href}
								>
									{crumb.title}
								</NextLink>
							</BreadcrumbItem>
							{index === crumbs.length - 1 ? null : <BreadcrumbSeparator />}
						</Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
			<script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />
		</>
	)
}
export default Breadcrumbs
