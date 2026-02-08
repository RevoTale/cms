import type { Locale } from 'next-intl'
export type LocalePromise = Promise<Locale>

export type LinkLocale = Locale | LocalePromise
