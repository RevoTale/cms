import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import NextLink from '@/i18n/LocaleLink'
import { blogPaths, getBlogHref } from '../../linking/map/tools'

interface Props {
	className?: string
	locale: Locale
}
const ChooseNoteArticles: FunctionComponent<Props> = async ({ className, locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'Blog',
	})
	return (
		<div className={cn('flex gap-4', className)}>
			<NextLink
				locale={locale}
				href={getBlogHref(locale, blogPaths.notes)}
				className={cn(
					buttonVariants({
						variant: 'outline',
						size: 'default',
					}),
				)}
			>
				{t('go_to_notes')} <ArrowRightIcon />
			</NextLink>
			<NextLink
				locale={locale}
				href={getBlogHref(locale, blogPaths.micro)}
				className={cn(
					buttonVariants({
						variant: 'outline',
						size: 'default',
					}),
				)}
			>
				{t('go_to_micro_tales')} <ArrowRightIcon />
			</NextLink>
		</div>
	)
}
export default ChooseNoteArticles
