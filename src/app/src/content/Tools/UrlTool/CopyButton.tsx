'use client'
import {useOnChange} from '@bladl/react-hooks'
import BadError from '@revotale/ui/BadError'
import {cn} from '@shadcn/lib/utils'
import {Button} from '@shadcn/ui/button'
import clipboard from 'clipboardy'
import {type FunctionComponent, useState} from 'react'
export interface CopyButtonTextProps {
	done: string
	error: string
	label: string
}
interface Props {
	text: string
	className?: string
	disabled?: boolean
	t: CopyButtonTextProps
}
const CopyButton: FunctionComponent<Props> = ({
	text,
	disabled,
	className,
	t,
}: Props) => {
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState<string | null>(null)
	useOnChange(() => {
		setSuccess(false)
	}, text)
	return (
		<div
			className={cn(
				'flex justify-center flex-col items-center',
				className
			)}>
			<Button
				className="text-base"
				disabled={disabled}
				onClick={() => {
					setSuccess(false)
					setError(null)
					clipboard
						.write(text)
						.then(() => {
							setSuccess(true)
						})
						.catch((e: unknown) => {
							setError(e instanceof Error ? e.message : String(e))
						})
				}}
				size="lg">
				{success ? t.done : t.label}
			</Button>
			{error === null ? null : (
				<BadError title={t.error}>{error}</BadError>
			)}
		</div>
	)
}
export default CopyButton
