'use client'
import { Button, useConfig, useDocumentInfo, useLocale } from "@payloadcms/ui";
import { TypedLocale } from "payload";
import { FunctionComponent, useState, useTransition } from "react";
import { autoTranslate } from "./autoTranslate";


const AutoTranslateButton:FunctionComponent= () => {
  const { id,collectionSlug, } = useDocumentInfo()
 const {config:{localization}}= useConfig()
const targetLocale = useLocale().code

  const [isPending, startTransition]  = useTransition()
const [pendingLocale,setPendingLocale] = useState<string|null>(null)
const [results,setResults] = useState<{
  locale:string
  error:string|null
}[]>([])
  // id will be undefined on the create form
  if (!id || !collectionSlug || !localization) {
    return null
  }
  const sourceLocale = localization.defaultLocale
  const handleSubmit = ()=>{
    startTransition(async ()=>{
      try {
        setPendingLocale(targetLocale)
        const result = await autoTranslate({
            docId: id.toString(),
            collection: collectionSlug,
            targetLocale: targetLocale as TypedLocale,
            sourceLocale: sourceLocale as TypedLocale
        })
        if (result.ok === false) {
          setResults(prev=>[...prev,{locale:targetLocale,error:result.error}])

        } else {
        setResults(prev=>[...prev,{locale:targetLocale,error:null}])
        }
      } catch (error:unknown) {
         setResults(prev=>[...prev,{locale:targetLocale,error:error instanceof Error ? error.message : 'Unknown error'}])
      }
    })
  }
    return <div>
        <Button onClick={handleSubmit} disabled={isPending} type="submit">{isPending?`Translating to ${pendingLocale}...`:`Auto Translate from ${sourceLocale}`}</Button>
        <div>
            {results.map((result,index)=><div key={index} className="flex gap-2">
                <div>{result.locale}: </div>{result.error ? <div style={{color:'red'}}>{result.error}</div>:<div style={{color:'green'}}>translated</div>}
            </div>)}
        </div>
    </div>
}
export default AutoTranslateButton;