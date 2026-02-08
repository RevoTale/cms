import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import UrlTool, { type Tool } from './UrlToolClient'

interface Props {
	tool: Tool | null
	locale: Locale
}
const UrlToolTranslated: FunctionComponent<Props> = async ({ tool, locale }) => {
	const [t, tPaste, tCopy] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'UrlCoder',
		}),
		getTranslations({
			locale,
			namespace: 'Paste',
		}),
		getTranslations({
			locale,
			namespace: 'Copy',
		}),
	])
	return (
		<UrlTool
			locale={locale}
			copyButtonText={{
				label: tCopy('text'),
				done: tCopy('done'),
				error: tCopy('error'),
			}}
			decodeStr={t('decode')}
			encodeStr={t('encode')}
			pasteButton={{
				paste: tPaste('text'),
				loading: tPaste('loading'),
				error: tPaste('error'),
			}}
			inputKey="input"
			inputPlaceholder={t('inputPlace')}
			outputPlaceholder={t('outputPlace')}
			sameStr={t('same')}
			tool={tool}
		/>
	)
}
export default UrlToolTranslated
