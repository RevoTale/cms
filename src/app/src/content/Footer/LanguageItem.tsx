'use client'

import { useSearchParams } from 'next/navigation'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import usePathname from '@/i18n/usePathname'
import LabActionLink from '../../ui/lab/LabActionLink'

interface Props {
	name: string
	locale: Locale
}

const LanguageItem: FunctionComponent<Props> = ({ name, locale }) => {
	const params = useSearchParams()
	const pathname = usePathname()
	const paramsStr = params.toString()

	return (
		<li>
			<LabActionLink
				className="min-h-0 justify-start px-0 py-0 text-left"
				href={`${pathname}${paramsStr === '' ? '' : `?${paramsStr}`}`}
				locale={locale}
				size="sm"
				variant="text"
			>
				{name}
			</LabActionLink>
		</li>
	)
}

export default LanguageItem
