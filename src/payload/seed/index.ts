import type { CollectionSlug, Payload, PayloadRequest } from 'payload'

import path from 'path'
import { authors } from 'src/payload-generated-schema'
import { fileURLToPath } from 'url'
import { locales, media, microposts, tags } from './data'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const collections: CollectionSlug[] = ['tags', 'media', 'posts']

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

const mongoIdToUuidMap: Record<string, string> = {}
 payload.logger.info('Seeding tags...')
   await Promise.all(tags.map(async (tagData) => {
    
     const tag = await payload.create({
       collection: 'tags',
       data: {
        updatedAt: tagData.updatedAt.$date,
        createdAt: tagData.createdAt.$date,
        name: tagData.name,
        title: tagData.title['en-US'],
       },
       req,
       locale: 'en-US',
     })


     await Promise.all(locales.map(async (locale) => {
       payload.logger.info('Seeding tags...'+tag.id+(tagData.title[locale]??tagData.title['en-US']))
          await payload.update({
            collection: 'tags',
            id: tag.id,
            data: {
              title: tagData.title[locale]??tagData.title['en-US'],
            },
            req,
            locale,
          })
           payload.logger.info('Seeded tag')
      }))
     mongoIdToUuidMap[tagData._id.$oid] = tag.id
   }))
    payload.logger.info('Seeded tags.')



 
 payload.logger.info('Seeding media...')
 
  await Promise.all( media.map(async (data) => {
    
     const tag = await payload.create({
       collection: 'media',
       data: {
        updatedAt: data.updatedAt.$date,
        createdAt: data.createdAt.$date,
        alt: data.alt['en-US'],
        description: data?.description?.['en-US'],
        url: data.url,
        filename: data.filename,
        mimeType: data.mimeType,
        filesize: data.filesize,
        width: data.width,
        height: data.height,
        focalX: data.focalX,
        focalY: data.focalY,  
       },
       req,
       locale: 'en-US',
     })
     await Promise.all(locales.map(async (locale) => {
          await payload.update({
            collection: 'media',
            id: tag.id,
            data: {
              alt: data.alt[locale],
              description: data?.description?.[locale],
            },
            req,
            locale,
          })
      }))
     mongoIdToUuidMap[data._id.$oid] = tag.id
   }))


     const requireIdInMap = (id: string): string => {
    if (id in mongoIdToUuidMap) return mongoIdToUuidMap[id]
    throw new Error(`ID ${id} not found in map`)
   }
 payload.logger.info('Seeding authors...')

      await Promise.all(authors.map(async (tagData) => {
    
     const tag = await payload.create({
       collection: 'authors',
       data: {
        updatedAt: tagData.updatedAt.$date,
        createdAt: tagData.createdAt.$date,
        name: tagData.name['en-US'],
        slug: tagData.slug,
        bio: tagData.bio['en-US'],
        user: user.id,
        avatar: tagData.avatar.$oid in mongoIdToUuidMap ? requireIdInMap(tagData.avatar.$oid) : undefined,
       },
       req,
       locale: 'en-US',
     })
     await Promise.all(locales.map(async (locale) => {
          await payload.update({
            collection: 'authors',
            id: tag.id,
            data: {
             name: tagData.name[locale],
             bio: tagData.bio[locale],
            },
            req,
            locale,
          })
      }))
     mongoIdToUuidMap[tagData._id.$oid] = tag.id
   }))
 payload.logger.info('Seeding microposts...')

  
      await Promise.all(microposts.map(async (tagData) => {
    
     const tag = await payload.create({
       collection: 'micro_posts',
       data: {
        updatedAt: tagData.updatedAt.$date,
        createdAt: tagData.createdAt.$date,
        title: tagData.title['en-US'],
        meta: {
          title: tagData.meta.title['en-US'],
          description: tagData.meta.description['en-US'],
          image: tagData.meta.image ? requireIdInMap(tagData.meta.image['en-US'].$oid) : undefined,
         },
        content: tagData.content['en-US'],
        publishedAt: tagData.publishedAt.$date,
        authorSlug: tagData.authorSlug,
        authors: tagData.authors.map((author) => mongoIdToUuidMap[author.$oid]),
        social: tagData.social,
        _status: 'published',
        tags: tagData.tags.map((tag) => requireIdInMap(tag.$oid)),
       },
       req,
       locale: 'en-US',
     })
     await Promise.all(locales.map(async (locale) => {
          await payload.update({
            collection: 'micro_posts',
            id: tag.id,
            data: {
                    title: tagData.title[locale],
 content: tagData.content[locale],
 meta:{
  title: tagData.meta.title[locale],
    description: tagData.meta.description[locale],
 }
            },
            req,
            locale,
          })
      }))
     mongoIdToUuidMap[tagData._id.$oid] = tag.id
   }))
return
}
