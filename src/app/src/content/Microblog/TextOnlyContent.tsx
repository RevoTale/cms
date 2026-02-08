import { cn } from '@shadcn/lib/utils'
//import 'highlight.js/styles/javascript.min.css'
import { buttonVariants } from '@shadcn/ui/button'
import hljs from 'highlight.js'
import { Grid3x3Icon, ImageIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import Markdown, { type Components } from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import NextLink from '@/i18n/LocaleLink'
import getDomain from '../../config/getDomain'
import './../Blog/Post/mdwn.css'
const plugins = [remarkGfm, rehypeSlug]
const getCodeLang = (className: string): string | null => {
	const match = /language-(\w+)/.exec(className)
	const language = match?.[1] ?? null
	return language
}
interface Props {
	markdown: string
	locale: Locale
}
const TextOnlyContent: FunctionComponent<Props> = ({ markdown, locale }) => {
	const domain = getDomain()
	const components: Partial<Components> = {
		a: ({ children, href, ...attributes }) => {
			const link = href ?? '#'
			const isCurrentWebsite = link.startsWith(domain)
			return (
				<NextLink
					locale={locale}
					href={link}
					rel={isCurrentWebsite ? '' : 'noopener noreferrer'}
					target={isCurrentWebsite ? '_self' : '_blank'}
					className="underline font-medium text-primary underline-offset-4"
					{...attributes}
				>
					{children}
				</NextLink>
			)
		},
		img: () => {
			return (
				<NextLink locale={locale} className={buttonVariants({ variant: 'outline' })} href="/blog">
					<ImageIcon />
					Open note to view the image
				</NextLink>
			)
		},
		pre: ({ children }) => {
			// Safely extract props from the first child element if it exists
			let codeProps: Record<string, unknown> | null = null

			try {
				const firstChild = Array.isArray(children) ? children[0] : children
				if (
					firstChild !== null &&
					firstChild !== undefined &&
					typeof firstChild === 'object' &&
					'props' in firstChild
				) {
					const { props } = firstChild
					if (props !== null && props !== undefined && typeof props === 'object') {
						// Type guard to ensure props is a valid object
						const isValidProps = (obj: unknown): obj is Record<string, unknown> => {
							return obj !== null && typeof obj === 'object'
						}

						if (isValidProps(props)) {
							codeProps = props
						}
					}
				}
			} catch {
				// Ignore errors and fall back to defaults
			}

			const className =
				codeProps && 'className' in codeProps && typeof codeProps.className === 'string' ? codeProps.className : ''

			const language = getCodeLang(className)
			return (
				<figure className="relative ">
					<figcaption className="flex items-center rounded-t-lg justify-between px-4 py-2 bg-muted text-sm">
						<p className="text-sm">{language ?? 'plain text'}</p>
					</figcaption>

					<pre className="block whitespace-pre">{children}</pre>
				</figure>
			)
		},
		code: ({ children, node, className }) => {
			const isCodeBlock = node?.position?.start.line !== node?.position?.end.line

			const language = getCodeLang(className ?? '')
			const highlightedCode =
				typeof children === 'string'
					? hljs.highlight(children, {
							language: language !== null && hljs.listLanguages().includes(language) ? language : 'plaintext',
						}).value
					: null
			if (isCodeBlock) {
				const classN = cn(
					'rounded-b-lg hljs font-mono  break-words flex flex-col flex-wrap max-w-full overflow-x-auto px-4 py-6',
					'text-sm',
				)
				return (
					<>
						{highlightedCode === null ? (
							<code className={classN}>{children}</code>
						) : (
							<code className={classN}>
								<span
									className=""
									/* biome-ignore lint/security/noDangerouslySetInnerHtml: highlight.js output is trusted escaped markup */
									dangerouslySetInnerHTML={{
										__html: highlightedCode,
									}}
								/>
							</code>
						)}
					</>
				)
			}
			const inlineClassName = cn(
				'py-0 px-2 hljs inline rounded whitespace-break-spaces wrap-anywhere px-2 py-1',
				'text-sm',
			)
			return (
				<span className="inline-flex relative max-w-full gap-1">
					{highlightedCode === null ? (
						<code className={inlineClassName}>{children}</code>
					) : (
						<code
							/* biome-ignore lint/security/noDangerouslySetInnerHtml: highlight.js output is trusted escaped markup */
							dangerouslySetInnerHTML={{
								__html: highlightedCode,
							}}
							className={inlineClassName}
						/>
					)}
				</span>
			)
		},
		h1: ({ children }) => <h2 className={cn('leading-tight text-lg font-bold mt-1', 'text-lg')}>{children}</h2>,
		h2: ({ children }) => <h3 className={cn('leading-tight text-base font-semibold mt-1', 'text-base')}>{children}</h3>,
		h3: ({ children }) => <h4 className="leading-tight text-base font-bold mt-1 ">{children}</h4>,
		h4: ({ children }) => <h5 className="leading-tight text-base font-bold mt-2 ">{children}</h5>,
		h5: ({ children }) => <h6 className="leading-tight text-base font-bold mt-2 ">{children}</h6>,
		blockquote: ({ children }) => <blockquote className="border-l-4 border-accent pl-4 italic">{children}</blockquote>,
		ul: ({ children }) => <ul className="ml-5 list-disc">{children}</ul>,
		ol: ({ children }) => <ol className="ml-5 list-decimal">{children}</ol>,

		table: () => {
			return (
				<span className="flex flex-row gap-2 max-w-full flex-wrap">
					<NextLink
						locale={locale}
						className={buttonVariants({
							variant: 'outline',
							size: 'sm',
							className: 'flex-wrap',
						})}
						href="/blog"
					>
						<Grid3x3Icon />
					</NextLink>

					<NextLink
						locale={locale}
						className={buttonVariants({
							variant: 'outline',
							size: 'sm',
							className: 'flex-wrap',
						})}
						href="/blog"
					>
						Open note to view the table
					</NextLink>
				</span>
			)
		},
	}
	return (
		<div className={cn('my-3 text-foreground leading-normal [&>*+*]:mt-3 [&>li+li]:mt-3 [&>li>p+*]:mt-3', 'text-sm')}>
			<Markdown components={components} remarkPlugins={plugins} skipHtml={true}>
				{markdown}
			</Markdown>
		</div>
	)
}
export default TextOnlyContent
