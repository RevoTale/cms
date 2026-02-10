import BreaadcrumbsSkeleton from '@revotale/ui/BreaadcrumbsSkeleton'
import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import type { FunctionComponent } from 'react'
import { routing } from '@/i18n/routing'
import BlogListItemAuthor from '../../../../src/content/Blog/List/BlogListItemAuthor'
import MicroblogListWithDataHorizontalSkeleton from '../../../../src/content/Microblog/MicroblogListWithDataHorizontalSkeleton'

const Page: FunctionComponent = () => {
	return (
		<div className="m-auto max-w-3xl">
			<BreaadcrumbsSkeleton count={3} />
			<section className="my-3 flex flex-wrap gap-2">
				<BlogListItemAuthor author={null} className="basis-80" locale={routing.defaultLocale} />
				<InlineSkeleton className="text-base text-muted-foreground mt-1 h-7 w-48" />
			</section>
			<hr className="my-3" />

			<section className="my-6">
				<InlineSkeleton
					className={cn(
						buttonVariants({
							variant: 'link',
							size: 'default',
							className: 'text-2xl mb-4 w-48 h-8',
						}),
					)}
				/>
				<MicroblogListWithDataHorizontalSkeleton />
			</section>
		</div>
	)
}

export default Page
