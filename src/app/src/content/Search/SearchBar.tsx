import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import getPlaceholderMapTranslation from '../Microblog/getPlaceholderMapTranslation'
import SearchBarInput from './SearchBarInput'

interface Props {
	locale: Locale
}
const SearchBar: FunctionComponent<Props> = async ({ locale }) => {
	return <SearchBarInput locale={locale} translationKeys={await getPlaceholderMapTranslation(locale)} />
}
export default SearchBar
