'use server'

import config from '@payload-config'
import { revalidatePath } from 'next/cache'
import { headers as getHeaders } from 'next/headers'
import { CollectionSlug, DataFromCollectionSlug, Field, getPayload, TypedLocale } from "payload"
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
type ValueOf<T> = T[keyof T];
const translateFn = async (text: string, locale: TypedLocale): Promise<string> => {
    return `is was tran ${locale} ${text}`//TODO FINISH THIS
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
    type Data = DataFromCollectionSlug<typeof collection>
    const dataToUpdate :RecursivePartial<typeof post>= {
        
    }


    const iterateOverFields = async(fields:Field[],obj:DataFromCollectionSlug<typeof collection>,data:Record<string,unknown>)=>{
        for (const [key, value] of Object.entries(obj)) {
            for (const field of fields) {
            
                if ((field.type === 'text' || field.type === 'textarea') && field.localized === true && field.name === key && typeof value === 'string') {
                        data[key  ] = await translateFn(value,locale)
                } else if(field.type === 'tabs') {
                    for (const tab of field.tabs) {
                        
                        if (Array.isArray(tab.fields) && tab.name === key) {
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
    console.log(fields,post,dataToUpdate)

    iterateOverFields(fields,post ,dataToUpdate)
    console.log('dataToUpdate',dataToUpdate)
    // Update the document with the translated data
    await payload.update({
        locale,
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
