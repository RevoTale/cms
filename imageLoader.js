const stripLeadingSlashes = value => value.replace(/^\/+/u, '')
const CDN_S3_PATH_PATTERN = /((?:^|\/)cdn\/image\/s3\/)(\d+)(\/)/u

export default function imageLoader({ src, width }) {
	const encodedSrc = src.replace(/ /g, '%20')

	if (CDN_S3_PATH_PATTERN.test(encodedSrc)) {
		return encodedSrc.replace(CDN_S3_PATH_PATTERN, `$1${width}$3`)
	}

	const relativePath = stripLeadingSlashes(encodedSrc)
	return `/cdn/image/relative/${width}/${relativePath}`
}
