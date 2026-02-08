import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import getDomain from '../../../config/getDomain'
import getImageUrlThumb from './getImageUrlThumb'

const OGImageFragment = graphql(`
	fragment SEO_getOGImage on Media {
		id
		url
		width
		height
		alt
	}
`)
const getOGImage = (
	item: FragmentType<typeof OGImageFragment>
): {width?: number; height?: number; url: string; alt?: string} => {
	const {width, url, alt, height} = getFragmentData(OGImageFragment, item)
	if (
		typeof url !== 'string' ||
		url.length === 0 ||
		typeof width !== 'number' ||
		typeof height !== 'number'
	) {
		throw new Error('No image url')
	}
	return {
		...getImageUrlThumb(url, getDomain(), {
			width,
			height,
		}),
		alt: alt ?? undefined,
	}
}
export default getOGImage
