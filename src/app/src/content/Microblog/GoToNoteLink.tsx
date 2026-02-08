'use client'
import type { FragmentType } from '@blog/gql'
import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import { Spinner } from '@shadcn/ui/spinner'
import { ExternalLinkIcon } from 'lucide-react'
import { useLinkStatus } from 'next/link'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import NextLink from '@/i18n/LocaleLink'
import getMicropostHref, { type BlogGetMicropostHref } from './getMicroPostHref'

interface Props {
	data: FragmentType<typeof BlogGetMicropostHref>
	locale: Locale
}
const IconNav: FunctionComponent = () => {
	const { pending } = useLinkStatus()
	return pending ? <Spinner className="w-6 h-6" /> : <ExternalLinkIcon />
}
const GoToNoteLink: FunctionComponent<Props> = ({ data, locale }) => {
	return (
		<NextLink
			locale={locale}
			className={cn(
				buttonVariants({
					variant: 'ghost',
					size: 'sm',
					className: 'text-muted-foreground',
				}),
			)}
			href={getMicropostHref(data).asString()}
		>
			<IconNav />
		</NextLink>
	)
}
export default GoToNoteLink
