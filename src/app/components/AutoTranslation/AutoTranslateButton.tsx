'use client'
import { Button, useConfig, useDocumentInfo, useLocale } from "@payloadcms/ui";
import { TypedLocale } from "payload";
import { FunctionComponent, useTransition } from "react";
import { autoTranslate } from "./autoTranslate";


const AutoTranslateButton:FunctionComponent= () => {
  const { id,collectionSlug, } = useDocumentInfo()
 const {config:{localization}}= useConfig()
const targetLocale = useLocale().code

  const [isPending, startTransition]  = useTransition()

  // id will be undefined on the create form
  if (!id || !collectionSlug || !localization) {
    return null
  }
  const sourceLocale = localization.defaultLocale
  const handleSubmit = ()=>{
    startTransition(()=>{
      autoTranslate({
            docId: id.toString(),
            collection: collectionSlug,
            targetLocale: targetLocale as TypedLocale,
            sourceLocale: sourceLocale as TypedLocale
        })
    })
  }
    return <div>
        <Button onClick={handleSubmit} disabled={isPending} type="submit">Auto Translate from {sourceLocale}</Button>
        {isPending ? <div>Translating...</div>:null}
    </div>
}
export default AutoTranslateButton;