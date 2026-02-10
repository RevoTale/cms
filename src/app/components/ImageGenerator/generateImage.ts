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
	const imageUrl = result.data?.[0]?.url
	if (!imageUrl) {
		payload.logger.error(`No image url returned for the ${content}; keys returned ${Object.keys(result).join(',')}`)
		throw new Error('No image URL returned')
	}
	const media = await payload.create({
		collection: 'media',
		data: {
			filename: `note-preview-${Date.now()}.png`,
			alt,
			description: prompt,

			url: imageUrl,
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
