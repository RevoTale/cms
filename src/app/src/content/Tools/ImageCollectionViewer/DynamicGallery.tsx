import {useOnce} from '@bladl/react-hooks'
import Image from 'next/image'
import {type FunctionComponent, useCallback, useRef, useState} from 'react'
import {useDebounceCallback, useResizeObserver} from 'usehooks-ts'

export interface InputImage {
	src: string
	width: number
	height: number
}

interface EqualizedImage extends InputImage {
	scaledWidth: number
	scaledHeight: number
}
const debounceTimeout = 200
const scaleToUniformDimension = (
	images: InputImage[],
	targetDimension: number
): EqualizedImage[] =>
	images.map(image => {
		// Determine the longest side of the image
		const longestSide = Math.max(image.width, image.height)

		// Calculate the scaling factor
		const scalingFactor = targetDimension / longestSide

		// Apply the scaling factor to both dimensions
		const scaledWidth = image.width * scalingFactor
		const scaledHeight = image.height * scalingFactor

		// Return the scaled dimensions
		return {
			...image,
			scaledWidth: Math.round(scaledWidth),
			scaledHeight: Math.round(scaledHeight),
		}
	})

interface ImageData extends InputImage {
	style: {
		height: number
		width: number
		top: number
		left: number
	}
}
const multiplier = 4
interface ContainerProps {
	images: InputImage[]
}

const ImageContainer: FunctionComponent<ContainerProps> = ({images}) => {
	const [result, setResult] = useState<ImageData[]>([])
	const containerRef = useRef<HTMLDivElement>(null)
	const performImages = useCallback(() => {
		if (containerRef.current) {
			const {clientWidth, clientHeight} = containerRef.current

			const result: ImageData[] = []
			const scaled = scaleToUniformDimension(
				images,
				Math.max(clientHeight, clientWidth) / multiplier
			).sort(
				(item1, item2) =>
					item2.scaledHeight / item2.scaledWidth -
					(item1.scaledHeight - item1.scaledWidth)
			)
			for (const item of scaled) {
				result.push({
					...item,
					style: {
						width: item.scaledWidth,
						height: item.scaledHeight,
						left: 0,
						top: 0,
					},
				})
			}
			setResult(result)
		}
	}, [images])
	useOnce(() => {
		performImages()
	})
	const onResize = useDebounceCallback(performImages, debounceTimeout)

	useResizeObserver<HTMLDivElement>({
		// @ts-expect-error nextjs migration types issue
		ref: containerRef,
		onResize,
	})
	return (
		<div
			className="h-screen w-full relative text-center"
			ref={containerRef}>
			{result.map(({width, height, src, style}, index) => (
				<div
					className="relative inline-block box-border"
					key={src}
					style={style}>
					<Image
						alt={`image-${index}`}
						className="w-full object-contain"
						height={height}
						key={index}
						src={src}
						unoptimized
						width={width}
					/>
				</div>
			))}
		</div>
	)
}

export default ImageContainer
