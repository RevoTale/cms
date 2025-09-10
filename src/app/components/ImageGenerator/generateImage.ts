'use server'

import configPromise from '@payload-config'
import { revalidatePath } from 'next/cache'
import OpenAI from 'openai'
import { getPayload } from 'payload'

interface GenerateParams {
  id: string
  collection: 'micro_posts'
  content: string
}
export const genImageSafe = async ({
  id,
  collectionSlug,
  content,
}: {
  id: string
  collectionSlug: 'micro_posts'
  content: string
}) => {
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
const generateImagePrompt = async ({ content }: { content: string }): Promise<string> => {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OpenAI API key is not configured')
  const client = new OpenAI({ apiKey })
  const response = await client.chat.completions.create({
    model: 'gpt-5',
    messages: [
      {
        role: 'system',
        content:
          process.env.GENERATE_IMAGE_INSTRUCTIONS ||
          'Generate an OpenGraph preview image prompt for DALLE 3 based on the provided content.',
      },
      {
        role: 'user',
        content,
      },
    ],
  })

  const result = response.choices[0]?.message.content
  if (!result) {
    throw new Error('No prompt generated from content')
  }
  return result
}
export async function generateImage({
  id,
  collection,
  content,
}: GenerateParams): Promise<{ url: string }> {
  const payload = await getPayload({ config: configPromise })
  // Validate collection and id
  if (!collection) throw new Error('No collection specified')
  if (!id) throw new Error('No document ID specified')
  const doc = await payload.findByID({ collection, id })
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
    result = await client.images.generate({ prompt, n: 1, size: '1792x1024', model: 'dall-e-3' })
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
        filename: `note-preview-${Date.now()}.png`,
        alt: `Image preview for note "${doc.title}"`,
        description: prompt,

        url: imageUrl,
      },
    })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    throw new Error(`Failed to create media entry: ${msg}`)
  }
  // Update document with generated image
  try {
    await payload.update({ collection, id, data: { meta: { image: media } } })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    throw new Error(`Failed to attach image: ${msg}`)
  }
  // Revalidate admin edit cache
  revalidatePath(`/admin/collections/${collection}/${id}`)
  return { url: imageUrl }
}
