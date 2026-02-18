import cloudflareLoader from '../../../../../../imageLoader'
export const thumbWidth = 1080
const getImageUrlThumb = (
	url: string,
	rootUrl: string,
	{
		width,
		height,
	}: {
		height: number
		width: number
	},
): {
	url: string
	width: number
	height: number
} => {
	const targetWidth = thumbWidth
	const targetHeight = Math.round((targetWidth * height) / width)
	return {
		url: cloudflareLoader({
				src: url,
				width: targetWidth,
			}),
		width: targetWidth,
		height: targetHeight,
	}
}
export default getImageUrlThumb
