'use client'
import { usePromiseHandler } from '@bladl/react-hooks'
import BadError from '@revotale/ui/BadError'
import FilesInput from '@revotale/ui/FilesInput'
import { cn } from '@shadcn/lib/utils'
import { Alert, AlertTitle } from '@shadcn/ui/alert'
import { Button, buttonVariants } from '@shadcn/ui/button'
import { Card, CardContent, CardHeader } from '@shadcn/ui/card'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@shadcn/ui/dialog'
import { Input } from '@shadcn/ui/input'
import { Label } from '@shadcn/ui/label'
import { Progress } from '@shadcn/ui/progress'
import { ScrollArea, ScrollBar } from '@shadcn/ui/scroll-area'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@shadcn/ui/table'
import dayjs from 'dayjs'
import { type FunctionComponent, type ReactNode, useMemo, useState } from 'react'

import { checkBrowserSupport, processVideo } from '../../../utils/videoSpeedProcessor'

const firstFile = 0
const defaultMultiplier = 0.5
const maxPercent = 100
const BYTES_PER_KB = 1024
const BYTES_PER_MB = BYTES_PER_KB * BYTES_PER_KB
const FILE_SIZE_DECIMAL_PLACES = 2

// Helper functions for file information
const getFileNameWithoutExtension = (fileName: string): string => {
	const lastDotIndex = fileName.lastIndexOf('.')
	return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName
}

const getFileExtension = (fileName: string): string => {
	const lastDotIndex = fileName.lastIndexOf('.')
	return lastDotIndex > 0 ? fileName.substring(lastDotIndex) : ''
}

// Speed preset multipliers
const SPEED_010X = 0.1
const SPEED_025X = 0.25
const SPEED_05X = 0.5
const SPEED_15X = 1.5
const SPEED_2X = 2.0
const SPEED_4X = 4.0

const speedPresets = [SPEED_010X, SPEED_025X, SPEED_05X, SPEED_15X, SPEED_2X, SPEED_4X] as const

