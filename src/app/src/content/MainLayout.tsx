import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header'

interface Props {
	children: ReactNode
	searchButton?: ReactNode
	locale: Locale
}
const MainLayout: FunctionComponent<Props> = ({ children, searchButton, locale }) => (
	<>
		<Header search={searchButton} locale={locale} />
		<main className="px-3">{children}</main>
		<Footer locale={locale} />
	</>
)

export default MainLayout
