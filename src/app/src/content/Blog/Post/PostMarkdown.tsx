import NextLink from '@/i18n/LocaleLink'
import { cn } from '@shadcn/lib/utils'
import { ScrollArea, ScrollBar } from '@shadcn/ui/scroll-area'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@shadcn/ui/table'
import hljs from 'highlight.js'
import type { Node } from 'unist'
import { visit } from 'unist-util-visit'
//import 'highlight.js/styles/javascript.min.css'
import type { Locale } from 'next-intl'
import Image from 'next/image'
import type { FunctionComponent } from 'react'
import Markdown, { type Components } from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import CopyButtonWithSkeleton from './CopyButtonWithSkeleton'
import './mdwn.css'
const externallinkPrefix = 'external_link://'
const internallinkPrefix = 'micro_post://'

const plugins = [remarkGfm, rehypeSlug]
const getCodeLang = (className: string): string | null => {
	const match = /language-(\w+)/.exec(className)
	const language = match?.[1] ?? null
	return language
}
interface Props {
	markdown: string
	size?: 'small' | 'large'
	translateLinks?: Record<string, string>
	locale: Locale
	rootUrl?: string
}
const transformLink = (
	href: string,
	translateLinks: Record<string, string>
): string => {
	let trunc = href
	if (trunc.startsWith(externallinkPrefix)) {
		trunc = trunc.replace(externallinkPrefix, ``)
	} else if (trunc.startsWith(internallinkPrefix)) {
		trunc = trunc.replace(internallinkPrefix, ``)
	}

	return trunc in translateLinks ? (translateLinks[trunc] ?? trunc) : href
}

