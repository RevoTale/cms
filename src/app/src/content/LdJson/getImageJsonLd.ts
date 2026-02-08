import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import type {ImageObject, WithContext} from 'schema-dts'
import getImageUrlThumb from '../utils/seo/getImageUrlThumb'

export const imageJsonLdFragment = graphql(/* GraphQL */ `
	fragment ImageJsonLd on Media {
		id
		width
		height
		url
		description
	}
`)
type Data = WithContext<ImageObject>
const getImageJsonLd = (
	rootUrl: string,
	image: FragmentType<typeof imageJsonLdFragment>
): Data | undefined => {
	const data = getFragmentData(imageJsonLdFragment, image)
	const {url, width, height} = data
	if (
		typeof url !== 'string' ||
		typeof width !== 'number' ||
		typeof height !== 'number'
	) {
		return undefined
	}
	const formatted = getImageUrlThumb(url, rootUrl, {
		width,
		height,
	})
	const jsonLd: Data = {
		'@type': 'ImageObject',
		'@context': 'https://schema.org',
		url: formatted.url,
		width: formatted.width.toString(),
		height: formatted.height.toString(),
		description: data.description ?? undefined,
	}
	return jsonLd
}
export default getImageJsonLd
