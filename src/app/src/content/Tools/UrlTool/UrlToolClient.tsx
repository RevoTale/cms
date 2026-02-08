'use client'
import {Alert, AlertTitle} from '@shadcn/ui/alert'
import {Textarea} from '@shadcn/ui/textarea'
import {AlertTriangle} from 'lucide-react'
import type {Locale} from 'next-intl'
import Form from 'next/form'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {type FunctionComponent, useCallback, useEffect, useState} from 'react'
import {URLStringDecoder, URLStringEncoder} from '../../../linking/map/tools'
import ActionButtonLink from './ActionButtonLink'
import CopyButton, {type CopyButtonTextProps} from './CopyButton'
import PasteButton, {type PasteButtonTextProps} from './PasteButton'
export type Tool = 'encode' | 'decode'
interface Props {
	tool: Tool | null
	inputPlaceholder: string
	outputPlaceholder: string
	encodeStr: string
	decodeStr: string
	sameStr: string
	inputKey: string
	pasteButton: PasteButtonTextProps
	locale: Locale
	copyButtonText: CopyButtonTextProps
}
const syncTimeout = 200
const UrlTool: FunctionComponent<Props> = ({
	tool,
	inputPlaceholder,
	outputPlaceholder,
	encodeStr,
	decodeStr,
	sameStr,
	inputKey,
	copyButtonText,
	pasteButton,
	locale,
}) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const urlInput = searchParams.get(inputKey) ?? ''
	const [text, setText] = useState(urlInput)
	const handleDecode = (): string => {
		try {
			if (tool === 'encode') {
				return encodeURI(text)
			} else if (tool === 'decode') {
				return decodeURI(text)
			}
		} catch (e: unknown) {
			return e instanceof Error ? e.toString() : 'Unknown error'
		}
		return text
	}
	const result = handleDecode()
	const pathname = usePathname()
	const syncWithURl = useCallback(() => {
		const params = new URLSearchParams(searchParams)
		params.set(inputKey, text)
		router.replace(`${pathname}?${params.toString()}`, {
			scroll: false,
		})
	}, [inputKey, pathname, router, searchParams, text])
	useEffect(() => {
		const timeout = setTimeout(syncWithURl, syncTimeout)
		return (): void => {
			clearTimeout(timeout)
		}
	}, [syncWithURl])

	return (
		<Form
			action={pathname}
			className="flex flex-col gap-4 max-w-(--breakpoint-sm) w-full">
			<PasteButton onPaste={setText} text={pasteButton} />
			<Textarea
				autoFocus
				name={inputKey}
				onBlur={syncWithURl}
				onChange={e => {
					setText(e.target.value)
				}}
				placeholder={inputPlaceholder}
				rows={7}
				value={text}
			/>
			<div className="flex justify-center flex-row gap-5">
				<ActionButtonLink
					locale={locale}
					active={tool === 'encode'}
					href={`${URLStringEncoder.href}?${inputKey}=${encodeURIComponent(text)}`}>
					{encodeStr}
				</ActionButtonLink>
				<ActionButtonLink
					locale={locale}
					active={tool === 'decode'}
					href={`${URLStringDecoder.href}?${inputKey}=${encodeURIComponent(text)}`}>
					{decodeStr}
				</ActionButtonLink>
			</div>
			{result && text && result === text ? (
				<Alert className="flex">
					<div className="flex justify-center m-1 mr-2">
						<AlertTriangle className="h-4 w-4" />
					</div>
					<AlertTitle className="text-lg">{sameStr}</AlertTitle>
				</Alert>
			) : null}
			<Textarea
				placeholder={outputPlaceholder}
				readOnly
				rows={7}
				value={result}
			/>
			<CopyButton text={result} t={copyButtonText} />
		</Form>
	)
}
export default UrlTool
