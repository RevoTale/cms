/* eslint-disable no-param-reassign */
import type { CollectionBeforeChangeHook, DataFromCollectionSlug } from 'payload'

const maybeFallbackSEOImage: CollectionBeforeChangeHook<
  DataFromCollectionSlug<'micro_posts'>
> = async ({ data, req }) => {
  if (!data.meta?.image && data.attachment) {
    // Fetch the attachment to validate it's an image
    const attachment = await req.payload.findByID({
      collection: 'media',
      id: typeof data.attachment === 'string' ? data.attachment : data.attachment.id,
    })

    // Check if the attachment is an image
    if (attachment.mimeType?.startsWith('image/')) {
      data.meta ||= {}
      data.meta.image = data.attachment
    }
  }
}

export default maybeFallbackSEOImage
