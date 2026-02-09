const normalizeSrc = src => {
	try {
		new URL(src)
	} catch {
		// If the URL is invalid, return the original src
		return `/relative${src}`
	}

	return `/url/${src}`
}

export default function cloudflareLoader({ src, width }) {
	// Encode spaces in the source URL
	const encodedSrc = src.replace(/ /g, '%20')
	return `/cdn/image/${width}${normalizeSrc(encodedSrc)}`
}