const DurationResize: FunctionComponent<{
	notice: ReactNode
	loadingText: string
	labelText: string
	placeholder: string
	downloadText: string
	closeText: string
	transform: string
	logTitleText: string
	viewLogsText: string
	notSupportedText: string
	orChoosePresetText: string
	videoLabel?: string
	selectedVideoText?: string
}> = ({
	notice,
	loadingText,
	labelText,
	placeholder,
	transform,
	downloadText,
	closeText,
	logTitleText,
	viewLogsText,
	notSupportedText,
	orChoosePresetText,
	videoLabel = 'Video',
	selectedVideoText = 'Selected Video:',
}) => {
	const videoHandler = usePromiseHandler<string>()
	const [input, setInput] = useState<File | null>(null)
	const [multiplier, setMultiplier] = useState<string>(defaultMultiplier.toString())
	const file = videoHandler.result
	const [logOutput, setLogOutput] = useState<Array<{ time: Date; text: string; id: string }>>([])
	const [progress, setProgress] = useState(0)

	const supportInfo = useMemo<{
		isSupported: boolean
		missingFeatures: string[]
	}>(() => {
		return checkBrowserSupport()
	}, [])
	// Check browser support on component mount

	const addLogEntry = (text: string): void => {
		setLogOutput(prev => [
			{
				text,
				time: new Date(),
				id: crypto.randomUUID(),
			},
			...prev,
		])
	}

	const multiplierNumber = Number(multiplier)
	const isMultiplierInvalid = multiplierNumber === 0 || Number.isNaN(multiplierNumber)
	const handleProcessVideo = (): void => {
		if (input === null) {
			return
		}
		if (supportInfo.isSupported) {
			if (isMultiplierInvalid) {
				return
			}

			setLogOutput([]) // Clear previous logs
			videoHandler.setPromise(
				processVideo({
					file: input,
					multiplier: multiplierNumber,
					logger: addLogEntry,
					onProgress: setProgress,
				}),
			)
		}
	}

	return (
		<div className="flex flex-col gap-2 max-w-1xl justify-center items-center p-4">
			<div className="text-muted-foreground text-sm">{notice}</div>

			{supportInfo.isSupported ? (
				<FilesInput
					disabled={videoHandler.loading}
					id="video"
					label={videoLabel}
					setFiles={files => {
						const file = files[firstFile] ?? null
						if (file !== null) {
							setInput(file)
						}
					}}
				/>
			) : (
				<Alert className="w-fit">
					<AlertTitle>
						{notSupportedText}
						{supportInfo.missingFeatures.length > 0 && (
							<div className="text-sm mt-2">Missing: {supportInfo.missingFeatures.join(', ')}</div>
						)}
					</AlertTitle>
				</Alert>
			)}

			{input && (
				<div className="w-full max-w-sm p-3 bg-muted/50 rounded-md border">
					<div className="text-sm font-medium mb-1">{selectedVideoText}</div>
					<div className="text-sm text-muted-foreground">
						<div className="truncate">
							<span className="font-mono">{getFileNameWithoutExtension(input.name)}</span>
							<span className="text-primary font-semibold">{getFileExtension(input.name)}</span>
						</div>
						<div className="text-xs mt-1">Size: {(input.size / BYTES_PER_MB).toFixed(FILE_SIZE_DECIMAL_PLACES)} MB</div>
					</div>
				</div>
			)}

			{videoHandler.error === null ? null : <BadError title={videoHandler.error.toString()} />}

			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label>{labelText}</Label>
				<Input
					value={multiplier}
					disabled={videoHandler.loading}
					onChange={e => {
						setMultiplier(e.target.value)
					}}
					placeholder={placeholder}
					type="number"
					step="0.01"
					min="0.01"
					max="100"
				/>
			</div>

			<div className="text-sm text-muted-foreground text-center">{orChoosePresetText}</div>

			{/* Speed Preset Buttons */}
			<div className="flex flex-wrap gap-2 justify-center">
				{speedPresets.map(preset => (
					<Button
						key={preset}
						variant={multiplierNumber === preset ? 'default' : 'outline'}
						size="sm"
						disabled={videoHandler.loading}
						onClick={() => {
							setMultiplier(preset.toString())
						}}
						className="min-w-[3rem]"
					>
						{preset}x
					</Button>
				))}
			</div>

			<Button
				className="w-min"
				disabled={!input || !supportInfo.isSupported || videoHandler.loading}
				onClick={handleProcessVideo}
				type="button"
			>
				{transform}
			</Button>

			{videoHandler.loading ? (
				<div className="w-full max-w-sm">
					<Progress max={maxPercent} value={progress * maxPercent} />
					<div className="text-sm text-muted-foreground mt-1">{Math.round(progress * maxPercent)}%</div>
				</div>
			) : null}

			{file === null ? null : (
				<Card>
					<CardHeader className="justify-center flex flex-col items-center">
						<a
							download={
								input ? `${getFileNameWithoutExtension(input.name)}_x${multiplier}.webm` : 'processed_video.webm'
							}
							href={file}
							className={cn(
								buttonVariants({
									variant: 'default',
									size: 'lg',
									className: 'w-min',
								}),
							)}
						>
							{downloadText}
						</a>
					</CardHeader>
					<CardContent>
						<video className="w-full max-w-3xl" controls>
							<source src={file} type="video/webm" />
							{notSupportedText}
						</video>
					</CardContent>
				</Card>
			)}

			{logOutput.length > 0 ? (
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">{viewLogsText}</Button>
					</DialogTrigger>
					<DialogContent className="w-full">
						<DialogHeader>
							<DialogTitle>{logTitleText}</DialogTitle>
						</DialogHeader>
						<ScrollArea className="max-h-96 h-full rounded-md border">
							<Table>
								<TableHeader>
									<TableRow>
										<TableCell>Info</TableCell>
										<TableCell>Time</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody>
									{logOutput.map(item => (
										<TableRow key={item.id}>
											<TableCell>{item.text}</TableCell>
											<TableCell>{dayjs(item.time).format('HH:mm:ss')}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							<ScrollBar orientation="horizontal" />
						</ScrollArea>
						<DialogFooter>
							<DialogClose asChild>
								<Button type="button">{closeText}</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			) : null}
		</div>
	)
}

export default DurationResize
