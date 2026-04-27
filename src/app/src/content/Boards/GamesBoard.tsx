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
import { getRootWebsiteHref, SeaBattleCrumb } from '../../linking/map/tools'
import SeaBattle from './images/sea-battle.png'

interface Props {
	priority?: boolean
	locale: Locale
}
const GamesBoard: FunctionComponent<Props> = async ({ priority, locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'GamesBoard',
	})
	return (
		<BoardSection>
			<BoardTitleLink href={getRootWebsiteHref(locale, '/browser-games')} locale={locale} icon={<SwordsIcon />}>
				{t('title')}
			</BoardTitleLink>
			<BoardDescription>{t('desc')}</BoardDescription>
			<BoardList>
				<BoardListCrumbItem
					locale={locale}
					crumb={SeaBattleCrumb}
					description={t('sea_battle_desc')}
					image={
						<Image
							alt={t('sea_battle')}
							priority={priority}
							fetchPriority={priority === true ? 'high' : undefined}
							sizes="(max-width: 260px) 100vw, 270px"
							className="h-auto w-full"
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
