import { SearchIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import LocaleLink from '@/i18n/LocaleLink'

interface Props {
	className?: string
	locale: Locale
}
const SearchLink: FunctionComponent<Props> = async ({ className, locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'Header',
	})
	return (
		<LocaleLink locale={locale} className={className} href={'/search?s='}>
			<SearchIcon /> {t('Search')}
		</LocaleLink>
	)
}

export default SearchLink
