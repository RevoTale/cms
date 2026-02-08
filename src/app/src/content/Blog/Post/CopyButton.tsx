'use client'
import { cn } from '@shadcn/lib/utils'
import { Button, type buttonVariants } from '@shadcn/ui/button'
import type { VariantProps } from 'class-variance-authority'
import clipboard from 'clipboardy'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { type FunctionComponent, useEffect, useState } from 'react'

interface Props {
	text: string
	className?: string
	disableText?: boolean
	copyText: string
	copiedText: string
}
const copyTimeout = 11000
const CopyButton: FunctionComponent<Props & VariantProps<typeof buttonVariants>> = ({
	text,
	className,
	variant,
	copiedText,
	copyText,
	disableText = false,
}) => {
	const [copied, setCopied] = useState(false)
	useEffect(() => {
		if (copied) {
			const timeout = setTimeout(() => {
				setCopied(false)
			}, copyTimeout)
			return (): void => {
				clearTimeout(timeout)
			}
		}
		return undefined
	}, [copied])
	return (
		<Button
			aria-label={copyText}
			className={cn(
				'items-center justify-center cursor-pointer has-[>svg]:px-0',
				disableText ? 'has-[>svg]:px-2' : null,
				className,
			)}
			onClick={() => {
				clipboard
					.write(text)
					.then(() => {
						setCopied(true)
					})
					.catch((err: unknown) => {
						// eslint-disable-next-line no-alert -- no time to fix
						alert(`Copying failed: ${err instanceof Error ? err.message : 'Unknown error'}`)
					})
			}}
			size="sm"
			type="button"
			variant={variant}
		>
			{copied ? <CheckIcon /> : <CopyIcon />}
			{disableText ? null : <span className="text-xs">{copied ? copiedText : copyText}</span>}
		</Button>
	)
}
export default CopyButton
