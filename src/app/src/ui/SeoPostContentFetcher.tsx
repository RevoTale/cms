import {routing} from '@/i18n/routing'
import {NextIntlClientProvider} from 'next-intl'
import type {Locale} from 'next-intl'
import {getMessages} from 'next-intl/server'
import type {FunctionComponent} from 'react'
import getDomain from '../config/getDomain'
import PostMarkdown from '../content/Blog/Post/PostMarkdown'
import {getPostBySlug} from '../readPost'
import pick from '../utils/pick'

const SeoPostContentFetcher: FunctionComponent<{
	slug: string
	locale?: Locale
}> = async ({slug, locale = routing.defaultLocale}) => {
	const content = await getPostBySlug(slug)
	const messages = pick(
		await getMessages({
			locale,
		}),
		['copyButton']
	)
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<PostMarkdown
				locale={locale}
				markdown={content}
				rootUrl={getDomain()}
			/>
		</NextIntlClientProvider>
	)
}
export default SeoPostContentFetcher
