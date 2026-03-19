'use client'

import { cn } from '@shadcn/lib/utils'
import { useEffect, useEffectEvent, useMemo, useRef, useState } from 'react'
import { labMonoStyle } from './theme'

interface LinkItem {
	href: string
	label: string
}

interface Props {
	ariaLabel: string
	className?: string
	links: LinkItem[]
	variant: 'desktop' | 'mobile'
}

const readingBandTopByVariant: Record<Props['variant'], number> = {
	desktop: 116,
	mobile: 92,
}

const readingBandHeight = 124

const LabSectionNavigator = ({ ariaLabel, className, links, variant }: Props) => {
	const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? '')
	const mobileContainerRef = useRef<HTMLDivElement | null>(null)
	const mobileItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

	const sectionIds = useMemo(() => links.map(link => link.href.replace(/^#/, '')), [links])

	const syncActiveSection = useEffectEvent(() => {
		if (sectionIds.length === 0) {
			return
		}

		const readingBandTop = readingBandTopByVariant[variant]
		const readingBandBottom = readingBandTop + readingBandHeight
		let fallbackHref = links[0]?.href ?? ''

		for (const link of links) {
			const section = document.getElementById(link.href.replace(/^#/, ''))
			if (section === null) {
				continue
			}

			const rect = section.getBoundingClientRect()
			if (rect.top <= readingBandTop) {
				fallbackHref = link.href
			}
			if (rect.top <= readingBandBottom && rect.bottom >= readingBandTop) {
				setActiveHref(link.href)
				return
			}
		}

		setActiveHref(fallbackHref)
	})

	useEffect(() => {
		const initialHash = window.location.hash
		if (initialHash !== '' && links.some(link => link.href === initialHash)) {
			setActiveHref(initialHash)
		} else if (links.length > 0) {
			setActiveHref(links[0].href)
		}

		syncActiveSection()

		const onScroll = () => {
			window.requestAnimationFrame(syncActiveSection)
		}

		const onResize = () => {
			window.requestAnimationFrame(syncActiveSection)
		}

		const onHashChange = () => {
			if (window.location.hash !== '' && links.some(link => link.href === window.location.hash)) {
				setActiveHref(window.location.hash)
			}
			window.requestAnimationFrame(syncActiveSection)
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		window.addEventListener('resize', onResize)
		window.addEventListener('hashchange', onHashChange)

		return () => {
			window.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', onResize)
			window.removeEventListener('hashchange', onHashChange)
		}
	}, [links])

	useEffect(() => {
		if (variant !== 'mobile') {
			return
		}

		const container = mobileContainerRef.current
		const item = mobileItemRefs.current[activeHref]
		if (container === null || item === null || item === undefined) {
			return
		}

		item.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		})
	}, [activeHref, variant])

	if (variant === 'mobile') {
		return (
			<div className={cn('sticky top-3 z-30 lg:hidden', className)}>
				<div className="rounded-[1.4rem] border border-white/80 bg-white/82 px-2 py-2 shadow-[var(--lab-card-shadow)] backdrop-blur-xl dark:border-white/12 dark:bg-slate-950/78">
					<div
						ref={mobileContainerRef}
						className="flex gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
					>
						{links.map((item, index) => {
							const isActive = item.href === activeHref
							return (
								<a
									key={item.href}
									ref={node => {
										mobileItemRefs.current[item.href] = node
									}}
									href={item.href}
									onClick={() => setActiveHref(item.href)}
									className={cn(
										'flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm transition',
										isActive
											? 'border-cyan-300/40 bg-cyan-50 text-slate-950 shadow-[0_10px_24px_rgba(44,188,243,0.18)] dark:border-cyan-400/30 dark:bg-cyan-400/12 dark:text-white'
											: 'border-slate-200/80 bg-white/65 text-slate-600 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
									)}
								>
									<span
										style={labMonoStyle}
										className={cn(
											'text-[0.58rem] uppercase tracking-[0.28em]',
											isActive ? 'text-[var(--lab-orange)]' : 'text-slate-500 dark:text-slate-400',
										)}
									>
										{index.toString().padStart(2, '0')}
									</span>
									<span className="tracking-[0.04em]">{item.label}</span>
								</a>
							)
						})}
					</div>
				</div>
			</div>
		)
	}

	return (
		<nav className={cn('grid gap-2', className)} aria-label={ariaLabel}>
			{links.map((item, index) => {
				const isActive = item.href === activeHref
				return (
					<a
						key={item.href}
						href={item.href}
						onClick={() => setActiveHref(item.href)}
						className={cn(
							'group flex items-center gap-3 rounded-full px-3 py-2.5 text-sm transition',
							isActive
								? 'bg-white/72 text-slate-950 dark:bg-white/10 dark:text-white'
								: 'text-slate-600 hover:translate-x-1 hover:bg-white/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
						)}
					>
						<span className="grid size-10 place-items-center rounded-full border border-slate-200/80 bg-white/75 shadow-[inset_0_-8px_14px_rgba(22,35,44,0.08),inset_0_6px_10px_rgba(255,255,255,0.95),0_6px_18px_rgba(41,72,91,0.14)] dark:border-white/12 dark:bg-slate-900/80">
							<span
								className={cn(
									'size-3 rounded-full bg-[var(--lab-cyan)] shadow-[0_0_16px_rgba(44,188,243,0.4)] transition',
									isActive ? 'scale-110 opacity-100' : 'opacity-60 group-hover:scale-110 group-hover:opacity-100',
								)}
							/>
						</span>
						<span>
							<span
								style={labMonoStyle}
								className="block text-[0.6rem] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
							>
								{index.toString().padStart(2, '0')}
							</span>
							<span className="text-sm tracking-[0.04em]">{item.label}</span>
						</span>
					</a>
				)
			})}
		</nav>
	)
}

export default LabSectionNavigator
