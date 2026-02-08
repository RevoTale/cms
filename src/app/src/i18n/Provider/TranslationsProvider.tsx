'use client'

import type { FunctionComponent, ReactNode } from 'react'
import { IntlProvider, type Locale, type Messages } from 'use-intl'

interface TranslationsProviderProps {
	children: ReactNode
	locale: Locale
	messages: Messages
}
const TranslationsProvider: FunctionComponent<TranslationsProviderProps> = ({ children, locale, messages }) => {
	return (
		<IntlProvider timeZone="Europe/Vienna" locale={locale} messages={messages}>
			{children}
		</IntlProvider>
	)
}
export default TranslationsProvider
