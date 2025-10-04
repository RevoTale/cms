import type { TaskHandler, TypedLocale } from "payload";
import autoTranslate from "./autoTranslate";

const translateHandler:TaskHandler<'translateDocument'> =async ({ input, job, req }) => {
  
            const {localization} = req.payload.config
              if (!localization) {
                throw new Error('Localization is not enabled')
              }
              const { targetLocale,sourceLocale,collection } = input
              const {locales} = localization
              if (!locales.map((l) => l.code).includes(targetLocale)) {
                throw new Error(`Target locale ${targetLocale} is not in the list of locales`)
              }
                 if (!locales.map((l) => l.code).includes(sourceLocale)) {
                throw new Error(`Source locale ${sourceLocale} is not in the list of locales`)
              }
              const { collections } = req.payload
              if (!collections[collection as keyof typeof collections]) {
                throw new Error(`Collection ${collection} does not exist`)
              }

             await autoTranslate({
                docId: input.postID,
                collection: collection as keyof typeof collections,
                sourceLocale: sourceLocale as TypedLocale,
                targetLocale: targetLocale as TypedLocale,
                payload: req.payload,
                userId:  input.userId,
              })
          return {
            output: {
            },
          }
        }
          export default translateHandler;