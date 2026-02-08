import LocaleLink from '@/i18n/LocaleLink'
import {cn} from '@shadcn/lib/utils'
import {buttonVariants} from '@shadcn/ui/button'
import type {Locale} from 'next-intl'
import type {FunctionComponent, ReactNode} from 'react'
interface Props {
	href: string
	children: ReactNode
	locale: Locale
}
const FooterListItem: FunctionComponent<Props> = ({href, children, locale}) => (
	<li>
		<LocaleLink
			href={href}
			locale={locale}
			className={cn(
				buttonVariants({
					variant: 'link',
					size: 'default',
					className: 'text-muted-foreground px-0 has-[>svg]:px-0',
				}) //is workarouind for bug. https://github.com/radix-ui/primitives/issues/3165
			)}>
			{children}
		</LocaleLink>
	</li>
)
export default FooterListItem
