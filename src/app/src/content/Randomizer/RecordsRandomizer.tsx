'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@shadcn/ui/textarea'
import { useSearchParams } from 'next/navigation'
import { type FunctionComponent, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import PasteButton, { type PasteButtonTextProps } from '../Tools/UrlTool/PasteButton'
import { defaultDuration, RandomizerFormSettings } from './RandomizerSettings'
import RandomizerWheel, { type RecordValue } from './RandomizerWheel'

interface Props {
	placeholder: string
	pasteButton: PasteButtonTextProps
}
const msInSec = 1000
const minimumRecordsToShowWheel = 2
const minimumDuration = 1
const msToSecDiv = 1000

const defaultWheelDur = defaultDuration / msToSecDiv
const RecordsRandomizer: FunctionComponent<Props> = ({ placeholder, pasteButton }) => {
	const [value, setValue] = useState('')
	const searchParams = useSearchParams()
	const defaults = RandomizerFormSettings.parse(Object.fromEntries(searchParams.entries()))
	const form = useForm({
		resolver: zodResolver(RandomizerFormSettings),
		defaultValues: defaults,
	})
	const { disableWinnerDialog, wheelDuration } = form.getValues()
	const values = useMemo<RecordValue[]>(
		() =>
			value
				.trim()
				.split('\n')
				.filter(v => !!v)
				.map((value, index) => ({
					index,
					value,
				})),
		[value],
	)
	return (
		<div className="flex flex-col gap-3 w-full items-center">
			<PasteButton onPaste={setValue} text={pasteButton} />
			<Textarea
				className="w-full max-w-64"
				onChange={e => {
					setValue(e.target.value)
				}}
				placeholder={placeholder}
				rows={9}
				value={value}
			/>
			{values.length >= minimumRecordsToShowWheel ? (
				<RandomizerWheel
					disableWinnerDialog={disableWinnerDialog ?? false}
					values={values}
					wheelDuration={
						//Place it here due to CI typescript strange error with zod default vlaues
						(wheelDuration ?? defaultWheelDur) < minimumDuration
							? (wheelDuration ?? defaultWheelDur) * msInSec
							: defaultDuration
					}
				/>
			) : null}
		</div>
	)
}
export default RecordsRandomizer
