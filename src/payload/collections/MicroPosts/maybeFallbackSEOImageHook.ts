import type { CollectionBeforeChangeHook, DataFromCollectionSlug } from 'payload'

const maybeFallbackSEOImage: CollectionBeforeChangeHook<
  DataFromCollectionSlug<'micro_posts'>
> = async ({ data, req }) => {
  if (data?.meta?.image || !data?.attachment) {
    return data
  }

  const attachment = await req.payload.findByID({
    collection: 'media',
    id: typeof data.attachment === 'string' ? data.attachment : data.attachment.id,
  })

  if (!attachment.mimeType?.startsWith('image/')) {
    return data
  }

  return {
    ...data,
    meta: {
      ...(data.meta ?? {}),
      image: data.attachment,
    },
  }
}

export default maybeFallbackSEOImage
