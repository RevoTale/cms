'use client'
import { Button, useDocumentInfo, useLocale } from "@payloadcms/ui";
import { CollectionSlug, TypedLocale } from "payload";
import { FunctionComponent, useActionState } from "react";
import { autoTranslate } from "./autoTranslate";

const bakeBun = async (prev:null, formData:FormData) => {
  autoTranslate({
            docId: formData.get('id') as string,
            collection: formData.get('collection') as CollectionSlug,
            locale: formData.get('locale') as TypedLocale
        })
  return prev
};
const AutoTranslateButton:FunctionComponent= () => {
  const { id,collectionSlug, } = useDocumentInfo()
  const  locale = useLocale()


  const [_, translateAction,isPending] = useActionState(bakeBun,null );
  // id will be undefined on the create form
  if (!id || !collectionSlug) {
    return null
  }
    return <form action={translateAction}>
      <input type="hidden" name="id" value={id} />
        <input type="hidden" name="collection" value={collectionSlug} />
          <input type="hidden" name="locale" value={locale.code} />
        <Button disabled={isPending} type="submit">Auto Translate</Button>
        {isPending ? <div>Translating...</div>:null}
    </form>
}
export default AutoTranslateButton;