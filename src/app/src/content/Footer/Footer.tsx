import { HeartIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import websiteName from '../../config/websiteName'
import { BlogCrumb, SeaBattleCrumb, ToolsCrumb } from '../../linking/map/tools'
import LabActionLink from '../../ui/lab/LabActionLink'
import LabSurface from '../../ui/lab/LabSurface'
import { labEyebrowClassName, labMonoStyle, labMutedTextClassName } from '../../ui/lab/theme'
import FooterList from './FooterList'
import FooterListItem from './FooterListItem'
import LanguageItem from './LanguageItem'
import ReachUsOut from './ReachUsOut'

interface Props {
	locale: Locale
}

const Footer: FunctionComponent<Props> = async ({ locale }) => {
	const [t, tMeta] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'Footer',
		}),
		getTranslations({
			locale,
			namespace: 'Metadata.Root',
		}),
	])
	const currentYear = new Date().getFullYear().toString()

	return (
		<footer className="mt-8 px-3 pb-6">
			<div className="mx-auto max-w-[94rem]">
				<LabSurface accent="orange" as="section" tone="panel">
					<div className="grid gap-8 p-6 sm:p-8">
						<div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
							<div className="max-w-2xl">
								<p style={labMonoStyle} className={labEyebrowClassName}>
									{tMeta('classification')}
								</p>
								<h2 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
									{websiteName}
								</h2>
								<p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">{tMeta('desc')}</p>
							</div>
							<div className="flex flex-wrap gap-3">
								<LabActionLink locale={locale} href="/navigation-map" size="lg" variant="solid">
									{t('OpenNavMapButton')}
								</LabActionLink>
								<LabActionLink locale={locale} href="/blog/notes" size="lg" variant="outline">
									{t('notes')}
								</LabActionLink>
							</div>
						</div>

						<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1fr_1.15fr_1fr]">
							<FooterList title={t('LangTitle')}>
								<LanguageItem locale="en" name="🇬🇧 English" />
								<LanguageItem locale="de" name="🇩🇪 Deutsch" />
								<LanguageItem locale="es" name="🇪🇸 Español" />
								<LanguageItem locale="hi" name="🇮🇳 हिंदी" />
								<LanguageItem locale="uk" name="🇺🇦 Українська" />
								<LanguageItem locale="ru" name="🇷🇺 Русский" />
								<LanguageItem locale="ja" name="🇯🇵 日本語" />
								<LanguageItem locale="fr" name="🇫🇷 Français" />
							</FooterList>

							<ReachUsOut locale={locale} />

							<FooterList title={t('Nav')}>
								<FooterListItem locale={locale} href={ToolsCrumb.href}>
									{t('Utils')}
								</FooterListItem>
								<FooterListItem locale={locale} href={BlogCrumb.href}>
									{t('Blog')}
								</FooterListItem>
								<FooterListItem locale={locale} href="/blog/notes">
									{t('notes')}
								</FooterListItem>
								<FooterListItem locale={locale} href={SeaBattleCrumb.href}>
									{t('sea_battle')}
								</FooterListItem>
								<FooterListItem locale={locale} href="/love-rain">
									{t('sweetheart')} <HeartIcon className="size-4" />
								</FooterListItem>
							</FooterList>
						</div>

						<div className="border-t border-slate-200/70 pt-4 text-sm dark:border-white/10">
							<small className="block text-base text-slate-700 dark:text-slate-200" id="website_copyright">
								{t('Rights', {
									year: currentYear,
									company: websiteName,
								})}
							</small>
							<small className={labMutedTextClassName}>
								{t.rich('PoweredBy', {
									a: chunks => (
										<a
											href="https://github.com/RevoTale/lovely-eye"
											rel="noopener noreferrer"
											target="_blank"
											className="underline decoration-cyan-400/70 underline-offset-4 hover:text-slate-950 dark:hover:text-white"
										>
											{chunks}
										</a>
									),
								})}
							</small>
						</div>
					</div>
				</LabSurface>
			</div>
		</footer>
	)
}

export default Footer
