'use client'
import { Button, useDocumentInfo, useLocale } from "@payloadcms/ui";
import { TypedLocale } from "payload";
import { FunctionComponent, useTransition } from "react";
import { autoTranslate } from "./autoTranslate";


const AutoTranslateButton:FunctionComponent= () => {
  const { id,collectionSlug, } = useDocumentInfo()
  const  locale = useLocale()

const [isPending, startTransition]  = useTransition()

  // id will be undefined on the create form
  if (!id || !collectionSlug) {
    return null
  }
  const handleSubmit = ()=>{
    startTransition(()=>{
      autoTranslate({
            docId: id.toString(),
            collection: collectionSlug,
            locale: locale.code as TypedLocale
        })
    })
  }
    return <div>
        <Button onClick={handleSubmit} disabled={isPending} type="submit">Auto Translate</Button>
        {isPending ? <div>Translating...</div>:null}
    </div>
}
export default AutoTranslateButton;