import clsx from 'clsx'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent, ReactNode } from 'react'
import NextLink from '@/i18n/LocaleLink'
import LabActionLink from '../lab/LabActionLink'
import LabSurface from '../lab/LabSurface'
import { labMutedTextClassName } from '../lab/theme'

interface Props {
	actionLabel?: ReactNode
	description?: ReactNode
	external?: boolean
	footer?: ReactNode
	href: string
	image?: ReactNode
	locale: Locale
	newTab?: boolean
	title: string
}

const ListLink: FunctionComponent<{
	children: ReactNode
	className?: string
	external: boolean
	href: string
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
	actionLabel,
	title,
	external = false,
	newTab = false,
	href,
	description,
	image,
	footer,
	locale,
}) => {
	const defaultActionLabel =
		actionLabel ??
		(
			await getTranslations({
				locale,
				namespace: 'ToolsBoard',
			})
		)('LearnMore')
	const hasImage = image !== undefined && image !== null

	return (
		<li className="min-w-0">
			<LabSurface className={clsx('group h-full overflow-hidden', hasImage ? 'pt-0' : null)} tone="card">
				{hasImage ? (
					<ListLink
						locale={locale}
						href={href}
						newTab={newTab}
						external={external}
						className="block overflow-hidden border-b border-slate-200/70 bg-slate-950/[0.03] transition dark:border-white/10 dark:bg-white/[0.03] [&_img]:h-48 [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 hover:[&_img]:scale-[1.03]"
					>
						{image}
					</ListLink>
				) : null}
				<div className="flex h-full flex-col p-5 sm:p-6">
					<div className="flex-1">
						<h3 className="text-[1.55rem] font-semibold leading-tight tracking-[-0.04em]">
							<ListLink
								locale={locale}
								href={href}
								newTab={newTab}
								external={external}
								className="transition hover:text-[var(--lab-cyan)]"
							>
								{title}
							</ListLink>
						</h3>
						{description === undefined ? null : (
							<div className={clsx('mt-3 line-clamp-5 text-sm leading-7', labMutedTextClassName)}>
								<ListLink
									locale={locale}
									href={href}
									newTab={newTab}
									external={external}
									className="transition hover:text-slate-950 dark:hover:text-white"
								>
									{description}
								</ListLink>
							</div>
						)}
					</div>
					<div className="mt-6">
						{footer ?? (
							<LabActionLink
								locale={locale}
								href={href}
								newTab={newTab}
								external={external}
								size="sm"
								variant="text"
								className="min-h-0 px-0 py-0 text-xs uppercase tracking-[0.16em]"
							>
								{defaultActionLabel}
							</LabActionLink>
						)}
					</div>
				</div>
			</LabSurface>
		</li>
	)
}

export default BoardListItem
