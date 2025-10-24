import type { BeforeSync } from 'node_modules/@payloadcms/plugin-search/dist/types'
import type { CollectionSlug } from 'payload'
import { locales } from 'src/i18n-config'

const beforeSync: BeforeSync = async ({ originalDoc, searchDoc, payload }) => {
  const collectionSlug = searchDoc.doc.relationTo as CollectionSlug
  let excerpt = ''
  if (collectionSlug === 'micro_posts') {
    for (const locale of locales) {
      const docs = await payload.find({
        collection: collectionSlug,
        where: {
          id: {
            equals: searchDoc.doc.value,
          },
        },
        locale,
      })
      if (docs.totalDocs === 0) {
        return searchDoc
      }
      const [doc] = docs.docs
      excerpt += `${doc.title} ${doc.meta?.description ?? ''} ${doc.content} ${doc.meta?.title ?? ''} --- `
    }
  } else if (collectionSlug === 'authors') {
    for (const locale of locales) {
      const doc = await payload.find({
        collection: collectionSlug,
        where: { id: { equals: searchDoc.doc.value } },
        locale,
      })
      if (doc.totalDocs === 0) {
        return searchDoc
      }
      const [docItem] = doc.docs
      excerpt += `${docItem.name} ${docItem.bio} ${docItem.slug} --- `
    }
  } else if (collectionSlug === 'tags') {
    for (const locale of locales) {
      const docs = await payload.find({
        collection: collectionSlug,
        where: { id: { equals: searchDoc.doc.value } },
        locale,
      })
      if (docs.totalDocs === 0) {
        return searchDoc
      }
      const [doc] = docs.docs

      excerpt += `${doc.title} ${doc.name} --- `
    }
  }
  return {
    ...searchDoc,
    title: originalDoc?.title || searchDoc.title || originalDoc?.name || '',
    // - Modify your docs in any way here, this can be async
    // - You also need to add the `excerpt` field in the `searchOverrides` config
    excerpt,
  }
}
export default beforeSync
