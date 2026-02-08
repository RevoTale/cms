import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import Link from 'next/link'
import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	h1?: ReactNode
	p1?: string
	p2?: string
	homeHref?: string
	homeContent?: ReactNode
}
const NotFoundPage: FunctionComponent<Props> = ({ homeContent, h1, p1, homeHref, p2 }) => (
	<section>
		<div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) lg:py-16 lg:px-6">
			<div className="mx-auto max-w-(--breakpoint-sm) text-center">
				{h1 === undefined ? null : (
					<h1 className="mb-4 text-5xl tracking-tight font-extrabold lg:text-9xl text-white-600 dark:text-white-500">
						{h1}
					</h1>
				)}
				{p1 === undefined ? null : (
					<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{p1}</p>
				)}
				{p2 === undefined ? null : <p className="mb-4 text-lg font-light text-muted-foreground">{p2}</p>}
				{homeHref === undefined ? null : (
					<Link
						className={cn(
							buttonVariants({
								variant: 'default',
								size: 'default',
							}),
						)}
						href={homeHref}
					>
						{homeContent}
					</Link>
				)}
			</div>
		</div>
	</section>
)
export default NotFoundPage
