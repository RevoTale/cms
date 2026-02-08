'use client'
import BadError from '@revotale/ui/BadError'
import { Button } from '@shadcn/ui/button'
import clipboard from 'clipboardy'
import { type FunctionComponent, useState } from 'react'
export interface PasteButtonTextProps {
	paste: string
	loading: string
	error: string
}
interface Props {
	onPaste: (text: string) => void
	text: PasteButtonTextProps
}
const PasteButton: FunctionComponent<Props> = ({
	onPaste,
	text: { paste: pasteText, loading: loadingText, error: errorText },
}) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	return (
		<div className="flex flex-col flex-wrap justify-center items-center">
			<Button
				className="text-base"
				onClick={() => {
					setLoading(true)
					setError(null)
					clipboard
						.read()
						.then(text => {
							onPaste(text)
							setLoading(false)
						})
						.catch((e: unknown) => {
							setError(e instanceof Error ? e.message : String(e))
							setLoading(false)
						})
				}}
				type="button"
				variant="outline"
			>
				{loading ? loadingText : pasteText}
			</Button>
			{error === null ? null : (
				<BadError className="my-2" title={errorText}>
					{error}
				</BadError>
			)}
		</div>
	)
}
export default PasteButton
