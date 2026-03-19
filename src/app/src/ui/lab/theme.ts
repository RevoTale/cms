import type { CSSProperties } from 'react'

export const labThemeStyle = {
	'--lab-cyan': '#2cbcf3',
	'--lab-orange': '#ff9a31',
	'--lab-line': 'rgba(37, 145, 214, 0.2)',
	'--lab-line-strong': 'rgba(37, 145, 214, 0.45)',
	'--lab-panel-shadow': '0 24px 80px rgba(43, 66, 84, 0.18)',
	'--lab-card-shadow': '0 14px 38px rgba(43, 66, 84, 0.12)',
	'--lab-mono': '"IBM Plex Mono", "SFMono-Regular", "Courier New", monospace',
	'--lab-sans': '"Trebuchet MS", "Avenir Next", "Segoe UI", sans-serif',
} as CSSProperties

export const labMonoStyle = {
	fontFamily: 'var(--lab-mono)',
} as CSSProperties

export const labSansStyle = {
	fontFamily: 'var(--lab-sans)',
} as CSSProperties

export const labEyebrowClassName = 'text-[0.68rem] uppercase tracking-[0.32em] text-[var(--lab-orange)]'

export const labMutedTextClassName = 'text-slate-600 dark:text-slate-300'
