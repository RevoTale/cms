'use client'
import LocaleLink from '@/i18n/LocaleLink'
import {buttonVariants} from '@shadcn/ui/button'
import {XIcon} from 'lucide-react'
import type {Locale} from 'next-intl'
import {useLinker} from 'next-navigation-utils/client'
import type {FunctionComponent, ReactNode} from 'react'
import {pageOption, tagInURLOption} from '../../../../src/content/Blog/linking'
interface Props {
	tagNameIn: string[]
	children: ReactNode
	locale: Locale
}
const TagDeleteLink: FunctionComponent<Props> = ({
	tagNameIn,
	children,
	locale,
}) => {
	const link = useLinker()
	return (
		<LocaleLink
			className={buttonVariants({
				variant: 'default',
				className: 'flex items-center',
			})}
			locale={locale}
			href={link()
				.setValue(tagInURLOption, tagNameIn)
				.setValue(pageOption, 1)
				.asString()}>
			<span>{children}</span>
			<XIcon />
		</LocaleLink>
	)
}

export default TagDeleteLink
