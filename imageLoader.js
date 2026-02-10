const stripLeadingSlashes = value => value.replace(/^\/+/u, '')
const isS3Host = hostname => hostname.includes('.s3.') || hostname.startsWith('s3.')

export default function cloudflareLoader({ src, width }) {
	const encodedSrc = src.replace(/ /g, '%20')

	try {
		const url = new URL(encodedSrc)
		if (isS3Host(url.hostname)) {
			const objectPath = stripLeadingSlashes(url.pathname)
			return `/cdn/image/s3/${width}/${objectPath}`
		}

		const relativePath = stripLeadingSlashes(url.pathname)
		return `/cdn/image/relative/${width}/${relativePath}`
	} catch {
		// Relative source path, fall through to relative route below.
	}

	const relativePath = stripLeadingSlashes(encodedSrc)
	return `/cdn/image/relative/${width}/${relativePath}`
}
