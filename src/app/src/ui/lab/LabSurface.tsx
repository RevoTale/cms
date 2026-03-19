import { cn } from '@shadcn/lib/utils'
import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'

type LabSurfaceTone = 'panel' | 'card' | 'soft'
type LabSurfaceAccent = 'cyan' | 'orange' | 'none'

const toneClassNameMap: Record<LabSurfaceTone, string> = {
	panel: 'rounded-[2rem] border-white/80 bg-white/76 dark:border-white/12 dark:bg-slate-950/72',
	card: 'rounded-[1.75rem] border-white/80 bg-white/78 dark:border-white/12 dark:bg-slate-950/74',
	soft: 'rounded-[1.4rem] border-slate-200/80 bg-slate-50/85 dark:border-white/12 dark:bg-white/6',
}

const toneStyleMap: Record<LabSurfaceTone, CSSProperties> = {
	panel: {
		boxShadow: 'var(--lab-panel-shadow)',
	},
	card: {
		boxShadow: 'var(--lab-card-shadow)',
	},
	soft: {
		boxShadow: 'var(--lab-card-shadow)',
	},
}

const accentLineClassNameMap: Record<Exclude<LabSurfaceAccent, 'none'>, string> = {
	cyan: 'bg-gradient-to-r from-[var(--lab-cyan)] to-transparent',
	orange: 'bg-gradient-to-r from-[var(--lab-orange)] to-transparent',
}

type Props<T extends ElementType> = {
	accent?: LabSurfaceAccent
	as?: T
	children: ReactNode
	className?: string
	tone?: LabSurfaceTone
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

const LabSurface = <T extends ElementType = 'div'>({
	accent = 'cyan',
	as,
	children,
	className,
	style,
	tone = 'card',
	...rest
}: Props<T>) => {
	const Component = as ?? 'div'

	return (
		<Component
			{...rest}
			className={cn('relative overflow-hidden border backdrop-blur-xl', toneClassNameMap[tone], className)}
			style={{
				...toneStyleMap[tone],
				...(style as CSSProperties | undefined),
			}}
		>
			{accent === 'none' ? null : (
				<div
					aria-hidden
					className={cn('absolute left-5 top-0 h-[3px] w-20 rounded-full', accentLineClassNameMap[accent])}
				/>
			)}
			{children}
		</Component>
	)
}

export default LabSurface
