// Video speed processing utility
// Constants for video processing
const BITRATE_FACTOR = 0.1
const RECORDING_CHUNK_SIZE = 100
const FRAME_CAPTURE_DELAY = 100
const MILLISECONDS_PER_SECOND = 1000

// Constants for FPS detection
const MIN_FPS = 15
const MAX_FPS = 60
const DEFAULT_FPS = 30
const FPS_DETECTION_SAMPLES = 60
const FPS_DETECTION_TIMEOUT = 2
const MIN_SAMPLE_SIZE = 10
const TRIM_SAMPLES = 5
const START_TIME_OFFSET = 0.1

// Common video frame rates
const COMMON_FPS_24 = 24
const COMMON_FPS_25 = 25
const COMMON_FPS_30 = 30
const COMMON_FPS_50 = 50
const COMMON_FPS_60 = 60
const FPS_TOLERANCE = 0.1

const COMMON_FPS_VALUES = [
	COMMON_FPS_24,
	COMMON_FPS_25,
	COMMON_FPS_30,
	COMMON_FPS_50,
	COMMON_FPS_60,
]

// Function to detect actual video frame rate
const detectVideoFPS = async (video: HTMLVideoElement): Promise<number> => {
	// eslint-disable-next-line promise/avoid-new -- Required for video frame detection
	return await new Promise(resolve => {
		let lastTime = 0
		let frameCount = 0
		const frameTimes: number[] = []

		const checkFrameRate = (): void => {
			const {currentTime} = video
			if (lastTime !== currentTime) {
				const deltaTime = currentTime - lastTime
				if (deltaTime > 0) {
					frameTimes.push(deltaTime)
				}
				lastTime = currentTime
				frameCount++
			}

			// Collect enough samples or timeout after specified time
			if (
				frameCount < FPS_DETECTION_SAMPLES &&
				video.currentTime < FPS_DETECTION_TIMEOUT
			) {
				requestAnimationFrame(checkFrameRate)
			} else if (frameTimes.length > MIN_SAMPLE_SIZE) {
				// Calculate average FPS from frame times

				const avgFrameTime =
					frameTimes
						.slice(TRIM_SAMPLES, -TRIM_SAMPLES)
						.reduce((a, b) => a + b, 0) /
					(frameTimes.length - MIN_SAMPLE_SIZE)
				const detectedFPS = Math.round(1 / avgFrameTime)
				resolve(Math.min(Math.max(detectedFPS, MIN_FPS), MAX_FPS))
			} else {
				resolve(DEFAULT_FPS) // Fallback
			}
		}

		// eslint-disable-next-line no-param-reassign -- wtf eslint
		video.currentTime = START_TIME_OFFSET // Start slightly ahead
		video
			.play()
			.then(() => {
				requestAnimationFrame(checkFrameRate)
			})
			.catch(() => {
				resolve(DEFAULT_FPS) // Fallback on play error
			})
	})
}

// Function to get video metadata including actual frame rate
export const getVideoMetadata = async (
	file: File
): Promise<{width: number; height: number; fps: number; duration: number}> => {
	// eslint-disable-next-line promise/avoid-new -- Required for video metadata
	return await new Promise((resolve, reject) => {
		const video = document.createElement('video')
		video.preload = 'metadata'
		video.muted = true // Mute for FPS detection
		video.crossOrigin = 'anonymous'

		video.onloadedmetadata = async (): Promise<void> => {
			try {
				// Detect actual FPS
				const detectedFPS = await detectVideoFPS(video)

				resolve({
					width: video.videoWidth,
					height: video.videoHeight,
					fps: detectedFPS,
					duration: video.duration,
				})

				video.pause()
				URL.revokeObjectURL(video.src)
			} catch {
				// Fallback to common FPS values
				const estimatedFPS =
					COMMON_FPS_VALUES.find(
						fps =>
							video.duration > 0 &&
							Math.abs((video.duration * fps) % 1) < FPS_TOLERANCE
					) ?? DEFAULT_FPS

				resolve({
					width: video.videoWidth,
					height: video.videoHeight,
					fps: estimatedFPS,
					duration: video.duration,
				})

				URL.revokeObjectURL(video.src)
			}
		}

		video.onerror = (): void => {
			reject(new Error('Failed to load video metadata'))
		}

		video.src = URL.createObjectURL(file)
	})
}

