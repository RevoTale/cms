import { type FragmentType, getFragmentData } from '@blog/gql'
import { badgeVariants } from '@shadcn/ui/badge'
import type { Locale } from 'next-intl'
import { createLinker, makeRelativeLink } from 'next-navigation-utils'
import type { FunctionComponent } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import { tagInURLOption } from '../Blog/linking'
import { tagFrag } from './ss'

const MicroBlogTag: FunctionComponent<{
	tag: FragmentType<typeof tagFrag>
	locale: Locale
}> = ({ tag, locale }) => {
	const data = getFragmentData(tagFrag, tag)
	return (
		<LocaleLink
			locale={locale}
			className={badgeVariants({ variant: 'secondary' })}
			href={createLinker(makeRelativeLink('/blog/notes')).setValue(tagInURLOption, [data.name]).asString()}
		>
			{data.title}
		</LocaleLink>
	)
}
export default MicroBlogTag
