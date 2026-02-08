import BoardDescription from '@revotale/ui/Board/BoardDescription'
import BoardSection from '@revotale/ui/Board/BoardSection'
import BoardTitle from '@revotale/ui/Board/BoardTitle'
import { CodeXmlIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import OpenSourceList from './Lists/OpenSourceList'

interface Props {
	locale: Locale
}
const OpenSourceBoard: FunctionComponent<Props> = async ({ locale }) => {
	const t = await getTranslations({
		namespace: 'OpenSource',
		locale,
	})
	return (
		<BoardSection>
			<BoardTitle icon={<CodeXmlIcon />}>{t('title')}</BoardTitle>
			<BoardDescription>{t('desc')}</BoardDescription>
			<OpenSourceList locale={locale} />
		</BoardSection>
	)
}
export default OpenSourceBoard
