"use server"

import configPromise from '@payload-config'
import { revalidatePath } from 'next/cache'
import OpenAI from 'openai'
import { getPayload } from 'payload'

interface GenerateParams {
  id: string
  collection: 'micro_posts'
}

export async function generateImage({ id, collection }: GenerateParams): Promise<{ url: string }> {
  const payload = await getPayload({ config: configPromise })
  // Validate collection and id
  if (!collection) throw new Error('No collection specified')
  if (!id) throw new Error('No document ID specified')
  const doc = await payload.findByID({ collection: collection as any, id })
  if (!doc) {
    throw new Error('Document not found')
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OpenAI API key is not configured')
  const client = new OpenAI({ apiKey })
  const prompt = (doc.content as string) || (doc.title as string) || ''
  if (!prompt) {
    throw new Error('No content to generate image from')
  }

  let result
  try {
    result = await client.images.generate({ prompt, n: 1, size: '1024x1024' })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    throw new Error(`Image generation failed: ${msg}`)
  }
  const imageUrl = result.data?.[0]?.url
  if (!imageUrl) throw new Error('No image URL returned')

  // Update document with generated image
  try {
    await payload.update({ collection: collection, id, data: { meta: { image: imageUrl } } })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    throw new Error(`Failed to attach image: ${msg}`)
  }
  // Revalidate admin edit cache
  revalidatePath(`/admin/collections/${collection}/${id}`)
  return { url: imageUrl }
}
