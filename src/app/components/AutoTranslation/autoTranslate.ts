'use server'

import config from '@payload-config'
import { revalidatePath } from 'next/cache'
import { headers as getHeaders } from 'next/headers'
import OpenAI from 'openai'
import { CollectionSlug, DataFromCollectionSlug, Field, getPayload, TypedLocale } from "payload"
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

const translateFn = async (text: string, locale: TypedLocale,context:string,maxLen:number|undefined,sourceLocale:string): Promise<string> => {
   const key = process.env['OPENAI_API_KEY']
   const message = {
  "content": text,
  "context": context,
  "targetLocale": locale,
  "sourceLocale": sourceLocale,
  "maxLength": maxLen,
}
   const client = key?new OpenAI({
     apiKey: key, // This is the default and can be omitted
   }):null
     if (client === null) {
       throw new Error('OpenAI client is not initialized')
     }
     const response = await client.responses.create({
       model: 'gpt-4o',
       instructions: `
You are a professional human translator.

• Translate **content** from **sourceLocale** to **targetLocale** once, preserving the original tone, voice, punctuation, and rhythm.  
• Obey **maxLength** (character count) when supplied; otherwise keep the translation no more than 10 % longer than the source.  
• Keep all markdown/HTML tags, inline code, and placeholders such as {variable} or {{handlebars}} exactly as they appear.  
• Maintain list bullets, links, and emojis.

Terminology & idioms  
• Use the standard, widely accepted equivalent of every acronym or technical term in the target language if one exists (consult reputable target-language usage such as dictionaries, major media, or Wikipedia). If no accepted form exists, preserve the original acronym unchanged.  
• When the English word **“power”** (or its analogue in the sourceLocale) appears figuratively in the pattern “\<Term\> power:” or similar, render it with the idiomatic target-language concept for “strength / capability / impact of \<Term\>” rather than a literal machine-like translation.  
• In any other figurative phrase whose word-for-word rendering would sound unnatural, prefer the most common target-language collocation used by native speakers.  
• Never leave untranslated fragments except for proper nouns explicitly intended to remain as such.

Return **only the translated string**—no extra commentary.`,
       input: JSON.stringify(message),
     });
   
     return response.output_text
}

interface AutoTranslateProps {docId:string,collection:CollectionSlug,targetLocale:TypedLocale,sourceLocale:TypedLocale}
export const autoTranslate = async ({docId,collection,targetLocale,sourceLocale}:AutoTranslateProps):Promise<{
    ok:true
}|{error:string,ok:false}>=>{
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
const context = JSON.stringify(post)
    const iterateOverFields = async(fields:Field[],obj:DataFromCollectionSlug<typeof collection>,data:Record<string,unknown>)=>{
        for (const [key, value] of Object.entries(obj)) {

            for (const field of fields) {
                if ((field.type === 'text' || field.type === 'textarea') && field.localized === true && field.name === key && typeof value === 'string') {
                        data[key  ] = await translateFn(value,targetLocale, context,field.maxLength,sourceLocale)
                } else if(field.type === 'tabs') {
                    for (const tab of field.tabs) {
                        if ( ('name' in tab && tab.name === key) ) {
                             const subObj = obj[key as keyof DataFromCollectionSlug<typeof collection>]
                        if (typeof subObj === 'object' && !Array.isArray(subObj) && subObj !== null) {
                            data[key] = data[key] ?? {}
                            await iterateOverFields(tab.fields, subObj, data[key] as Record<string,unknown>)
                          if (Object.keys(data[key] as Record<string,unknown>).length === 0) {
                            delete data[key]    
                          }
                        }
                        }
                       
                       
                    }
                }
            }
        }
    }
    await iterateOverFields(fields,post ,dataToUpdate)
    // Update the document with the translated data
    if (Object.entries(dataToUpdate).length === 0) {
       return {
        ok:false,
        error:'No translatable fields found'
       }
    }
   try {
     await payload.update({
        locale:targetLocale,
        id: docId,
        collection,
        data:dataToUpdate
    })
   } catch (error:unknown) {
     return {
        ok:false,
        error:error instanceof Error ? error.message : 'Unknown error'
       }
   }
    revalidatePath(`/admin/collections/${collection}/${docId}`)
    return { 
        ok:true
     }
  }

return {
    ok:false,
    error:'User not authenticated'
}

}
