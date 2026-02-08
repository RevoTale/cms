import type { RelativeURL } from 'next-navigation-utils'
import generateSitemapLanguages from '@/i18n/generateSitemapLanguages'
import getUrl from '../linking/getUrl'

interface Alternate {
	canonical: string
	languages: Record<string, string>
}
const generateAlternatesMeta = (pathname: RelativeURL | string, locale: string): Alternate => ({
	canonical: getUrl(typeof pathname === 'string' ? pathname : pathname.asString(), locale).toString(),
	languages: generateSitemapLanguages(typeof pathname === 'string' ? pathname : pathname.asString(), locale),
})
export default generateAlternatesMeta
