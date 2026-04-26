import BoardDescription from '@revotale/ui/Board/BoardDescription'
import BoardSection from '@revotale/ui/Board/BoardSection'
import BoardTitleLink from '@revotale/ui/Board/BoardTitleLink'
import { FolderKanbanIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import NextLink from '@/i18n/LocaleLink'
import { getToolsHref } from '../../linking/map/tools'
import StableToolsList from './Lists/StableToolsList'

interface Props {
	locale: Locale
}
const ToolsBoard: FunctionComponent<Props> = async ({ locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'ToolsBoard',
	})
	const toolsHref = getToolsHref(locale)
	return (
		<BoardSection>
			<BoardTitleLink icon={<FolderKanbanIcon />} href={toolsHref} locale={locale}>
				{t('Utilities')}
			</BoardTitleLink>
			<BoardDescription>
				<NextLink locale={locale} className="hover:text-foreground" href={toolsHref} title={t('Utilities')}>
					{t('UtilitiesDesc')}
				</NextLink>
			</BoardDescription>
			<StableToolsList locale={locale} />
		</BoardSection>
	)
}
export default ToolsBoard
