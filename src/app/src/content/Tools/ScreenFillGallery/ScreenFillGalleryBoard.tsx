'use client'

import FilesInput from '@revotale/ui/FilesInput'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shadcn/ui/card'
import { Label } from '@shadcn/ui/label'
import { Spinner } from '@shadcn/ui/spinner'
import { Switch } from '@shadcn/ui/switch'
import { useTranslations } from 'next-intl'
import {
	type FunctionComponent,
	type RefObject,
	useActionState,
	useEffect,
	useRef,
	useState,
	useTransition,
} from 'react'
import ScreenFillRenderer, { type ImageData } from './ScreenFillRenderer'

interface ScreenFillGalleryTranslations {
	title: string
	description: string
	imageLabel: string
	fullscreenMode: string
}

interface Props {
	translations: ScreenFillGalleryTranslations
}

const imageSize = async (url: string): Promise<{ width: number; height: number }> => {
	const img = document.createElement('img')

	// eslint-disable-next-line promise/avoid-new -- required for image loading
	const promise = new Promise<{ width: number; height: number }>((resolve, reject) => {
		img.onload = (): void => {
			const width = img.naturalWidth
			const height = img.naturalHeight
			resolve({ width, height })
		}
		img.onerror = reject
	})

	img.src = url
	return await promise
}

const getImages = async (cacheRef: RefObject<Map<File, string>>, files: File[]): Promise<ImageData[]> => {
	const getFileSrc = (file: File): string => {
		if (cacheRef.current.has(file)) {
			const content = cacheRef.current.get(file) ?? null
			if (content !== null) {
				return content
			}
		}
		const content = URL.createObjectURL(file)
		cacheRef.current.set(file, content)
		return content
	}

	return await Promise.all(
		files
			.map(file => getFileSrc(file))
			.map(async file => {
				const size = await imageSize(file)
				return {
					src: file,
					...size,
				}
			}),
	)
}
type State =
	| {
			error: Error
			result: null
			imagesLoadedText: string
	  }
	| {
			result: ImageData[]
			error: null
			imagesLoadedText: string
	  }
	| {
			error: null
			result: null
			imagesLoadedText: string
	  }
const ScreenFillGalleryBoard: FunctionComponent<Props> = ({ translations }) => {
	const t = useTranslations('ScreenFillGallery')
	const [fullscreen, setFullscreen] = useState(false)
	const [showControls, setShowControls] = useState(true)
	const cacheRef = useRef(new Map<File, string>())
	const [isPending, startTransition] = useTransition()
	const [{ error, result, imagesLoadedText }, doAction] = useActionState<State, File[]>(
		async (_: State, files: File[]) => {
			try {
				return {
					result: await getImages(cacheRef, files),
					error: null,
					imagesLoadedText: t('imagesLoaded', {
						count: files.length.toString(),
					}),
				}
			} catch (error) {
				return {
					result: null,
					error:
						typeof error === 'string' ? new Error(error) : error instanceof Error ? error : new Error('Unknown error'),
					imagesLoadedText: '',
				}
			}
		},
		{
			error: null,
			result: null,
			imagesLoadedText: '',
		},
	)

	const toggleFullscreen = (): void => {
		if (fullscreen) {
			void document.exitFullscreen()
			setFullscreen(false)
			setShowControls(true)
			return
		}
		void document.documentElement.requestFullscreen()
		setFullscreen(true)
		setShowControls(false)
	}

	// Listen for fullscreen changes
	useEffect(() => {
		const handleFullscreenChange = (): void => {
			if (document.fullscreenElement) {
				return
			}
			setFullscreen(false)
			setShowControls(true)
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)
		return (): void => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange)
		}
	}, [])

	return (
		<div className="space-y-4">
			{showControls && (
				<Card>
					<CardHeader>
						<CardTitle>{translations.title}</CardTitle>
						<CardDescription>{translations.description}</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							className="flex flex-col items-center gap-4"
							onSubmit={e => {
								e.preventDefault()
							}}
						>
							<FilesInput
								id="images"
								label={translations.imageLabel}
								setFiles={files => {
									startTransition(() => {
										doAction(files)
									})
								}}
							/>
							<div className="flex items-center space-x-2">
								<Switch
									id="fullscreen-mode"
									checked={fullscreen}
									onCheckedChange={toggleFullscreen}
									disabled={!result || result.length === 0}
								/>
								<Label htmlFor="fullscreen-mode">{translations.fullscreenMode}</Label>
								{isPending ? <Spinner /> : null}
							</div>
							{imagesLoadedText !== '' && <div className="text-sm text-muted-foreground">{imagesLoadedText}</div>}
						</form>
						{error !== null && (
							<div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-md">{error.toString()}</div>
						)}
					</CardContent>
				</Card>
			)}

			{result && result.length > 0 && (
				<ScreenFillRenderer
					images={result}
					fullscreen={fullscreen}
					showControls={showControls}
					onToggleControls={() => {
						setShowControls(!showControls)
					}}
				/>
			)}
		</div>
	)
}

export default ScreenFillGalleryBoard
