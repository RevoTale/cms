import {LocaleInputType} from '../gql/graphql'

const getGqlLocale = (locale: string): LocaleInputType =>
	({
		en: LocaleInputType.EnUs,
		de: LocaleInputType.DeDe,
		uk: LocaleInputType.UkUa,
		es: LocaleInputType.EsEs,
		fr: LocaleInputType.FrFr,
		hi: LocaleInputType.HiIn,
		ja: LocaleInputType.JaJp,
		ru: LocaleInputType.RuRu,
	})[locale] ?? LocaleInputType.EnUs
export default getGqlLocale
