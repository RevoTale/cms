import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import LocaleLink from '@/i18n/LocaleLink'

const ActionButton: FunctionComponent<{
	href: string
	active: boolean
	children: ReactNode
	locale: Locale
}> = ({ children, href, active, locale }) => (
	<LocaleLink
		locale={locale}
		href={href}
		scroll={false}
		className={cn(
			buttonVariants({
				variant: active ? 'default' : 'outline',
				size: 'lg',
				className: 'text-base',
			}),
		)}
	>
		{children}
	</LocaleLink>
)

export default ActionButton
