'use client'
import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import { useSearchParams } from 'next/navigation'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import usePathname from '@/i18n/usePathname'

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
			<LocaleLink
				className={cn(
					buttonVariants({
						variant: 'link',
						size: 'default',
						className: 'text-muted-foreground px-0',
					}), //is workarouind for bug. https://github.com/radix-ui/primitives/issues/3165
				)}
				href={`${pathname}${paramsStr === '' ? '' : `?${paramsStr}`}`}
				locale={locale}
			>
				{name}
			</LocaleLink>
		</li>
	)
}
export default LanguageItem
