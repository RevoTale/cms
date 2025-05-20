'use server'

import config from '@payload-config'
import { revalidatePath } from 'next/cache'
import { headers as getHeaders } from 'next/headers'
import OpenAI from 'openai'
import { CollectionSlug, DataFromCollectionSlug, Field, getPayload, TypedLocale } from "payload"
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

const translateFn = async (text: string, locale: TypedLocale,context:Record<string,unknown>,maxLen:number|undefined,sourceLocale:string): Promise<string> => {
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

Your task is to translate the given **content** string from **sourceLocale** to **targetLocale** in a natural, fluent, and context-aware manner.

Instructions:
- Translate the **content** string only once, preserving the original tone, voice, punctuation, and rhythm.  
- If **maxLength** (character limit) is provided, strictly obey it (character count, not words). If not provided, keep the translation no more than 10% longer than the original.  
- Retain all **markdown or HTML tags**, **inline code**, and **placeholders** such as \`{variable}\`, \`{{handlebars}}\`, or \`%placeholder%\` exactly as they appear.  
- Preserve list bullets, links, and emojis as-is.

Context:
- The \`context\` object provides relevant metadata about the text (e.g., title, type, tags, or the full raw object). Use this to understand the meaning more deeply, especially when terms are ambiguous.

Terminology & Style:
- Use standard, widely accepted equivalents for acronyms and technical terms. Refer to dictionaries, Wikipedia, or major media in the target language. If no equivalent exists, keep the original term.  
- When encountering figurative uses of **“power”** (or its translated analogue) in constructs like “<Term> power:”, render the phrase with the idiomatic target-language concept of **strength / capability / impact of <Term>**, not a literal translation.  
- Prefer natural, commonly used native-language collocations over word-for-word translations in all figurative or idiomatic cases.  
- Do not leave any part of the content untranslated, except for proper nouns clearly intended to remain unchanged.

Output:
- Return **only the translated string**, with no additional commentary, metadata, or formatting.`,
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
    const iterateOverFields = async(fields:Field[],obj:DataFromCollectionSlug<typeof collection>,data:Record<string,unknown>)=>{
        for (const [key, value] of Object.entries(obj)) {

            for (const field of fields) {
                if ((field.type === 'text' || field.type === 'textarea') && field.localized === true && field.name === key && typeof value === 'string') {
                        data[key  ] = await translateFn(value,targetLocale, {
                          [collection]:post
                        },field.maxLength,sourceLocale)
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
