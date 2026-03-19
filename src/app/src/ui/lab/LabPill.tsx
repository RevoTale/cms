import { cn } from '@shadcn/lib/utils'
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const LabPill: FunctionComponent<Props> = ({ children, className, ...props }) => (
	<div
		{...props}
		className={cn(
			'inline-flex items-center rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-slate-600 dark:border-white/12 dark:bg-white/6 dark:text-slate-200',
			className,
		)}
	>
		{children}
	</div>
)

export default LabPill
