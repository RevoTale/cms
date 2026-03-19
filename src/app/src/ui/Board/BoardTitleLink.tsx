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
				className={cn('inline-block break-words whitespace-normal transition hover:text-[var(--lab-cyan)]')}
				href={href}
			>
				{children}
			</LocaleLink>
		</BoardTitle>
	)
}
export default BoardTitleLink
