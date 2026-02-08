import linkClassName from '@shadcn/ui/extended/linkClassName'
import type { FunctionComponent, ReactNode } from 'react'

const ExternalLink: FunctionComponent<{
	href: string
	title?: string | null
	children?: ReactNode
	className?: string
}> = ({ href, title, children, className }) => {
	return (
		<a
			className={linkClassName(className)}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			title={title ?? undefined}
		>
			{children}
		</a>
	)
}
export default ExternalLink
