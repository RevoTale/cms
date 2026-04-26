import BoardList from '@revotale/ui/Board/BoardList'
import BoardListItem from '@revotale/ui/Board/BoardListItem'
import Image from 'next/image'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import {
	getToolsHref,
	RandomRecordSelector,
	ScreenFillGalleryTool,
	URLStringToolCrumb,
	VideoDurationChanger,
} from '../../../linking/map/tools'
import EncodeDecodeImage from '../images/encode-decode.png'
import RecordRandomizer from '../images/record-randomizer.png'
import ScreenFillGallery from '../images/screen-fill-gallery.png'
import VideoSpeedChangeImage from '../images/video-speed-changer.png'

const sizes = '(max-width: 260px) 100vw, 270px'
const StableToolsList: FunctionComponent<{
	locale: Locale
}> = async ({ locale }) => {
	const [t, crumbs] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'ToolsBoard.Desc',
		}),
		getTranslations({
			locale,
			namespace: 'ToolsBoard.Breadcrumbs',
		}),
	])
	return (
		<BoardList>
			<BoardListItem
				locale={locale}
				href={getToolsHref(locale, RandomRecordSelector.href)}
				external
				description={t('RecordRandomizer')}
				image={
					<Image alt={crumbs('RecordRandomizer')} sizes={sizes} className="h-auto w-full" src={RecordRandomizer} />
				}
				title={crumbs('RecordRandomizer')}
			/>
			<BoardListItem
				locale={locale}
				href={getToolsHref(locale, URLStringToolCrumb.href)}
				external
				description={t('URlDecodeEncode')}
				image={
					<Image alt={crumbs('URlDecodeEncode')} sizes={sizes} className="h-auto w-full" src={EncodeDecodeImage} />
				}
				title={crumbs('URlDecodeEncode')}
			/>
			<BoardListItem
				locale={locale}
				href={getToolsHref(locale, VideoDurationChanger.href)}
				external
				description={t('VideoSpeedChange')}
				image={
					<Image alt={crumbs('VideoSpeedChange')} sizes={sizes} className="h-auto w-full" src={VideoSpeedChangeImage} />
				}
				title={crumbs('VideoSpeedChange')}
			/>
			<BoardListItem
				locale={locale}
				image={
					<Image alt={crumbs('ScreenFillGallery')} sizes={sizes} className="h-auto w-full" src={ScreenFillGallery} />
				}
				href={getToolsHref(locale, ScreenFillGalleryTool.href)}
				external
				description={t('ScreenFillGallery')}
				title={crumbs('ScreenFillGallery')}
			/>
		</BoardList>
	)
}
export default StableToolsList
