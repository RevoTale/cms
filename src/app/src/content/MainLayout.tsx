import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import LabShellFrame from '../ui/lab/LabShellFrame'
import Footer from './Footer/Footer'
import Header from './Header'

interface Props {
	children: ReactNode
	searchButton?: ReactNode
	locale: Locale
}

const MainLayout: FunctionComponent<Props> = ({ children, searchButton, locale }) => (
	<LabShellFrame>
		<Header search={searchButton} locale={locale} />
		<main className="mx-auto w-full max-w-[94rem] flex-1 px-3 pb-6">{children}</main>
		<Footer locale={locale} />
	</LabShellFrame>
)

export default MainLayout
