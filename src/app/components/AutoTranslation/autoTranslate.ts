'use server'

import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { SelectFromCollectionSlug } from 'node_modules/payload/dist/collections/config/types'
import { ByIDOptions } from 'node_modules/payload/dist/collections/operations/local/update'
import { CollectionSlug, getPayload, TypedLocale } from "payload"
const translateFn = async (text: string, locale: TypedLocale): Promise<string> => {
    return `is was tran ${locale}`//TODO FINISH THIS
}
interface AutoTranslateProps {docId:string,collection:CollectionSlug,locale:TypedLocale}
export const autoTranslate = async ({docId,collection,locale}:AutoTranslateProps):Promise<{
    ok:boolean
}>=>{
      const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  if (user) {
        const post = await payload.findByID({
      collection,
      id: docId,
    })
    const fields = payload.collections[collection].config.fields
    type Data = ByIDOptions<typeof collection,SelectFromCollectionSlug<typeof collection>>['data'] 
    const dataToUpdate :Data= {}

    for (const [key, value] of Object.entries(post)) {
        for (const field of fields) {
            if (field.type === 'text' || field.type === 'textarea') {
                if (field.name === key) {
                    dataToUpdate[key as keyof Data] = await translateFn(value,locale)
                }
            }
        }
    }
    await payload.update({
        locale,
        id: docId,
        collection,
        data:dataToUpdate
    })
    return { 
        ok:true
     }
  }

 throw new Error('Unauthorized')

}
