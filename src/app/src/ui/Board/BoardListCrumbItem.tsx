import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import BoardListItem from './BoardListItem'
export interface BreadcrumbInfo {
	href: string
}
export interface Props {
	actionLabel?: ReactNode
	crumb: BreadcrumbInfo
	description: string
	title: string
	image?: ReactNode
	locale: Locale
}
const BoardListCrumbItem: FunctionComponent<Props> = ({
	actionLabel,
	crumb: { href },
	description,
	title,
	image,
	locale,
}) => (
	<BoardListItem
		actionLabel={actionLabel}
		locale={locale}
		description={description}
		href={href}
		image={image}
		title={title}
	/>
)
export default BoardListCrumbItem
