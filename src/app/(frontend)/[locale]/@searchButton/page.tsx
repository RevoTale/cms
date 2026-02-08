import type { FunctionComponent } from 'react'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import SearchButtonPage from './SearchButtonBlock'

const Page: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	return <SearchButtonPage locale={(await params).locale} />
}
export default Page
