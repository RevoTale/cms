import { cn } from '@shadcn/lib/utils'
import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import BoardTitle from './BoardTitle'

interface Props {
	children: ReactNode
	href: string
	locale: Locale
	icon: ReactNode
}
const BoardTitleLink: FunctionComponent<Props> = ({ children, href, locale, icon }) => {
	return (
		<BoardTitle icon={icon}>
			<LocaleLink
				locale={locale}
				className={cn(
					'transition-all disabled:pointer-events-none break-words text-center text-3xl font-semibold whitespace-normal inline-block hover:underline underline-offset-3',
				)}
				href={href}
			>
				{children}
			</LocaleLink>
		</BoardTitle>
	)
}
export default BoardTitleLink
