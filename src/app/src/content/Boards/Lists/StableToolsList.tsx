import BoardList from '@revotale/ui/Board/BoardList'
import BoardListCrumbItem from '@revotale/ui/Board/BoardListCrumbItem'
import Image from 'next/image'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import {
	RandomRecordSelector,
	ScreenFillGalleryTool,
	URLStringToolCrumb,
	VideoDurationChanger,
} from '../../../linking/map/tools'
import EncodeDecodeImage from '../images/encode-decode.png'
import RecordRandomizer from '../images/record-randomizer.png'
import ScreenFillGallery from '../images/screen-fill-gallery.png'
import VideoSpeedChangeImage from '../images/video-speed-changer.png'

const sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px'
const StableToolsList: FunctionComponent<{
	locale: Locale
}> = async ({ locale }) => {
	const [t, crumbs, tTools] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'ToolsBoard.Desc',
		}),
		getTranslations({
			locale,
			namespace: 'ToolsBoard.Breadcrumbs',
		}),
		getTranslations({
			locale,
			namespace: 'ToolsBoard',
		}),
	])
	return (
		<BoardList>
			<BoardListCrumbItem
				actionLabel={tTools('LearnMore')}
				locale={locale}
				crumb={RandomRecordSelector}
				description={t('RecordRandomizer')}
				image={
					<Image
						alt={crumbs('RecordRandomizer')}
						sizes={sizes}
						className="h-full w-full object-cover"
						src={RecordRandomizer}
					/>
				}
				title={crumbs('RecordRandomizer')}
			/>
			<BoardListCrumbItem
				actionLabel={tTools('LearnMore')}
				locale={locale}
				crumb={URLStringToolCrumb}
				description={t('URlDecodeEncode')}
				image={
					<Image
						alt={crumbs('URlDecodeEncode')}
						sizes={sizes}
						className="h-full w-full object-cover"
						src={EncodeDecodeImage}
					/>
				}
				title={crumbs('URlDecodeEncode')}
			/>
			<BoardListCrumbItem
				actionLabel={tTools('LearnMore')}
				locale={locale}
				crumb={VideoDurationChanger}
				description={t('VideoSpeedChange')}
				image={
					<Image
						alt={crumbs('VideoSpeedChange')}
						sizes={sizes}
						className="h-full w-full object-cover"
						src={VideoSpeedChangeImage}
					/>
				}
				title={crumbs('VideoSpeedChange')}
			/>
			<BoardListCrumbItem
				actionLabel={tTools('LearnMore')}
				locale={locale}
				image={
					<Image
						alt={crumbs('ScreenFillGallery')}
						sizes={sizes}
						className="h-full w-full object-cover"
						src={ScreenFillGallery}
					/>
				}
				crumb={ScreenFillGalleryTool}
				description={t('ScreenFillGallery')}
				title={crumbs('ScreenFillGallery')}
			/>
		</BoardList>
	)
}
export default StableToolsList
