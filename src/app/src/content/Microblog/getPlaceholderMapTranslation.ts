import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { PLACEHOLDER_MAP, type PlaceholderMapTranslationKeys } from './shortTextPlaceholders'

const getPlaceholderMapTranslation = async (locale: Locale): Promise<PlaceholderMapTranslationKeys> => {
	const t = await getTranslations({
		locale,
		namespace: 'microblog',
	})
	return Object.keys(PLACEHOLDER_MAP).reduce<PlaceholderMapTranslationKeys>((acc, key) => {
		const mapKey = PLACEHOLDER_MAP[key]
		if (undefined === mapKey) {
			throw new Error(`No mapping found for key: ${key}`)
		}
		// eslint-disable-next-line no-param-reassign -- building object
		acc[key] = t(mapKey)
		return acc
	}, {})
}
export default getPlaceholderMapTranslation
