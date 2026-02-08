import BoardDescription from '@revotale/ui/Board/BoardDescription'
import BoardSection from '@revotale/ui/Board/BoardSection'
import BoardTitleLink from '@revotale/ui/Board/BoardTitleLink'
import {BookHeartIcon} from 'lucide-react'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent} from 'react'
import SelfHostList from './Lists/SelfHostList'
interface Props {
	locale: Locale
}
const SelfHostingBoard: FunctionComponent<Props> = async ({locale}) => {
	const t = await getTranslations({
		locale,
		namespace: 'SelfHostList',
	})
	return (
		<BoardSection>
			<BoardTitleLink
				locale={locale}
				href="/homelab"
				icon={<BookHeartIcon />}>
				{t('title')}
			</BoardTitleLink>
			<BoardDescription>{t('desc')}</BoardDescription>
			<SelfHostList locale={locale} />
		</BoardSection>
	)
}
export default SelfHostingBoard
