import LocaleLink from '@/i18n/LocaleLink'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent, ReactNode} from 'react'
import Logo from './Logo'
interface Props {
	search?: ReactNode
	locale: Locale
}
const Header: FunctionComponent<Props> = async ({search, locale}) => {
	const t = await getTranslations({
		locale,
		namespace: 'Header',
	})

	return (
		<>
			<header className="flex justify-center gap-3 my-4 ">
				<LocaleLink
					locale={locale}
					href="/"
					title={t('GoHome')}
					className="text-2xl flex col-span-1 items-center justify-center tracking-wider">
					Rev
					<span className="size-9 col-span-1 justify-self-end ">
						<span
							className="w-10 rounded-full bg-neutral-200"
							title={t('GoHome')}>
							<Logo />
						</span>
					</span>
					tale
				</LocaleLink>
			</header>
			{search}
		</>
	)
}
export default Header
