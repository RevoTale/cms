'use client'

import { Button } from '@shadcn/ui/button'
import Image from 'next/image'
import { type FunctionComponent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts'

export interface ImageData {
	src: string
	width: number
	height: number
	id?: string
}

interface PositionedImage extends ImageData {
	x: number
	y: number
	displayWidth: number
	displayHeight: number
	visible: boolean
}

interface ScreenFillRendererProps {
	images: ImageData[]
	fullscreen: boolean
	showControls: boolean
	onToggleControls: () => void
}

const debounceTimeout = 100
const PRIORITY_IMAGE_COUNT = 4
const FULLSCREEN_RECALC_DELAY = 100
const EXTRA_ROWS_TO_TEST = 2
const UTILIZATION_PENALTY = 1000
const HALF_DIVISOR = 2

// Rectangle-filling algorithm that fits ALL images within the target bounds
const arrangeImagesOptimally = (
	images: ImageData[],
	containerWidth: number,
	containerHeight: number,
): PositionedImage[] => {
	if (images.length === 0) return []

	// Try different image orderings to find the best layout
	const sortingStrategies = [
		// Original order
		[...images],
		// Sort by aspect ratio (wide to narrow)
		[...images].sort((a, b) => b.width / b.height - a.width / a.height),
		// Sort by aspect ratio (narrow to wide)
		[...images].sort((a, b) => a.width / a.height - b.width / b.height),
		// Sort by area (large to small)
		[...images].sort((a, b) => b.width * b.height - a.width * a.height),
		// Sort by area (small to large)
		[...images].sort((a, b) => a.width * a.height - b.width * b.height),
		// Mixed strategy: alternate wide and narrow
		createAlternatingAspectRatioOrder(images),
	]

	let bestLayout: PositionedImage[] = []
	let bestWaste = Infinity

	// Test each sorting strategy
	for (const sortedImages of sortingStrategies) {
		const layout = findBestLayoutForImages(sortedImages, containerWidth, containerHeight)
		const waste = calculateWaste(layout, containerWidth, containerHeight)

		if (waste < bestWaste) {
			bestWaste = waste
			bestLayout = layout
		}
	}

	return bestLayout
}

// Create an alternating order of wide and narrow images for better packing
const createAlternatingAspectRatioOrder = (images: ImageData[]): ImageData[] => {
	const sortedByAspectRatio = [...images].sort((a, b) => b.width / b.height - a.width / a.height)

	const wideImages = sortedByAspectRatio.slice(0, Math.ceil(images.length / HALF_DIVISOR))
	const narrowImages = sortedByAspectRatio.slice(Math.ceil(images.length / HALF_DIVISOR))

	const result: ImageData[] = []
	const maxLength = Math.max(wideImages.length, narrowImages.length)

	for (let i = 0; i < maxLength; i++) {
		const wideImage = wideImages[i]
		const narrowImage = narrowImages[i]
		if (wideImage) result.push(wideImage)
		if (narrowImage) result.push(narrowImage)
	}

	return result
}

// Find the best row-based layout for a given image order
const findBestLayoutForImages = (
	images: ImageData[],
	containerWidth: number,
	containerHeight: number,
): PositionedImage[] => {
	// Calculate total aspect ratio sum to determine optimal layout
	const totalAspectRatio = images.reduce((sum, img) => sum + img.width / img.height, 0)

	// Calculate ideal number of rows based on container aspect ratio and total aspect ratios
	const containerAspectRatio = containerWidth / containerHeight
	const averageAspectRatio = totalAspectRatio / images.length
	const roughRows = Math.ceil(Math.sqrt(images.length / (containerAspectRatio / averageAspectRatio)))
	const maxRows = Math.max(1, Math.min(images.length, roughRows))

	// Try different numbers of rows to find the best fit
	let bestLayout: PositionedImage[] = []
	let bestWaste = Infinity

	for (let numRows = 1; numRows <= maxRows + EXTRA_ROWS_TO_TEST; numRows++) {
		const layout = createLayoutWithRows(images, containerWidth, containerHeight, numRows)
		const waste = calculateWaste(layout, containerWidth, containerHeight)

		if (waste < bestWaste) {
			bestWaste = waste
			bestLayout = layout
		}
	}

	return bestLayout
}

// Create a layout with a specific number of rows where images have similar areas
const createLayoutWithRows = (
	images: ImageData[],
	containerWidth: number,
	containerHeight: number,
	numRows: number,
): PositionedImage[] => {
	const result: PositionedImage[] = []
	const imagesCopy = [...images]

	// Calculate average target area per image (as a guideline, not strict requirement)
	const totalAvailableArea = containerWidth * containerHeight
	const averageAreaPerImage = totalAvailableArea / images.length

	// Create a flexible scaling approach that aims for similar areas
	// but respects aspect ratios and avoids extreme scaling
	const scaledImages = imagesCopy.map(img => {
		const originalAspectRatio = img.width / img.height
		const originalArea = img.width * img.height

		// Calculate a reasonable scale factor towards the average area
		// But limit the scaling to prevent extreme size differences
		const idealScaleFactor = Math.sqrt(averageAreaPerImage / originalArea)

		// Limit scaling to between 0.5x and 2x to avoid extreme differences
		const minScale = 0.5
		const maxScale = 2.0
		const constrainedScaleFactor = Math.max(minScale, Math.min(maxScale, idealScaleFactor))

		const scaledWidth = img.width * constrainedScaleFactor
		const scaledHeight = img.height * constrainedScaleFactor

		return {
			...img,
			scaledWidth,
			scaledHeight,
			aspectRatio: originalAspectRatio,
		}
	})

	// Distribute images across rows as evenly as possible
	const baseImagesPerRow = Math.floor(images.length / numRows)
	const extraImages = images.length % numRows

	const rows: Array<typeof scaledImages> = []
	let imageIndex = 0

	for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
		const imagesInThisRow = baseImagesPerRow + (rowIndex < extraImages ? 1 : 0)
		rows.push(scaledImages.slice(imageIndex, imageIndex + imagesInThisRow))
		imageIndex += imagesInThisRow
	}

	// Calculate layout with similar-area images
	let currentY = 0

	rows.forEach(rowImages => {
		if (rowImages.length === 0) return

		// Calculate total width needed for this row with scaled images
		const totalRowWidth = rowImages.reduce((sum, img) => sum + img.scaledWidth, 0)

		// Calculate scale factor to fit the row within container width
		const rowWidthScaleFactor = containerWidth / totalRowWidth

		// Apply scaling to fit width, which will affect both width and height equally
		const [firstImage] = rowImages
		const actualRowHeight = firstImage ? firstImage.scaledHeight * rowWidthScaleFactor : 0

		// Position images in this row
		let currentX = 0
		rowImages.forEach(img => {
			const actualWidth = img.scaledWidth * rowWidthScaleFactor

			result.push({
				src: img.src,
				width: img.width,
				height: img.height,
				id: img.id,
				x: currentX,
				y: currentY,
				displayWidth: actualWidth,
				displayHeight: actualRowHeight,
				visible: true,
			})

			currentX += actualWidth
		})

		currentY += actualRowHeight
	})

	// Apply final scaling to fit exactly within container bounds
	const actualTotalHeight = currentY
	const finalScaleFactor = Math.min(1, containerHeight / actualTotalHeight)

	return result.map(img => ({
		...img,
		x: img.x * finalScaleFactor,
		y: img.y * finalScaleFactor,
		displayWidth: img.displayWidth * finalScaleFactor,
		displayHeight: img.displayHeight * finalScaleFactor,
	}))
}

