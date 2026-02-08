import type { FunctionComponent } from 'react'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import getPlaceholderMapTranslation from '../../../src/content/Microblog/getPlaceholderMapTranslation'
import SearchBarInput from '../../../src/content/Search/SearchBarInput'
import BlogApolloProvider from '../../../src/gql/BlogApolloProvider'

const Page: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	return (
		<BlogApolloProvider>
			<SearchBarInput locale={locale} translationKeys={await getPlaceholderMapTranslation(locale)} />
		</BlogApolloProvider>
	)
}
export default Page
