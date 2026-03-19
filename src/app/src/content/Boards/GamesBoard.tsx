import BoardDescription from '@revotale/ui/Board/BoardDescription'
import BoardList from '@revotale/ui/Board/BoardList'
import BoardListCrumbItem from '@revotale/ui/Board/BoardListCrumbItem'
import BoardSection from '@revotale/ui/Board/BoardSection'
import BoardTitleLink from '@revotale/ui/Board/BoardTitleLink'
import { SwordsIcon } from 'lucide-react'
import Image from 'next/image'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import { SeaBattleCrumb } from '../../linking/map/tools'
import SeaBattle from './images/sea-battle.png'

interface Props {
	priority?: boolean
	locale: Locale
}
const GamesBoard: FunctionComponent<Props> = async ({ priority, locale }) => {
	const [t, tTools] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'GamesBoard',
		}),
		getTranslations({
			locale,
			namespace: 'ToolsBoard',
		}),
	])
	return (
		<BoardSection>
			<BoardTitleLink href="/browser-games" locale={locale} icon={<SwordsIcon />}>
				{t('title')}
			</BoardTitleLink>
			<BoardDescription>{t('desc')}</BoardDescription>
			<BoardList>
				<BoardListCrumbItem
					actionLabel={tTools('LearnMore')}
					locale={locale}
					crumb={SeaBattleCrumb}
					description={t('sea_battle_desc')}
					image={
						<Image
							alt={t('sea_battle')}
							priority={priority}
							fetchPriority={priority === true ? 'high' : undefined}
							sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
							className="h-full w-full object-cover"
							src={SeaBattle}
						/>
					}
					title={t('sea_battle')}
				/>
			</BoardList>
		</BoardSection>
	)
}
export default GamesBoard
