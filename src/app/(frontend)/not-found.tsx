import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { FunctionComponent } from 'react'
import { defaultLocale } from '@/i18n/config'
export const metadata: Metadata = {
	title: 'Page not found',
	description: 'The page you are looking for does not exist.',
}
const Custom404: FunctionComponent = () => {
	return (
		<html lang={defaultLocale}>
			<body>
				<section>
					<div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) lg:py-16 lg:px-6">
						<div className="mx-auto max-w-(--breakpoint-sm) text-center">
							<h1 className="mb-4 text-5xl tracking-tight font-extrabold lg:text-9xl text-white-600 dark:text-white-500">
								404
							</h1>
							<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
								Something is missing.
							</p>
							<p className="mb-4 text-lg font-light text-muted-foreground">
								Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
							</p>

							<Link
								href="/"
								className={cn(
									buttonVariants({
										variant: 'default',
										size: 'default',
									}),
								)}
							>
								Go to home page.
							</Link>
						</div>
					</div>
				</section>
			</body>
		</html>
	)
}

// noinspection JSUnusedGlobalSymbols
export default Custom404
