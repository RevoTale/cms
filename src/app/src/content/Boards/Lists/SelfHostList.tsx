import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import getUrl from '../../../linking/getUrl'
import type { CompactBoardCarouselItem } from './CompactBoardCarousel'
import CompactBoardCarousel from './CompactBoardCarousel'

interface Props {
	locale: Locale
}

const SelfHostList: FunctionComponent<Props> = async ({ locale }) => {
	const [t, tDesc, tTools, tSelfHost] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'SelfHostList.items.title',
		}),
		getTranslations({
			locale,
			namespace: 'SelfHostList.items.desc',
		}),
		getTranslations({
			locale,
			namespace: 'ToolsBoard',
		}),
		getTranslations({
			locale,
			namespace: 'SelfHostList',
		}),
	])

	const items: CompactBoardCarouselItem[] = [
		{
			actionAriaLabel: `${tSelfHost('githubLink')}: ${t('watcharr')}`,
			actionHref: 'https://github.com/sbondCo/Watcharr',
			description: tDesc('watcharr'),
			external: true,
			href: getUrl('/', null, 'tv').toString(),
			newTab: true,
			title: t('watcharr'),
		},
		{
			actionAriaLabel: `${tSelfHost('githubLink')}: ${t('glance')}`,
			actionHref: 'https://github.com/TwiN/gatus',
			description: tDesc('glance'),
			external: true,
			href: getUrl('/', null, 'board').toString(),
			newTab: true,
			title: t('glance'),
		},
		{
			actionAriaLabel: `${tSelfHost('githubLink')}: ${t('memos')}`,
			actionHref: 'https://github.com/usememos/memos',
			description: tDesc('memos'),
			external: true,
			href: getUrl('/', null, 'notes').toString(),
			newTab: true,
			title: t('memos'),
		},
	]

	return <CompactBoardCarousel actionLabel={tTools('LearnMore')} items={items} locale={locale} />
}

export default SelfHostList
