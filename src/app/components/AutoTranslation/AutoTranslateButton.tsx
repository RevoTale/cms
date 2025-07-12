'use client'
import { Button, useConfig, useDocumentInfo } from "@payloadcms/ui";
import { TypedLocale } from "payload";
import { FunctionComponent, useState } from "react";
import { autoTranslate, Context } from "./autoTranslate";

const AutoTranslateButton:FunctionComponent= () => {
  const { id,collectionSlug, } = useDocumentInfo()
 const {config:{localization}}= useConfig()

const [pendingLocale,setPendingLocale] = useState<string|null>(null)
const [results,setResults] = useState<{
  locale:string
  error:string|null
  context?:Context
}[]>([])
  // id will be undefined on the create form
  if (!id || !collectionSlug || !localization) {
    return null
  }
  const sourceLocale = localization.defaultLocale
  const locales = localization.locales.map(locale => locale.code).filter(locale => locale !== sourceLocale)
  const handleSubmit = async (locales:string[])=>{
      for (const targetLocale of locales) {
        try {
        setPendingLocale(targetLocale)
        const result = await autoTranslate({
            docId: id.toString(),
            collection: collectionSlug,
            targetLocale: targetLocale as TypedLocale,
            sourceLocale: sourceLocale as TypedLocale
        })
        setPendingLocale(null)
        if (result.ok === false) {
          setResults(prev=>[...prev,{locale:targetLocale,error:result.error,context:result.context}])

        } else {
        setResults(prev=>[...prev,{locale:targetLocale,error:null}])
        }
      } catch (error:unknown) {
        setPendingLocale(null)
         setResults(prev=>[...prev,{locale:targetLocale,error:error instanceof Error ? error.message : 'Unknown error'}])
      }
      }
  }
    return <div className="flex flex-col gap-2 max-w-full">
        <Button className="my-1" onClick={()=>{
          handleSubmit(locales)
        }} disabled={pendingLocale !== null} type="submit">{pendingLocale !== null?`Translating to ${pendingLocale}...`:`Auto Translate All from ${sourceLocale}`}</Button>
       <div className="flex  gap-2 max-w-full flex-wrap ">
         {locales.map(locale=>{
          return <Button className="my-1 flex" key={locale} disabled={pendingLocale === locale}  onClick={()=>{
            handleSubmit([locale])
          }}>To {locale}</Button>
        })}
       </div>
        <div>
            {results.map((result,index)=><div key={index} className="flex gap-2">
                <div>{result.locale}: </div>{result.error ? <div style={{color:'red'}}>{result.error} {JSON.stringify(result.context?.data)}</div>:<div style={{color:'green'}}>translated</div>}
            </div>)}
        </div>
    </div>
}
export default AutoTranslateButton;