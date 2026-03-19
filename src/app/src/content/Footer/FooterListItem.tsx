import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import LabActionLink from '../../ui/lab/LabActionLink'

interface Props {
	children: ReactNode
	href: string
	locale: Locale
}

const FooterListItem: FunctionComponent<Props> = ({ href, children, locale }) => (
	<li>
		<LabActionLink
			href={href}
			locale={locale}
			size="sm"
			variant="text"
			className="min-h-0 justify-start px-0 py-0 text-left has-[>svg]:gap-1.5"
		>
			{children}
		</LabActionLink>
	</li>
)

export default FooterListItem
