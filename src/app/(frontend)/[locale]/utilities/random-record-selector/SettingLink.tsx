'use client'
import { useSearchParams } from 'next/navigation'
import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import { RandomRecordSelector } from '../../../../src/linking/map/tools'

interface Props {
	className?: string
	children?: ReactNode
	locale: Locale
}
const SettingLink: FunctionComponent<Props> = ({ className, children, locale }) => {
	const searchParams = useSearchParams()
	return (
		<LocaleLink
			locale={locale}
			className={className}
			href={`${RandomRecordSelector.href}/settings?${searchParams.toString()}`}
		>
			{children}
		</LocaleLink>
	)
}
export default SettingLink
