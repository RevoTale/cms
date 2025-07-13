"use server"

import configPromise from '@payload-config'
import { revalidatePath } from 'next/cache'
import OpenAI from 'openai'
import { getPayload } from 'payload'

interface GenerateParams {
  id: string
  collection: 'micro_posts'
  content: string
}
export const genImageSafe = async ({ id, collectionSlug, content }: { id: string, collectionSlug: 'micro_posts', content: string }) => {
  try {
    await generateImage({ id, collection: collectionSlug, content })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    return {
      success: false,
      message: `Error generating image: ${msg}`,
    }
  }
  return {
    success: true,
    message: 'Image generated successfully',
  }
}
const generateImagePrompt = async({ content }:{content:string}) :Promise<string>=> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OpenAI API key is not configured')
  const client = new OpenAI({ apiKey })
  const response = await client.responses.create({
    model: 'gpt-4o',
    instructions: `
    - Summarize the input content into a concise image description suitable for generating an image.
    - The description should capture the essence of the content in a way that can be visually represented.
    - It will be used for the SEO and Social preview. Consider best practices in this regarding this.
    - Focus on the main themes, objects, and actions described in the content.
    - Avoid unnecessary details or overly complex descriptions.
    - The description should be suitable for generating an image using DALL-E 3.
    -	Avoid nudity, gore, explicit violence, or sexually suggestive material.
    - Rephrase sensitive topics using metaphor, symbolism, or abstraction.
    -	For scientific or psychological topics, emphasize educational, biological, or metaphorical framing rather than graphic depictions.
    -	If referencing real people/events, avoid showing real faces or include them as symbolic representations only.
    - For sensitive topics, focus on the broader context or implications rather than graphic details.
    - Ensure the description is clear, concise, and suitable for image generation.
    - Avoid any explicit content or visuals that could trigger moderation filters
    - Maximum length of prompt is 100 words.
    - Focus on visual scenes, objects, settings, and actions that can be clearly illustrated.
    - Avoid including any text, letters, labels, or written symbols in the image.

    `,
    input: content,
  });

  return response.output_text
}
export async function generateImage({ id, collection, content }: GenerateParams): Promise<{ url: string }> {
  const payload = await getPayload({ config: configPromise })
  // Validate collection and id
  if (!collection) throw new Error('No collection specified')
  if (!id) throw new Error('No document ID specified')
  const doc = await payload.findByID({ collection: collection, id })
  if (!doc) {
    throw new Error('Document not found')
  }
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OpenAI API key is not configured')
  const client = new OpenAI({ apiKey })
  const prompt = await generateImagePrompt({ content })
  if (!prompt) {
    throw new Error('No content to generate image from')
  }
  // Generate image
  let result
  try {
    result = await client.images.generate({ prompt, n: 1, size: '1792x1024',model:'dall-e-3' })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    throw new Error(`Image generation failed: ${msg} ${prompt}`)

  }
  const imageUrl = result.data?.[0]?.url
  if (!imageUrl) throw new Error('No image URL returned')
let media
    try {
       media = await payload.create({
      collection: 'media',
      data: {
        filename: `generated-${Date.now()}.png`,
        alt: `Generated image for ${doc.title}`,
        
        url: imageUrl,
      },
    })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      throw new Error(`Failed to create media entry: ${msg}`)
    }
  // Update document with generated image
  try {
    await payload.update({ collection: collection, id, data: { meta: { image: media } } })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    throw new Error(`Failed to attach image: ${msg}`)
  }
  // Revalidate admin edit cache
  revalidatePath(`/admin/collections/${collection}/${id}`)
  return { url: imageUrl }
}
