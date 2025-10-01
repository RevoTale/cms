import type { CollectionSlug, Payload, PayloadRequest, RequiredDataFromCollectionSlug } from 'payload'

import { fileURLToPath } from 'url'
import { authors, locales, media, micropostExternalLinks, microposts, tags } from './data'


const filename = fileURLToPath(import.meta.url)
// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {

   payload.logger.info('Seeding database...')
const user = req.user
if (null === user) {
  throw new Error('No user found in request')
}
  if ((await payload.find({
    collection: 'media',
    limit: 1
  })).docs.length > 0) {
    throw new Error('Seeding disable because there is already data')
  }
const mongoIdToUuidMap: Record<string, string> = {}


const seedCollection = async <T extends CollectionSlug, D extends unknown>(
  data: readonly D[],
  collection: T,
  getData: (item: D, locale: typeof locales[number]) => RequiredDataFromCollectionSlug<T>,
  getLegacyId: (item: D) => string
) => {
  payload.logger.info(`Seeding ${collection}...`);
  for (const item of data) {
     payload.logger.info(`Processing ${collection} ${getLegacyId(item )}`);
     console.log( getData(item, 'en-US'))
    const tag = await payload.create({
      collection: collection,
      data: getData(item, 'en-US'),
      req,
      locale: 'en-US',
    });
    payload.logger.info(`Localizing ${collection} ${tag.id}`);

   if (collection  === 'micro_posts' ){
    for (const locale of locales) {
      await payload.update({
        collection: 'micro_posts',
        id: tag.id,
        data: getData(item, locale),
        req,
        locale,
      });
    }
   }
    if (collection  === 'tags' ){
    for (const locale of locales) {
      await payload.update({
        collection: 'tags',
        id: tag.id,
        data: getData(item, locale),
        req,
        locale,
      });
    }
   }
    mongoIdToUuidMap[getLegacyId(item)] = tag.id;
  }
  payload.logger.info(`Seeded ${collection}.`);
}

await seedCollection(tags,'tags',(item,locale)=>({
  updatedAt: item.updatedAt.$date,
  createdAt: item.createdAt.$date,
  name: item.name,
  title: item.title[locale]??'',
}),(item)=>item._id.$oid)

   const requireIdInMap = (id: string): string => {
    if (id in mongoIdToUuidMap) return mongoIdToUuidMap[id]
    throw new Error(`ID ${id} not found in map`)
   }
await seedCollection(media,'media',(item,locale)=>({
  updatedAt: item.updatedAt.$date,
  createdAt: item.createdAt.$date,
  alt: item.alt[locale]??'',
  description: item?.description?.['en-US']??'',
  url: locale === 'en-US' ? `https://cms.s3.revotale.com/main_/${item.filename}` : undefined,
filename: item.filename,
}),(item)=>item._id.$oid)
 

await seedCollection(authors,'authors',(item,locale)=>({
  updatedAt: item.updatedAt.$date,
  createdAt: item.createdAt.$date,
  name: item.name[locale]??'',
  slug: item.slug,
  bio: item.bio[locale]??'',
  user: user.id,
  avatar: item.avatar.$oid in mongoIdToUuidMap ? requireIdInMap(item.avatar.$oid) : undefined,
}),(item)=>item._id.$oid)

  await seedCollection(microposts,'micro_posts',(item,locale)=>({ 
    updatedAt: item.updatedAt.$date,
    createdAt: item.createdAt.$date,
    title: item.title[locale]??'no title',
    meta: {
      title: item.meta.title[locale]??'',
      description: item.meta.description[locale]??'',
       image: item.meta.image ? (requireIdInMap(item.meta.image['en-US'].$oid)) : undefined,
     },
     attachment: item.attachment ? (requireIdInMap(item.attachment.$oid)) : undefined,
    content: item.content[locale]??'',
    publishedAt: item.publishedAt.$date,
    authors: item.authors.map((author) => requireIdInMap(author.$oid)),
    social: item.social,
    _status: item._status as 'draft' | 'published',
    tags: item.tags.map((tag) =>  requireIdInMap(tag.$oid)),
    slug: item._id.$oid,
}),(item)=>item._id.$oid )  


  await seedCollection(micropostExternalLinks,'micro_post_external_links',(item)=>({
  updatedAt: item.updatedAt.$date,
  createdAt: item.createdAt.$date,
  target_url: item.target_url,
  title:item.title['en-US']

}),(item)=>item._id.$oid)


return
}
