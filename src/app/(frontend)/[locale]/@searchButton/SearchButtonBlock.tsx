import { labActionLinkVariants } from '@revotale/ui/lab/LabActionLink'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import SearchLink from '../../../src/content/Search/SearchLink'

interface Props {
	locale: Locale
}

const SearchButtonBlock: FunctionComponent<Props> = ({ locale }) => (
	<SearchLink
		locale={locale}
		className={labActionLinkVariants({
			size: 'md',
			variant: 'outline',
		})}
	/>
)

export default SearchButtonBlock
