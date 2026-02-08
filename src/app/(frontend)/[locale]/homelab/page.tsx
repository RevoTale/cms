import type { FunctionComponent } from 'react'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import SelfHostingBoard from '../../../src/content/Boards/SelfHostingBoard'

const Page: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	return <SelfHostingBoard locale={locale} />
}
export default Page
