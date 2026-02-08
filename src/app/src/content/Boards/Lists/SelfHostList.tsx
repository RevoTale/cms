import BoardList from '@revotale/ui/Board/BoardList'
import BoardListItem from '@revotale/ui/Board/BoardListItem'
import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import getUrl from '../../../linking/getUrl'

const OpenGithubButton: FunctionComponent<{
	href: string
	locale: Locale
}> = async ({ href, locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'SelfHostList',
	})
	return (
		<a
			rel="noopener noreferrer"
			target="_blank"
			href={href}
			className={cn(
				buttonVariants({
					variant: 'secondary',
					size: 'default',
				}),
			)}
		>
			{t('githubLink')}
		</a>
	)
}
const SelfHostList: FunctionComponent<{
	locale: Locale
}> = async ({ locale }) => {
	const [t, tDesc] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'SelfHostList.items.title',
		}),
		getTranslations({
			locale,
			namespace: 'SelfHostList.items.desc',
		}),
	])

	return (
		<BoardList>
			<BoardListItem
				locale={locale}
				description={tDesc('watcharr')}
				footer={<OpenGithubButton href="https://github.com/sbondCo/Watcharr" locale={locale} />}
				external={true}
				href={getUrl('/', null, 'tv').toString()}
				newTab={true}
				title={t('watcharr')}
			/>
			<BoardListItem
				locale={locale}
				description={tDesc('glance')}
				footer={<OpenGithubButton href="https://github.com/TwiN/gatus" locale={locale} />}
				external={true}
				href={getUrl('/', null, 'board').toString()}
				newTab={true}
				title={t('glance')}
			/>

			<BoardListItem
				locale={locale}
				footer={<OpenGithubButton href="https://github.com/usememos/memos" locale={locale} />}
				description={tDesc('memos')}
				external={true}
				href={getUrl('/', null, 'notes').toString()}
				newTab={true}
				title={t('memos')}
			/>
		</BoardList>
	)
}
export default SelfHostList
