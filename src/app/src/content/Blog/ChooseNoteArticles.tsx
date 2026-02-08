import NextLink from '@/i18n/LocaleLink'
import {cn} from '@shadcn/lib/utils'
import {buttonVariants} from '@shadcn/ui/button'
import {ArrowRightIcon} from 'lucide-react'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent} from 'react'
interface Props {
	className?: string
	locale: Locale
}
const ChooseNoteArticles: FunctionComponent<Props> = async ({
	className,
	locale,
}) => {
	const t = await getTranslations({
		locale,
		namespace: 'Blog',
	})
	return (
		<div className={cn('flex gap-4', className)}>
			<NextLink
				locale={locale}
				href="/blog/notes"
				className={cn(
					buttonVariants({
						variant: 'outline',
						size: 'default',
					})
				)}>
				{t('go_to_notes')} <ArrowRightIcon />
			</NextLink>
			<NextLink
				locale={locale}
				href="/blog/micro"
				className={cn(
					buttonVariants({
						variant: 'outline',
						size: 'default',
					})
				)}>
				{t('go_to_micro_tales')} <ArrowRightIcon />
			</NextLink>
		</div>
	)
}
export default ChooseNoteArticles
