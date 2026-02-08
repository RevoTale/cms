import {buttonVariants} from '@shadcn/ui/button'
import type {Locale} from 'next-intl'
import type {FunctionComponent} from 'react'
import SearchLink from '../../../src/content/Search/SearchLink'
interface Props {
	locale: Locale
}
const SearchButtonBlock: FunctionComponent<Props> = ({locale}) => {
	const linkClassname = buttonVariants({
		variant: 'outline',
	})
	return (
		<div className="flex justify-center my-4">
			<SearchLink locale={locale} className={linkClassname} />
		</div>
	)
}
export default SearchButtonBlock
