import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@shadcn/ui/card'
import clsx from 'clsx'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent, ReactNode } from 'react'
import NextLink from '@/i18n/LocaleLink'

interface Props {
	href: string
	title: string
	description?: ReactNode
	external?: boolean
	newTab?: boolean
	image?: ReactNode
	footer?: ReactNode
	locale: Locale
}
const ListLink: FunctionComponent<{
	children: ReactNode
	className?: string
	href: string
	external: boolean
	locale: Locale
	newTab: boolean
}> = ({ children, className, href, newTab, external, locale }) => (
	<NextLink
		locale={locale}
		href={href}
		className={className}
		rel={external ? 'noopener noreferrer' : undefined}
		target={newTab ? '_blank' : undefined}
	>
		{children}
	</NextLink>
)
const BoardListItem: FunctionComponent<Props> = async ({
	title,
	external = false,
	newTab = false,
	href,
	description,
	image,
	footer,
	locale,
}) => {
	const t = await getTranslations({
		locale,
		namespace: 'ToolsBoard',
	})
	const hasImage = image !== undefined && image !== null
	return (
		<li className="max-w-72 inline-block w-full">
			<Card className={clsx('overflow-hidden', hasImage ? 'pt-0' : null)}>
				{hasImage ? (
					<ListLink locale={locale} href={href} newTab={newTab} external={external}>
						{image}
					</ListLink>
				) : null}
				<CardHeader>
					<CardTitle className="text-xl">
						<ListLink locale={locale} href={href} newTab={newTab} external={external}>
							{title}
						</ListLink>
					</CardTitle>
					<CardDescription className="hover:text-accent-foreground">
						<ListLink locale={locale} href={href} newTab={newTab} external={external}>
							{description}
						</ListLink>
					</CardDescription>
				</CardHeader>
				<CardFooter>
					{footer ?? (
						<ListLink
							locale={locale}
							href={href}
							newTab={newTab}
							external={external}
							className="text-xs text-muted-foreground hover:text-accent-foreground"
						>
							{t('LearnMore')}
						</ListLink>
					)}
				</CardFooter>
			</Card>
		</li>
	)
}

export default BoardListItem
