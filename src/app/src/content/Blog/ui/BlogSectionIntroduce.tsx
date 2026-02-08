import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import { Separator } from '@shadcn/ui/separator'
import type { Locale } from 'next-intl'
import type { FunctionComponent, ReactNode } from 'react'
import NextLink from '@/i18n/LocaleLink'

interface Props {
	icon: ReactNode
	title: string
	href: string
	children: ReactNode
	className?: string
	locale: Locale
}
const BlogSectionIntroduce: FunctionComponent<Props> = ({ icon, title, href, children, locale, className }) => {
	return (
		<section className={cn('max-w-full', className)}>
			<h3 className="my-3 flex">
				<NextLink
					locale={locale}
					href={href}
					className={cn(
						buttonVariants({
							variant: 'link',
							className: 'text-2xl font-medium flex items-center',
							size: 'default',
						}),
					)}
				>
					{icon}
					<span>{title}</span>
				</NextLink>
			</h3>

			<Separator className="my-4" />
			{children}
		</section>
	)
}
export default BlogSectionIntroduce
