import Script from 'next/script'
import type { FunctionComponent } from 'react'
import 'server-only'

const Analytics: FunctionComponent = () => {
	const url = process.env.LOVELY_EYE_SCRIPT_URL ?? null
	const siteKey = process.env.LOVELY_EYE_SITE_ID ?? null

	return (
		url !== null && siteKey !== null && <Script data-site-key={siteKey} src={url} strategy="afterInteractive"></Script>
	)
}

export default Analytics
