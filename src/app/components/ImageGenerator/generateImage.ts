import configPromise from '@payload-config'
import OpenAI from 'openai'
import { getPayload, type Payload } from 'payload'
import 'server-only'
import type { Media } from 'src/payload-types'
import handleImagePromptRequest from './handleImagePromptRequest'

interface GenerateParams {
	id: string
	collection: 'micro_posts'
	content: string
}

type UploadedImage = {
	buffer: Buffer
	extension: 'jpg' | 'png' | 'webp'
	mimetype: string
}

const outputFormatToMimeType = (format?: 'jpeg' | 'png' | 'webp'): string => {
	switch (format) {
		case 'jpeg':
			return 'image/jpeg'
		case 'webp':
			return 'image/webp'
		default:
			return 'image/png'
	}
}

const mimeTypeToExtension = (mimeType: string): UploadedImage['extension'] => {
	switch (mimeType) {
		case 'image/jpeg':
			return 'jpg'
		case 'image/webp':
			return 'webp'
		default:
			return 'png'
	}
}

const downloadImageFromURL = async (url: string, fallbackMimeType: string): Promise<UploadedImage> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`Failed to download generated image: ${response.status} ${response.statusText}`)
	}

	const contentTypeHeader = response.headers.get('content-type')
	const contentType =
		typeof contentTypeHeader === 'string' && contentTypeHeader.length > 0
			? contentTypeHeader.split(';')[0]?.trim()
			: undefined
	const mimetype = contentType?.startsWith('image/') ? contentType : fallbackMimeType
	const buffer = Buffer.from(await response.arrayBuffer())

	return {
		buffer,
		mimetype,
		extension: mimeTypeToExtension(mimetype),
	}
}

const handleImageCreate = async (content: string, payload: Payload, alt: string): Promise<Media> => {
	const apiKey = process.env.OPENAI_API_KEY
	if (!apiKey) throw new Error('OpenAI API key is not configured')
	const client = new OpenAI({ apiKey })
	const prompt = await handleImagePromptRequest({ content })

	const result = await client.images.generate({
		prompt,
		n: 1,
		size: '1536x1024',
		model: 'gpt-image-1.5',
	})

	const fallbackMimeType = outputFormatToMimeType(result.output_format)
	const generatedImage = result.data?.[0]
	if (!generatedImage) {
		payload.logger.error(
			`No image object returned for content "${content}"; keys returned ${Object.keys(result).join(',')}`,
		)
		throw new Error('No image data returned')
	}

	let uploadedImage: UploadedImage
	if (generatedImage.b64_json) {
		const buffer = Buffer.from(generatedImage.b64_json, 'base64')
		uploadedImage = {
			buffer,
			mimetype: fallbackMimeType,
			extension: mimeTypeToExtension(fallbackMimeType),
		}
	} else if (generatedImage.url) {
		uploadedImage = await downloadImageFromURL(generatedImage.url, fallbackMimeType)
	} else {
		payload.logger.error(
			`No image payload returned for content "${content}"; image keys returned ${Object.keys(generatedImage).join(',')}`,
		)
		throw new Error('No image data returned')
	}

	const filename = `note-preview-${Date.now()}.${uploadedImage.extension}`
	const media = await payload.create({
		collection: 'media',
		data: {
			alt,
			description: prompt,
		},
		file: {
			data: uploadedImage.buffer,
			mimetype: uploadedImage.mimetype,
			name: filename,
			size: uploadedImage.buffer.byteLength,
		},
	})
	return media
}

export async function generateImage({ id, collection, content }: GenerateParams): Promise<{ id: string }> {
	const payload = await getPayload({ config: configPromise })
	// Validate collection and id
	if (!collection) throw new Error('No collection specified')
	if (!id) throw new Error('No document ID specified')
	const doc = await payload.findByID({ collection, id })
	if (!doc) {
		throw new Error('Document not found')
	}

	try {
		const media = await handleImageCreate(content, payload, `Image preview for note "${doc.title}"`)
		await payload.update({ collection, id, data: { meta: { image: media } } })
		// Revalidate admin edit cache
		return { id: media.id }
	} catch (err: unknown) {
		const msg = err instanceof Error ? err.message : String(err)
		throw new Error(`Failed to create media: ${msg}`, { cause: err })
	}
}