export const processVideo = async ({
	file,
	multiplier,
	logger,
	onProgress,
}: {
	file: File
	multiplier: number
	logger: (text: string, isDebug: boolean) => void
	onProgress: (value: number) => void
}): Promise<string> => {
	logger('Analyzing video metadata...', false)

	// Get video metadata first
	const metadata = await getVideoMetadata(file)
	logger(
		`Video: ${metadata.width}x${metadata.height}, ${metadata.fps}fps, ${metadata.duration.toFixed(1)}s`,
		false
	)

	// Create video element for processing
	const video = document.createElement('video')
	video.muted = false // Keep audio for speed adjustment
	video.crossOrigin = 'anonymous'
	video.preload = 'auto'

	// Create canvas for recording with original dimensions
	const canvas = document.createElement('canvas')
	canvas.width = metadata.width
	canvas.height = metadata.height

	const ctx = canvas.getContext('2d', {
		alpha: false,
		desynchronized: true, // Better performance for animation
	})
	if (!ctx) {
		throw new Error('Canvas context not available')
	}

	// Set high quality rendering
	ctx.imageSmoothingEnabled = true
	ctx.imageSmoothingQuality = 'high'

	logger('Setting up MediaRecorder with optimized settings...', false)

	// Use original FPS to maintain consistent frame rate in output
	const outputFPS = metadata.fps // Keep original FPS
	const frameInterval = MILLISECONDS_PER_SECOND / outputFPS // ms between frames

	// Calculate frame step based on speed multiplier
	// For 2x speed, we skip every other frame; for 0.5x speed, we duplicate frames
	const frameStep = multiplier

	logger(
		`Processing with original FPS: ${outputFPS}, speed multiplier: ${multiplier}x`,
		false
	)

	// Create a new canvas stream at a fixed rate
	const stream = new MediaStream()
	const canvasStream = canvas.captureStream(0) // Capture manually
	const [videoTrack] = canvasStream.getVideoTracks()
	if (videoTrack) {
		stream.addTrack(videoTrack)
	}

	// Enhanced MediaRecorder options for better quality
	const mediaRecorderOptions: MediaRecorderOptions = {
		mimeType: 'video/webm;codecs=vp9', // VP9 for better quality
		videoBitsPerSecond: metadata.width * metadata.height * BITRATE_FACTOR,
	}

	// Fallback to VP8 if VP9 not supported
	const mimeType = mediaRecorderOptions.mimeType ?? 'video/webm;codecs=vp8'
	if (mimeType.length > 0 && !MediaRecorder.isTypeSupported(mimeType)) {
		mediaRecorderOptions.mimeType = 'video/webm;codecs=vp8'
		logger('VP9 not supported, falling back to VP8', false)
	}

	const mediaRecorder = new MediaRecorder(stream, mediaRecorderOptions)
	const chunks: BlobPart[] = []

	let currentVideoTime = 0
	const frameDuration = 1 / outputFPS // Duration of each frame in seconds

	// eslint-disable-next-line promise/avoid-new -- Required for complex video processing
	return await new Promise<string>((resolve, reject) => {
		mediaRecorder.ondataavailable = (event: BlobEvent): void => {
			if (event.data.size > 0) {
				chunks.push(event.data)
			}
		}

		mediaRecorder.onstop = (): void => {
			logger('Processing completed, creating download link...', false)
			const mimeType =
				mediaRecorderOptions.mimeType?.split(';')[0] ?? 'video/webm'
			const blob = new Blob(chunks, {
				type: mimeType,
			})
			const url = URL.createObjectURL(blob)
			resolve(url)
		}

		mediaRecorder.onerror = (): void => {
			reject(new Error('MediaRecorder error occurred'))
		}

		// Frame-based rendering function that maintains original FPS
		const processNextFrame = (): void => {
			if (currentVideoTime >= metadata.duration) {
				// Video processing complete
				logger(
					'Video processing finished, stopping recording...',
					false
				)

				// Stop recording after a brief delay
				setTimeout(() => {
					mediaRecorder.stop()
					onProgress(1)
				}, FRAME_CAPTURE_DELAY)
				return
			}

			// Set video to exact frame time for consistent frame capture
			video.currentTime = currentVideoTime

			// Update progress
			const progress = currentVideoTime / metadata.duration
			onProgress(progress)
		}

		// Handle video seek completion and frame rendering
		const onVideoSeeked = (): void => {
			// Render current frame to canvas
			ctx.fillStyle = '#000000'
			ctx.fillRect(0, 0, canvas.width, canvas.height)
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

			// Force frame capture
			const [track] = canvasStream.getVideoTracks()
			if (track && 'requestFrame' in track) {
				// Type-safe way to call experimental API
				try {
					// @ts-expect-error - requestFrame is an experimental API not in TypeScript types
					track.requestFrame()
				} catch {
					// Ignore errors from experimental API
				}
			}

			// Calculate next frame time based on speed multiplier
			currentVideoTime += frameDuration * frameStep

			// Schedule next frame processing
			setTimeout(processNextFrame, frameInterval)
		}

		video.onloadedmetadata = (): void => {
			logger('Video loaded, configuring frame-based processing...', false)

			// Ensure canvas matches video dimensions exactly
			canvas.width = video.videoWidth
			canvas.height = video.videoHeight

			// Don't use playbackRate - we'll manually control frame timing
			video.playbackRate = 1 // Keep normal playback rate
			video.preservesPitch = true

			logger(
				`Processing at original FPS: ${outputFPS}, speed multiplier: ${frameStep}x`,
				false
			)

			// Start recording
			mediaRecorder.start(RECORDING_CHUNK_SIZE)

			// Add video seeked event listener
			video.addEventListener('seeked', onVideoSeeked)

			// Start frame-based processing
			processNextFrame()
		}

		video.onerror = (): void => {
			reject(new Error('Video loading failed'))
		}

		// Load the video file
		logger('Loading video file for frame-based processing...', false)
		video.src = URL.createObjectURL(file)
	})
}

// Check browser compatibility
export const checkBrowserSupport = (): {
	isSupported: boolean
	missingFeatures: string[]
} => {
	const missingFeatures: string[] = []

	if (typeof window === 'undefined') {
		return {isSupported: false, missingFeatures: ['Server environment']}
	}

	if (!('MediaRecorder' in window)) {
		missingFeatures.push('MediaRecorder API')
	}

	if (!MediaRecorder.isTypeSupported('video/webm')) {
		missingFeatures.push('WebM video support')
	}

	if (!('HTMLCanvasElement' in window)) {
		missingFeatures.push('Canvas API')
	}

	// Check if captureStream is available on canvas
	try {
		const canvas = document.createElement('canvas')
		if (typeof canvas.captureStream !== 'function') {
			missingFeatures.push('Canvas.captureStream')
		}
	} catch {
		missingFeatures.push('Canvas.captureStream')
	}

	return {
		isSupported: missingFeatures.length === 0,
		missingFeatures,
	}
}
