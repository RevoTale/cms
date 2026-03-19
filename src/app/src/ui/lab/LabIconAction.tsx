import type { Locale } from 'next-intl'
import type { AnchorHTMLAttributes, FunctionComponent, ReactNode } from 'react'
import LabActionLink from './LabActionLink'

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	children: ReactNode
	external?: boolean
	href: string
	locale: Locale
	newTab?: boolean
}

const LabIconAction: FunctionComponent<Props> = ({
	children,
	external = true,
	href,
	locale,
	newTab = true,
	...props
}) => (
	<LabActionLink {...props} external={external} href={href} locale={locale} newTab={newTab} size="icon" variant="icon">
		{children}
	</LabActionLink>
)

export default LabIconAction
