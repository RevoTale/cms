'use client'
import { buttonVariants } from '@shadcn/ui/button'
import type { Locale } from 'next-intl'
import { useLinker } from 'next-navigation-utils/client'
import type { FunctionComponent, ReactNode } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import { pageOption, tagInURLOption } from '../../../../src/content/Blog/linking'

const TagFilterLink: FunctionComponent<{
	children: ReactNode
	newNames: string[]
	locale: Locale
}> = ({ newNames, children, locale }) => {
	const link = useLinker()
	return (
		<LocaleLink
			locale={locale}
			className={buttonVariants({ variant: 'secondary' })}
			href={link().setValue(tagInURLOption, newNames).setValue(pageOption, 1).asString()}
		>
			{children}
		</LocaleLink>
	)
}
export default TagFilterLink
