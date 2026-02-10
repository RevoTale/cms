/* eslint-disable no-param-reassign -- Translation traversal mutates accumulator objects while walking nested field trees. */
import OpenAI from 'openai'
import type { BasePayload, CollectionSlug, DataFromCollectionSlug, Field, TypedLocale } from 'payload'

type RecursivePartial<T> = {
	[P in keyof T]?: RecursivePartial<T[P]>
}
export interface AutoTranslateProps {
	docId: string
	collection: CollectionSlug
	targetLocale: TypedLocale
	sourceLocale: TypedLocale
	payload: BasePayload
	userId?: string
}
const translationInstruction = `You are a professional human translator.

You will receive **one** JSON object shaped like this:
{
  "content":      <string>,          // text to translate
  "targetLocale": <BCP-47 code>,     // e.g. "uk", "de-CH"
  "sourceLocale": <BCP-47 code>,     // e.g. "en", "fr-CA"
  "maxLength":    <number|null>,     // optional hard-character limit
  "context":      <object>           // extra metadata — NEVER translate. Provided in encoded JSON format.
}

### Task
Translate **only** the top-level \`content\` string from \`sourceLocale\` to \`targetLocale\`.

### Mandatory rules
1. If \`sourceLocale\` === \`targetLocale\`, return \`content\` unchanged.
2. Translate the string **once and only once**, preserving tone, voice, punctuation, rhythm, **and existing line breaks** (do *not* add or remove breaks).
3. Keep every markdown/HTML tag, inline code, and placeholder (e.g. \\\`{variable}\\\`, \\\`{{handlebars}}\\\`, \\\`%placeholder%\\\`) exactly as written.
4. **Length**  
   • When \`maxLength\` is a positive integer, the final string **must be ≤ that many Unicode characters** (count spaces, tags, and emojis).  
   • If \`maxLength\` is null/undefined, keep the translation ≤ 10 % longer than the source.  
   • If still over the limit, shorten non-essential modifiers first.
5. Do **not** alter numerals, units, currencies, or dates unless explicit locale conversion is requested.
6. Preserve the original capitalisation unless target-language grammar requires otherwise.
7. Figurative “power:” constructions → render idiomatically as *strength / capability / impact of <Term>*.
8. Maintain list bullets, links, and emojis verbatim.
9. When placeholders might need gender or plural agreement, pick a neutral formulation so the placeholder stays unchanged.

### Terminology & style
• Use standard, widely accepted equivalents for acronyms and technical terms; if none exist, keep the original.  
• Prefer natural collocations over literal word-for-word renderings.  
• Never leave any part untranslated except proper nouns intended to remain as-is.

### Output
- DO NOT wrap the result in JSON. No keys, no quotes, no commentary.
- IMPORTANT: Only use the top-level "content" field in the input object.
- ⚠️ Never extract or translate any "content" field from inside the "context" object or other nested structures. Use it only for better understanding of the meaning.
`
const msInS = 1000
const logLimit = 60
const translateFn = async (
	text: string,
	locale: TypedLocale,
	context: Record<string, unknown>,
	maxLen: number | undefined,
	sourceLocale: string,
	// eslint-disable-next-line @typescript-eslint/max-params -- no time
): Promise<string> => {
	const key = process.env.OPENAI_API_KEY
	const message = {
		content: text,
		targetLocale: locale,
		sourceLocale,
		maxLength: maxLen,
		context: JSON.stringify(context),
	}
	if (key === null) {
		throw new Error('OpenAI client is not initialized')
	}
	const client = new OpenAI({
		apiKey: key, // This is the default and can be omitted
	})

	const response = await client.responses.create({
		model: 'gpt-5.2',
		text: {
			verbosity: 'medium',
		},
		reasoning: {
			effort: 'high',
		},
		instructions: translationInstruction,
		input: JSON.stringify(message),
	})

	return response.output_text
}
const autoTranslate = async ({
	docId,
	collection,
	targetLocale,
	sourceLocale,
	payload,
	userId,
}: AutoTranslateProps): Promise<void> => {
	const post = await payload.findByID({
		collection,
		id: docId,
		locale: sourceLocale,
	})
	const { fields } = payload.collections[collection].config
	const dataToUpdate: RecursivePartial<typeof post> = {}
	const iterateOverFields = async (
		fields: Field[],
		obj: DataFromCollectionSlug<typeof collection>,
		data: Record<string, unknown>,
	) => {
		const tasks: Array<Promise<void>> = []
		for (const [key, value] of Object.entries(obj)) {
			for (const field of fields) {
				if (
					(field.type === 'text' || field.type === 'textarea') &&
					field.localized === true &&
					field.name === key &&
					typeof value === 'string'
				) {
					tasks.push(
						(async () => {
							payload.logger.info(`Translate field ${key} for ${post.id}: starting.`) // Log only the first 60 characters
							const timeStart = Date.now()
							const text = await translateFn(
								value,
								targetLocale,
								{
									[collection]: post,
								},
								field.maxLength,
								sourceLocale,
							)
							await payload.create({
								collection: 'ai_call_logs',
								data: {
									title: `Translated field ${key} for ${obj.id}`,
									input: value,
									output: text,
									user: userId || undefined,
									execution_time: (Date.now() - timeStart) / msInS,
								},
							})
							data[key] = text
							payload.logger.info(`Translated field ${key} for ${obj.id}: ${text.substring(0, logLimit)}`) // Log only the first 60 characters
						})(),
					)
				} else if (field.type === 'tabs') {
					for (const tab of field.tabs) {
						if ('name' in tab && tab.name === key) {
							const subObj = obj[key as keyof DataFromCollectionSlug<typeof collection>]
							// eslint-disable-next-line max-depth -- no time
							if (typeof subObj === 'object' && !Array.isArray(subObj) && subObj !== null) {
								data[key] = data[key] ?? {}
								tasks.push(iterateOverFields(tab.fields, subObj, data[key] as Record<string, unknown>))
							}
						}
					}
				}
			}
		}
		await Promise.all(tasks)
		const clearEmpty = (targetData: Record<string, unknown>) => {
			for (const fieldName of Object.keys(targetData)) {
				if (typeof targetData[fieldName] === 'object' && targetData[fieldName] !== null) {
					if (Object.keys(targetData[fieldName]).length === 0) {
						// eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- no time
						delete targetData[fieldName]
					} else {
						clearEmpty(targetData[fieldName] as Record<string, unknown>)
					}
				}
			}
		}
		clearEmpty(data)
	}
	await iterateOverFields(fields, post, dataToUpdate)
	payload.logger.info(
		`Finished translation for document ${docId} in collection ${collection} to locale ${targetLocale}`,
	)
	// Update the document with the translated data
	if (Object.entries(dataToUpdate).length === 0) {
		throw new Error('No translatable fields found or translation resulted in no changes.')
	}
	await payload.update({
		locale: targetLocale,
		id: docId,
		collection,
		data: dataToUpdate,
	})
}

export default autoTranslate
