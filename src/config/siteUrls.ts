const assertBaseUrl = (name: string, value: string): URL => {
	if (value.trim() !== value || value.length === 0) {
		throw new Error(`${name} is required`)
	}

	let parsed: URL
	try {
		parsed = new URL(value)
	} catch {
		throw new Error(`${name} must be a URL origin like https://revotale.com`)
	}

	const isOrigin = parsed.origin === value && parsed.pathname === '/' && parsed.search === '' && parsed.hash === ''
	if (!isOrigin) {
		throw new Error(`${name} must be a URL origin without path, query, hash, or trailing slash`)
	}

	return parsed
}

const getRequiredBaseUrl = (name: string): URL => {
	const value = process.env[name]
	if (!value) {
		throw new Error(`${name} is required`)
	}

	return assertBaseUrl(name, value)
}

const getOptionalBaseUrl = (name: string, fallback: URL): URL => {
	const value = process.env[name]
	return value ? assertBaseUrl(name, value) : fallback
}

export const toOrigin = (value: string | URL | undefined): string | undefined => {
	if (!value) {
		return undefined
	}

	if (value instanceof URL) {
		return value.origin
	}

	try {
		return new URL(value).origin
	} catch {
		return undefined
	}
}

export const withSubdomain = (baseUrl: URL, subdomain: string): URL => {
	const url = new URL(baseUrl)
	const hostname = url.hostname.startsWith('www.') ? url.hostname.slice(4) : url.hostname
	url.hostname = `${subdomain}.${hostname}`
	url.pathname = ''
	url.search = ''
	url.hash = ''

	return url
}

export const rootWebsiteUrl = getRequiredBaseUrl('ROOT_WEBSITE_URL')
export const cmsUrl = getOptionalBaseUrl('CMS_URL', withSubdomain(rootWebsiteUrl, 'cms'))
export const blogUrl = getOptionalBaseUrl('BLOG_URL', withSubdomain(rootWebsiteUrl, 'blog'))
export const toolsUrl = getOptionalBaseUrl('TOOLS_URL', withSubdomain(rootWebsiteUrl, 'tools'))
export const seaBattleUrl = getOptionalBaseUrl('SEA_BATTLE_URL', withSubdomain(rootWebsiteUrl, 'sea-battle'))
