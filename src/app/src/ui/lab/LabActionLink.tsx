import { cn } from '@shadcn/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { Locale } from 'next-intl'
import type { AnchorHTMLAttributes, FunctionComponent, ReactNode } from 'react'
import LocaleLink from '@/i18n/LocaleLink'

export const labActionLinkVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-slate-950',
	{
		variants: {
			size: {
				sm: 'min-h-9 px-3 text-sm',
				md: 'min-h-10 px-4 text-sm',
				lg: 'min-h-12 px-5 text-[0.92rem] tracking-[0.08em]',
				icon: 'size-12',
			},
			variant: {
				solid:
					'rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,var(--lab-cyan),#6bd6ff)] text-slate-950 shadow-[0_14px_30px_rgba(44,188,243,0.24)] hover:-translate-y-0.5 hover:opacity-95',
				outline:
					'rounded-full border border-slate-200/80 bg-white/70 text-slate-800 hover:-translate-y-0.5 hover:bg-white dark:border-white/12 dark:bg-white/6 dark:text-white dark:hover:bg-white/10',
				ghost:
					'rounded-full text-slate-700 hover:-translate-y-0.5 hover:bg-white/70 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white',
				text: 'rounded-full px-0 text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white',
				icon: 'rounded-full border border-slate-200/80 bg-white/75 text-slate-900 shadow-[0_6px_18px_rgba(41,72,91,0.14)] hover:-translate-y-0.5 hover:bg-white dark:border-white/12 dark:bg-slate-900/80 dark:text-white dark:hover:bg-white/10',
			},
		},
		defaultVariants: {
			size: 'md',
			variant: 'outline',
		},
	},
)

interface Props
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
		VariantProps<typeof labActionLinkVariants> {
	children: ReactNode
	external?: boolean
	href: string
	locale: Locale
	newTab?: boolean
}

const LabActionLink: FunctionComponent<Props> = ({
	children,
	className,
	external = false,
	href,
	locale,
	newTab = false,
	size,
	variant,
	...props
}) => (
	<LocaleLink
		{...props}
		className={cn(labActionLinkVariants({ size, variant }), className)}
		href={href}
		hrefLang={locale}
		locale={locale}
		rel={external ? 'noopener noreferrer' : props.rel}
		target={newTab ? '_blank' : props.target}
	>
		{children}
	</LocaleLink>
)

export default LabActionLink
