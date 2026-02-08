import { permanentRedirect } from 'next/navigation'
import type { FunctionComponent } from 'react'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import getUrl from '../../../../src/linking/getUrl'
import { ScreenFillGalleryTool } from '../../../../src/linking/map/tools'

const ImageCollectionRenderer: FunctionComponent<PagePropsWithLocale> = async props => {
	permanentRedirect(getUrl(ScreenFillGalleryTool.href, (await props.params).locale).toString())
}

export default ImageCollectionRenderer
