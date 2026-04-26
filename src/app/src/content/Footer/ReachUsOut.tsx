import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/ui/card'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent, SVGProps } from 'react'

interface Props {
	locale: Locale
}

const GitHubBrandIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
		<title>GitHub</title>
		<path
			fillRule="evenodd"
			d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.58.11.79-.25.79-.56v-2.02c-3.2.69-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18A11 11 0 0 1 12 6.11c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.13v3.05c0 .31.21.67.79.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
			clipRule="evenodd"
		/>
	</svg>
)

const XBrandIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
		<title>X</title>
		<path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.49h2.04L6.49 3.35H4.3l13.31 17.29Z" />
	</svg>
)

const ReachUsOut: FunctionComponent<Props> = async ({ locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'Footer',
	})
	return (
		<Card id="social_links" className="">
			<CardHeader>
				<CardTitle>{t('ReachOutTitle')}</CardTitle>
			</CardHeader>
			<CardContent className="item-center flex-col">
				<div className="flex gap-2 justify-center">
					<a
						className={cn(
							buttonVariants({
								variant: 'ghost',
								className: 'h-auto',
							}),
						)}
						aria-label="RevoTale on GitHub"
						href="https://github.com/RevoTale"
						rel="noopener noreferrer"
						target="_blank"
						title={t('GithubAlt')}
					>
						<GitHubBrandIcon className="size-10" />
					</a>
					<a
						aria-label="RevoTale on X"
						className={cn(
							buttonVariants({
								variant: 'ghost',
								className: 'h-auto',
							}),
						)}
						href="https://x.com/RevoTale"
						rel="noopener noreferrer"
						target="_blank"
						title={t('TwitterAlt')}
					>
						<XBrandIcon className="size-10" />
					</a>
				</div>
				<small className="text-sm p-2 inline-block text-center">
					<a
						href="mailto:contact@revotale.com"
						className={buttonVariants({
							variant: 'link',
							size: 'sm',
						})}
					>
						contact@revotale.com
					</a>
				</small>
			</CardContent>
		</Card>
	)
}
export default ReachUsOut
