import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import getImageUrlThumb from './getImageUrlThumb'

export const ImageFragment = graphql(`
	fragment Util_getImageThumb on Media {
		id
		url
		width
		height
	}
`)
const getImageThumb = (
	image: FragmentType<typeof ImageFragment>,
	rootUrl: string
): {
	url: string
	width: number
	height: number
} => {
	const data = getFragmentData(ImageFragment, image)
	const url = data.url ?? null
	const width = data.width ?? null
	const height = data.height ?? null
	if (url === null || width === null || height === null) {
		throw new Error('ss')
	}

	// Use cloudflare loader to generate the image URL with a width of 1024
	// This is useful for Open Graph images
	return getImageUrlThumb(url, rootUrl, {width, height})
}
export default getImageThumb