const PostMarkdown: FunctionComponent<Props> = ({
	markdown,
	translateLinks = {},
	size = 'large',
	locale,
	rootUrl,
}) => {
	const domain = rootUrl ?? ''
	const components: Partial<Components> = {
		a: ({children, href, title}) => {
			if (!href) {
				return <span aria-description={title}>{children}</span>
			}
			let transformHref = href
			const isCurrentWebsite = transformHref.startsWith(domain)
			if (isCurrentWebsite) {
				const newUrl = new URL(transformHref)
				transformHref = `${newUrl.pathname}${newUrl.search}${newUrl.hash}`
			}
			return (
				<NextLink
					title={title}
					href={transformHref}
					locale={locale}
					rel={isCurrentWebsite ? '' : 'noopener noreferrer'}
					target={'_blank'}
					className="underline font-medium text-primary underline-offset-4">
					{children}
				</NextLink>
			)
		},
		img: ({src = '', alt}) =>
			typeof src === 'string' ? (
				<span className="max-w-full h-64 block relative">
					<Image
						alt={alt ?? ''}
						className="object-contain"
						sizes="(max-width: 660px) 100vw, 672px"
						fill
						src={`https:${src}`}
					/>
				</span>
			) : null,
		pre: ({children}) => {
			// Safely extract props from the first child element if it exists
			let codeProps: Record<string, unknown> | null = null
			let code: unknown = null

			try {
				const firstChild = Array.isArray(children)
					? children[0]
					: children
				if (
					firstChild !== null &&
					firstChild !== undefined &&
					typeof firstChild === 'object' &&
					'props' in firstChild
				) {
					const {props} = firstChild
					if (
						props !== null &&
						props !== undefined &&
						typeof props === 'object'
					) {
						// Type guard to ensure props is a valid object
						const isValidProps = (
							obj: unknown
						): obj is Record<string, unknown> => {
							return obj !== null && typeof obj === 'object'
						}

						if (isValidProps(props)) {
							codeProps = props
							code = codeProps.children
						}
					}
				}
			} catch {
				// Ignore errors and fall back to defaults
			}

			const className =
				codeProps &&
				'className' in codeProps &&
				typeof codeProps.className === 'string'
					? codeProps.className
					: ''

			const language = getCodeLang(className)
			return (
				<figure className="relative ">
					<figcaption className="flex items-center rounded-t-lg justify-between px-4 py-2 bg-muted">
						<p className="text-sm">{language ?? 'plain text'}</p>

						{typeof code === 'string' ? (
							<CopyButtonWithSkeleton
								text={code}
								className={cn('z-1', 'inline-flex', 'px-0')}
								variant="ghost"
							/>
						) : null}
					</figcaption>

					<pre className="block whitespace-pre">{children}</pre>
				</figure>
			)
		},
		code: ({children, node, className}) => {
			const isCodeBlock =
				node?.position?.start.line !== node?.position?.end.line

			const language = getCodeLang(className ?? '')
			const highlightedCode =
				typeof children === 'string'
					? hljs.highlight(children, {
							language:
								language !== null &&
								hljs.listLanguages().includes(language)
									? language
									: 'plaintext',
						}).value
					: null
			if (isCodeBlock) {
				const classN = cn(
					'rounded-b-lg hljs font-mono  break-words flex flex-col flex-wrap max-w-full overflow-x-auto px-4 py-6',
					size === 'small' ? 'text-xs' : 'text-sm'
				)
				return (
					<>
						{highlightedCode === null ? (
							<code className={classN}>{children}</code>
						) : (
							<code className={classN}>
								<span
									className=""
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
				size === 'small' ? 'text-xs' : 'text-sm'
			)
			return (
				<span className="inline-flex relative max-w-full gap-1">
					{highlightedCode === null ? (
						<code className={inlineClassName}>{children}</code>
					) : (
						<code
							dangerouslySetInnerHTML={{
								__html: highlightedCode,
							}}
							className={inlineClassName}
						/>
					)}
					{typeof children === 'string' ? (
						<CopyButtonWithSkeleton
							text={children}
							disableText
							variant="outline"
							className="inline-flex z-1 mt-auto mb-auto h-7"
						/>
					) : null}
				</span>
			)
		},
		h1: ({children}) => (
			<h2
				className={cn(
					'leading-tight text-2xl font-bold mb-2 mt-14',
					size === 'small' ? 'text-xl' : 'text-2xl'
				)}>
				{children}
			</h2>
		),
		h2: ({children}) => (
			<h3
				className={cn(
					'leading-tight text-xl font-semibold mt-12 -mb-2',
					size === 'small' ? 'text-lg' : 'text-xl'
				)}>
				{children}
			</h3>
		),
		h3: ({children}) => (
			<h4 className="leading-tight text-xl font-bold mt-12 -mb-2">
				{children}
			</h4>
		),
		h4: ({children}) => (
			<h5 className="leading-tight text-xl font-bold mt-8 -mb-2">
				{children}
			</h5>
		),
		h5: ({children}) => (
			<h6 className="leading-tight text-xl font-bold mt-8 -mb-2">
				{children}
			</h6>
		),
		blockquote: ({children}) => (
			<blockquote className="border-l-4 border-accent pl-4 italic">
				{children}
			</blockquote>
		),
		ul: ({children}) => <ul className="ml-7 list-disc">{children}</ul>,
		ol: ({children}) => <ol className="ml-7 list-decimal">{children}</ol>,
		thead: ({children}) => <TableHeader>{children}</TableHeader>,
		th: ({children}) => <TableHead>{children}</TableHead>,
		tr: ({children}) => <TableRow>{children}</TableRow>,
		tbody: ({children}) => <TableBody>{children}</TableBody>,
		td: ({children}) => <TableCell>{children}</TableCell>,
		table: ({children}) => (
			<ScrollArea className="h-96 max-w-3xl rounded-md border p-4">
				<Table>{children}</Table>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		),
	}

	return (
		<div
			className={cn(
				'my-3 text-foreground leading-normal [&>*+*]:mt-5 [&>li+li]:mt-5 [&>li>p+*]:mt-5',
				size === 'small' ? 'text-sm' : 'text-lg'
			)}>
			<Markdown
				components={components}
				remarkPlugins={[
					...plugins,
					() => {
						return tree => {
							visit(
								tree,
								'link',
								(node: Node & {url: string | undefined}) => {
									if (typeof node.url === 'string') {
										// eslint-disable-next-line no-param-reassign -- Intended to modify the node
										node.url = transformLink(
											node.url,
											translateLinks
										)
									}
								}
							)
						}
					},
				]}
				skipHtml={true}>
				{markdown}
			</Markdown>
		</div>
	)
}
export default PostMarkdown
