'use server'

import config from '@payload-config'
import { revalidatePath } from 'next/cache'
import { headers as getHeaders } from 'next/headers'
import { CollectionSlug, DataFromCollectionSlug, Field, getPayload, TypedLocale } from "payload"
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

const translateFn = async (text: string, locale: TypedLocale): Promise<string> => {
    return `is was tran ${locale} ${text}`//TODO FINISH THIS
}

interface AutoTranslateProps {docId:string,collection:CollectionSlug,targetLocale:TypedLocale,sourceLocale:TypedLocale}
export const autoTranslate = async ({docId,collection,targetLocale,sourceLocale}:AutoTranslateProps):Promise<{
    ok:boolean
}>=>{
      const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  if (user) {
        const post = await payload.findByID({
      collection,
      id: docId,
      locale:sourceLocale
    })
    const fields = payload.collections[collection].config.fields
    const dataToUpdate :RecursivePartial<typeof post>= {
        
    }
console.log('post',post)

    const iterateOverFields = async(fields:Field[],obj:DataFromCollectionSlug<typeof collection>,data:Record<string,unknown>)=>{
        for (const [key, value] of Object.entries(obj)) {
            for (const field of fields) {
            
                if ((field.type === 'text' || field.type === 'textarea') && field.localized === true && field.name === key && typeof value === 'string') {
                        data[key  ] = await translateFn(value,targetLocale)
                } else if(field.type === 'tabs') {
                    for (const tab of field.tabs) {
                        
                        if ( ('name' in tab && tab.name === key) ) {
                             const subObj = obj[key as keyof DataFromCollectionSlug<typeof collection>]
                        if (typeof subObj === 'object' && !Array.isArray(subObj) && subObj !== null) {
                            data[key] = data[key] ?? {}
                          iterateOverFields(tab.fields, subObj, data[key] as Record<string,unknown>)
                        }
                        }
                       
                       
                    }
                }
            }
        }
    }
console.log('data',dataToUpdate)
    //iterateOverFields(fields,post ,dataToUpdate)
    // Update the document with the translated data
    if (Object.entries(dataToUpdate).length === 0) {
        throw new Error('No translatable fields found')
    }
    await payload.update({
        locale:targetLocale,
        id: docId,
        collection,
        data:dataToUpdate
    })
    revalidatePath(`/admin/collections/${collection}/${docId}`)
    return { 
        ok:true
     }
  }

 throw new Error('Unauthorized')

}
