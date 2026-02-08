import type { RelativeURL } from 'next-navigation-utils'
import 'server-only'
import getDomain from '../config/getDomain'
import formatUrl from './formatUrl'

const getUrl = (path: string | RelativeURL, locale: string | null, sub?: string): URL => {
	const domain = getDomain()

	return formatUrl(domain, path, locale, sub)
}
export default getUrl
