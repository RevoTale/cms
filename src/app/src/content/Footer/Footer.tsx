import { buttonVariants } from '@shadcn/ui/button'
import { HeartIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import websiteName from '../../config/websiteName'
import { blogPaths, getBlogHref, getRootWebsiteHref, getToolsHref, SeaBattleCrumb } from '../../linking/map/tools'
import FooterList from './FooterList'
import FooterListItem from './FooterListItem'
import LanguageItem from './LanguageItem'
import ReachUsOut from './ReachUsOut'

interface Props {
	locale: Locale
}
const Footer: FunctionComponent<Props> = async ({ locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'Footer',
	})
	const currentYear = new Date().getFullYear().toString()
	const blogHref = getBlogHref(locale)
	const notesHref = getBlogHref(locale, blogPaths.notes)
	return (
		<footer className="flex flex-col min-h-36 justify-center items-center mt-12">
			<section className="flex flex-wrap flex-row justify-center w-full px-10 gap-y-5 gap-x-10 md:gap-x-18 lg:gap-x-30 items-start">
				<FooterList id="languages" title={t('LangTitle')}>
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
				<FooterList id="footer_navigation" title={t('Nav')}>
					<FooterListItem locale={locale} href={getToolsHref(locale)}>
						{t('Utils')}
					</FooterListItem>
					<FooterListItem locale={locale} href={blogHref}>
						{t('Blog')}
					</FooterListItem>

					<FooterListItem locale={locale} href={notesHref}>
						{t('notes')}
					</FooterListItem>

					<FooterListItem locale={locale} href={SeaBattleCrumb.href}>
						{t('sea_battle')}
					</FooterListItem>
					<FooterListItem locale={locale} href={getRootWebsiteHref(locale, '/love-rain')}>
						{t('sweetheart')} <HeartIcon />
					</FooterListItem>
				</FooterList>
			</section>
			<div className="mt-10">
				<LocaleLink
					locale={locale}
					className={buttonVariants({
						variant: 'secondary',
						size: 'lg',
					})}
					href={getRootWebsiteHref(locale, '/navigation-map')}
				>
					{t('OpenNavMapButton')}
				</LocaleLink>
			</div>
			<div className="mt-3">
				<small className="text-base p-2 inline-block text-center" id="website_copyright">
					{t('Rights', {
						year: currentYear,
						company: websiteName,
					})}
				</small>
			</div>
			<div className="mb-6">
				<small className="text-sm p-2 inline-block text-center text-muted-foreground">
					{t.rich('PoweredBy', {
						a: chunks => (
							<a
								href="https://github.com/RevoTale/lovely-eye"
								rel="noopener noreferrer"
								target="_blank"
								className="underline hover:text-foreground transition-colors"
							>
								{chunks}
							</a>
						),
					})}
				</small>
			</div>
		</footer>
	)
}
export default Footer