// Calculate layout waste (unused space)
const calculateWaste = (layout: PositionedImage[], containerWidth: number, containerHeight: number): number => {
	if (layout.length === 0) return Infinity

	const maxY = Math.max(...layout.map(img => img.y + img.displayHeight))
	const maxX = Math.max(...layout.map(img => img.x + img.displayWidth))

	const usedArea = layout.reduce((sum, img) => sum + img.displayWidth * img.displayHeight, 0)
	const totalArea = containerWidth * containerHeight

	// Penalize layouts that don't use the full width/height
	const widthUtilization = maxX / containerWidth
	const heightUtilization = maxY / containerHeight

	return (
		totalArea - usedArea + (1 - widthUtilization) * UTILIZATION_PENALTY + (1 - heightUtilization) * UTILIZATION_PENALTY
	)
}

const ScreenFillRenderer: FunctionComponent<ScreenFillRendererProps> = ({
	images,
	fullscreen,
	showControls,
	onToggleControls,
}) => {
	const [positionedImages, setPositionedImages] = useState<PositionedImage[]>([])
	const containerRef = useRef<HTMLDivElement>(null)

	const calculateLayout = useCallback((): void => {
		if (containerRef.current && images.length > 0) {
			const { clientWidth, clientHeight } = containerRef.current
			const arranged = arrangeImagesOptimally(images, clientWidth, clientHeight)
			setPositionedImages(arranged)
		}
	}, [images])

	// Handle scroll for virtualization (simplified for now)
	const handleScroll = useCallback((): void => {
		// For now, just a placeholder since we're showing all images
	}, [])

	useLayoutEffect(() => {
		calculateLayout()
	}, [calculateLayout])

	const debouncedCalculateLayout = useDebounceCallback(calculateLayout, debounceTimeout)

	useResizeObserver<HTMLDivElement>({
		// @ts-expect-error - usehooks-ts types issue with ref
		ref: containerRef,
		onResize: debouncedCalculateLayout,
	})

	// Handle keyboard events for fullscreen mode
	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent): void => {
			if (fullscreen) {
				if (event.key === 'Escape') {
					void document.exitFullscreen()
				} else if (event.key === ' ' || event.key === 'Enter') {
					event.preventDefault()
					onToggleControls()
				}
			}
		}

		document.addEventListener('keydown', handleKeyPress)
		return (): void => {
			document.removeEventListener('keydown', handleKeyPress)
		}
	}, [fullscreen, onToggleControls])

	// Fix fullscreen positioning and handle fullscreen changes
	useEffect(() => {
		const handleFullscreenChange = (): void => {
			// Recalculate layout when entering/exiting fullscreen
			setTimeout(() => {
				calculateLayout()
			}, FULLSCREEN_RECALC_DELAY)
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)
		return (): void => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange)
		}
	}, [calculateLayout])

	const containerClasses = fullscreen
		? 'fixed inset-0 z-50 bg-black overflow-auto'
		: 'w-screen h-screen bg-gray-50 dark:bg-gray-900 overflow-auto'

	const imagesToRender = positionedImages // Always render all positioned images for now

	return (
		<div
			ref={containerRef}
			className={`relative ${containerClasses}`}
			onScroll={handleScroll}
			style={{
				// Ensure proper positioning in fullscreen
				...(fullscreen && {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 50,
				}),
			}}
		>
			{/* Controls overlay */}
			{fullscreen && (
				<div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
					<div className="flex justify-between p-4 pointer-events-auto">
						<Button
							onClick={(): void => {
								void document.exitFullscreen()
							}}
							className="bg-black/50 hover:bg-black/70 text-white border-white/20"
							variant="outline"
							size="sm"
						>
							Exit Fullscreen
						</Button>
						<Button
							onClick={(): void => {
								onToggleControls()
							}}
							className={`bg-black/50 hover:bg-black/70 text-white border-white/20 transition-opacity duration-300 ${
								showControls ? 'opacity-100' : 'opacity-20 hover:opacity-100'
							}`}
							variant="outline"
							size="sm"
						>
							{showControls ? 'Hide Controls' : 'Show Controls'}
						</Button>
					</div>
				</div>
			)}

			{/* Content container */}
			<div
				className="relative w-full"
				style={{
					height:
						positionedImages.length > 0 ? Math.max(...positionedImages.map(img => img.y + img.displayHeight)) : '100%',
				}}
			>
				{/* Images */}
				{imagesToRender.map((img, index) => (
					<div
						key={img.src}
						className="absolute overflow-hidden"
						style={{
							left: img.x,
							top: img.y,
							width: img.displayWidth,
							height: img.displayHeight,
						}}
					>
						<Image
							src={img.src}
							alt={`Gallery image ${index + 1}`}
							width={img.width}
							height={img.height}
							className="w-full h-full object-contain"
							unoptimized
							priority={index < PRIORITY_IMAGE_COUNT}
						/>
					</div>
				))}
			</div>

			{/* Instructions for fullscreen mode */}
			{fullscreen && !showControls && (
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
					Press Space or Enter to toggle controls, Esc to exit fullscreen
				</div>
			)}
		</div>
	)
}

export default ScreenFillRenderer
