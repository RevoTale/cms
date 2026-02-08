'use server'
import { revalidatePath } from 'next/cache'
import { generateImage } from './generateImage'

const generateImageWithSafeResp = async ({
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
		revalidatePath(`/admin/collections/${collectionSlug}/${id}`)
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
export default generateImageWithSafeResp
