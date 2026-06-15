import type { LocaleInputType } from '../gql/graphql'

const gqlLocaleByLocale: Record<string, LocaleInputType> = {
	en: 'en_US',
	de: 'de_DE',
	uk: 'uk_UA',
	es: 'es_ES',
	fr: 'fr_FR',
	hi: 'hi_IN',
	ja: 'ja_JP',
	ru: 'ru_RU',
}

const getGqlLocale = (locale: string): LocaleInputType => gqlLocaleByLocale[locale] ?? 'en_US'
export default getGqlLocale
