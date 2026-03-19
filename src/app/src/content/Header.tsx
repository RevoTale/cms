import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent, ReactNode } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import LabSurface from '../ui/lab/LabSurface'
import { labEyebrowClassName, labMonoStyle } from '../ui/lab/theme'
import Logo from './Logo'

interface Props {
	search?: ReactNode
	locale: Locale
}

const Header: FunctionComponent<Props> = async ({ search, locale }) => {
	const [t, tMeta] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'Header',
		}),
		getTranslations({
			locale,
			namespace: 'Metadata.Root',
		}),
	])

	return (
		<header className="px-3 pt-3 pb-2">
			<div className="mx-auto max-w-[94rem]">
				<LabSurface accent="cyan" tone="card">
					<div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
						<LocaleLink
							locale={locale}
							href="/"
							title={t('GoHome')}
							className="group flex min-w-0 items-center gap-4 rounded-[1.3rem] text-left"
						>
							<span className="grid size-14 shrink-0 place-items-center rounded-full border border-slate-200/80 bg-white/85 text-slate-900 shadow-[0_8px_22px_rgba(41,72,91,0.16)] dark:border-white/12 dark:bg-slate-900/80 dark:text-white">
								<span className="size-11 rounded-full bg-gradient-to-br from-cyan-100 via-white to-slate-100 p-1.5 dark:from-cyan-400/25 dark:via-slate-900 dark:to-slate-800">
									<Logo />
								</span>
							</span>
							<span className="min-w-0">
								<span style={labMonoStyle} className={labEyebrowClassName}>
									{tMeta('classification')}
								</span>
								<span className="mt-2 block text-[1.9rem] font-semibold tracking-[0.08em] text-slate-950 transition group-hover:text-[var(--lab-cyan)] dark:text-white">
									RevoTale
								</span>
							</span>
						</LocaleLink>
						{search === undefined ? null : (
							<div className="flex flex-wrap items-center gap-3 lg:justify-end">{search}</div>
						)}
					</div>
				</LabSurface>
			</div>
		</header>
	)
}

export default Header
