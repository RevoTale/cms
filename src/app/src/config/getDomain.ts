import 'server-only'
const getDomain = (): string => {
	const domain = process.env.APP_URL ?? process.env.PAYLOAD_PUBLIC_SERVER_URL
	if (!domain) {
		throw new Error('no domain')
	}
	return domain
}

export default getDomain
