/* eslint-disable no-param-reassign -- Translation traversal mutates accumulator objects while walking nested field trees. */
import OpenAI from 'openai'
import type { BasePayload, CollectionSlug, DataFromCollectionSlug, Field, TypedLocale } from 'payload'

interface TranslationData {
	[key: string]: string | TranslationData
}

interface LocalizedTextFieldMatch {
	text: string
	maxLength: number | undefined
}

interface FieldLengthConstraint {
	path: string
	maxLength: number
}

const AUTO_TRANSLATION_UPDATE_CONTEXT_FLAG = 'isAutoTranslationUpdate'

interface TranslateDataProps {
	data: TranslationData
	targetLocale: TypedLocale
	sourceLocale: TypedLocale
	context: Record<string, unknown>
	requiredPaths: string[]
	maxLengthByPath: FieldLengthConstraint[]
}

export interface AutoTranslateProps {
	docId: string
	collection: CollectionSlug
	targetLocale: TypedLocale
	sourceLocale: TypedLocale
	payload: BasePayload
	userId?: string
}

const msInS = 1000

const isRecord = (value: unknown): value is Record<string, unknown> => {
	return typeof value === 'object' && value !== null && !Array.isArray(value)
}

const toDotPath = (segments: string[]): string => {
	return segments.join('.')
}

const getLocalizedTextFieldMatch = (field: Field, key: string, value: unknown): LocalizedTextFieldMatch | null => {
	if (
		(field.type === 'text' || field.type === 'textarea') &&
		field.localized === true &&
		field.name === key &&
		typeof value === 'string'
	) {
		return {
			text: value,
			maxLength: field.maxLength,
		}
	}

	return null
}

const collectTranslatableFields = (
	fields: Field[],
	source: Record<string, unknown>,
	targetData: TranslationData,
	currentPath: string[],
	requiredPaths: string[],
	maxLengthByPath: Map<string, number>,
): void => {
	for (const [key, value] of Object.entries(source)) {
		for (const field of fields) {
			const localizedFieldMatch = getLocalizedTextFieldMatch(field, key, value)
			if (localizedFieldMatch !== null) {
				targetData[key] = localizedFieldMatch.text
				const path = toDotPath([...currentPath, key])
				requiredPaths.push(path)

				if (typeof localizedFieldMatch.maxLength === 'number' && localizedFieldMatch.maxLength > 0) {
					maxLengthByPath.set(path, localizedFieldMatch.maxLength)
				}
				continue
			}

			if (field.type !== 'tabs') {
				continue
			}

			for (const tab of field.tabs) {
				if (!('name' in tab) || tab.name !== key || !isRecord(value)) {
					continue
				}

				const nestedTarget: TranslationData = {}
				collectTranslatableFields(
					tab.fields,
					value,
					nestedTarget,
					[...currentPath, key],
					requiredPaths,
					maxLengthByPath,
				)

				if (Object.keys(nestedTarget).length > 0) {
					targetData[key] = nestedTarget
				}
			}
		}
	}
}

const buildDataTemplate = (data: TranslationData): TranslationData => {
	const template: TranslationData = {}

	for (const [key, value] of Object.entries(data)) {
		template[key] = typeof value === 'string' ? '<string>' : buildDataTemplate(value)
	}

	return template
}

const buildTranslationInstructions = ({
	data,
	requiredPaths,
	maxLengthByPath,
}: Pick<TranslateDataProps, 'data' | 'requiredPaths' | 'maxLengthByPath'>): string => {
	const dynamicFormat = JSON.stringify(
		{
			data: buildDataTemplate(data),
			targetLocale: '<BCP-47 code>',
			sourceLocale: '<BCP-47 code>',
			maxLength: '<number|null>',
			context: '<encoded JSON string>',
		},
		null,
		2,
	)
	const requiredPathsList = JSON.stringify(requiredPaths, null, 2)
	const maxLengthList = JSON.stringify(maxLengthByPath, null, 2)

	return `You are a professional human translator.

You will receive one JSON object with this dynamic format:
${dynamicFormat}

### Task
Translate all string fields inside top-level \`data\` from \`sourceLocale\` to \`targetLocale\`.

### Mandatory rules
1. If \`sourceLocale\` === \`targetLocale\`, return \`data\` unchanged.
2. Translate each string exactly once while preserving tone, punctuation, and existing line breaks.
3. Keep markdown/HTML tags, inline code, and placeholders (e.g. \`{variable}\`, \`{{handlebars}}\`, \`%placeholder%\`) exactly unchanged.
4. Keep object structure and keys exactly the same as input \`data\`.
5. Never add, remove, or rename fields.
6. Do not translate anything inside \`context\`; use it only for meaning and constraints.
7. Keep numerals, units, currencies, and dates unchanged unless explicit locale conversion is requested.
8. Preserve capitalization unless target-language grammar requires adjustment.

### Dynamic constraints
- Required translated field paths:
${requiredPathsList}
- Per-field max length constraints from context (Unicode character count):
${maxLengthList}
- Apply top-level \`maxLength\` only if it is a positive number.

### Output
- Return ONLY a valid JSON object representing translated \`data\`.
- Do not include wrapper keys like \`data\`, \`targetLocale\`, \`sourceLocale\`, \`maxLength\`, or \`context\`.
- Do not add markdown fences or commentary.`
}

const normalizeJsonOutput = (rawOutput: string): string => {
	const trimmedOutput = rawOutput.trim()
	const fencedMatch = trimmedOutput.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i)
	if (fencedMatch?.[1]) {
		return fencedMatch[1].trim()
	}

	return trimmedOutput
}

const parseTranslatedData = (rawOutput: string): TranslationData => {
	const normalizedOutput = normalizeJsonOutput(rawOutput)
	let parsedOutput: unknown

	try {
		parsedOutput = JSON.parse(normalizedOutput)
	} catch {
		throw new Error('OpenAI translation output is not valid JSON.')
	}

	if (!isRecord(parsedOutput)) {
		throw new Error('OpenAI translation output must be a JSON object.')
	}

	return parsedOutput as TranslationData
}

const getValueByPath = (source: TranslationData, dotPath: string): unknown => {
	const segments = dotPath.split('.')
	let currentValue: unknown = source

	for (const segment of segments) {
		if (!isRecord(currentValue) || !(segment in currentValue)) {
			return undefined
		}
		currentValue = currentValue[segment]
	}

	return currentValue
}

const countUnicodeCharacters = (value: string): number => {
	return [...value].length
}

const validateTranslatedDataShape = (expected: TranslationData, actual: unknown): void => {
	const errors: string[] = []

	const validateNode = (expectedNode: string | TranslationData, actualNode: unknown, path: string): void => {
		if (typeof expectedNode === 'string') {
			if (typeof actualNode !== 'string') {
				errors.push(`Field "${path}" must be a string.`)
			}
			return
		}

		if (!isRecord(actualNode)) {
			errors.push(`Field "${path || '<root>'}" must be an object.`)
			return
		}

		const expectedKeys = Object.keys(expectedNode)
		const actualKeys = Object.keys(actualNode)

		for (const key of actualKeys) {
			if (!(key in expectedNode)) {
				const fieldPath = path === '' ? key : `${path}.${key}`
				errors.push(`Unexpected field "${fieldPath}" in translated output.`)
			}
		}

		for (const key of expectedKeys) {
			const fieldPath = path === '' ? key : `${path}.${key}`
			if (!(key in actualNode)) {
				errors.push(`Missing field "${fieldPath}" in translated output.`)
				continue
			}

			validateNode(expectedNode[key], actualNode[key], fieldPath)
		}
	}

	validateNode(expected, actual, '')

	if (errors.length > 0) {
		throw new Error(`Invalid translation output shape:\n${errors.join('\n')}`)
	}
}

const validateMaxLengths = (data: TranslationData, maxLengthByPath: FieldLengthConstraint[]): void => {
	const errors: string[] = []

	for (const { path, maxLength } of maxLengthByPath) {
		const value = getValueByPath(data, path)
		if (typeof value !== 'string') {
			errors.push(`Field "${path}" is missing or is not a string for max length validation.`)
			continue
		}

		if (countUnicodeCharacters(value) > maxLength) {
			errors.push(`Field "${path}" exceeds maxLength ${maxLength}.`)
		}
	}

	if (errors.length > 0) {
		throw new Error(`Invalid translation output max length constraints:\n${errors.join('\n')}`)
	}
}

const translateData = async ({
	data,
	targetLocale,
	sourceLocale,
	context,
	requiredPaths,
	maxLengthByPath,
}: TranslateDataProps): Promise<TranslationData> => {
	if (sourceLocale === targetLocale) {
		return data
	}

	const key = process.env.OPENAI_API_KEY
	if (!key) {
		throw new Error('OpenAI API key is not initialized')
	}

	const client = new OpenAI({
		apiKey: key,
	})

	const instructions = buildTranslationInstructions({
		data,
		requiredPaths,
		maxLengthByPath,
	})

	const message = {
		data,
		targetLocale,
		sourceLocale,
		maxLength: null,
		context: JSON.stringify(context),
	}

	const response = await client.responses.create({
		model: 'gpt-5.2',
		text: {
			verbosity: 'medium',
		},
		reasoning: {
			effort: 'high',
		},
		instructions,
		input: JSON.stringify(message),
	})

	const translatedData = parseTranslatedData(response.output_text)
	validateTranslatedDataShape(data, translatedData)
	validateMaxLengths(translatedData, maxLengthByPath)

	return translatedData
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

	const dataToTranslate: TranslationData = {}
	const requiredPaths: string[] = []
	const maxLengthByPath = new Map<string, number>()

	collectTranslatableFields(
		fields,
		post as unknown as Record<string, unknown>,
		dataToTranslate,
		[],
		requiredPaths,
		maxLengthByPath,
	)

	if (Object.entries(dataToTranslate).length === 0) {
		throw new Error('No translatable fields found or translation resulted in no changes.')
	}

	const constraints: FieldLengthConstraint[] = Array.from(maxLengthByPath.entries()).map(([path, maxLength]) => {
		return { path, maxLength }
	})

	payload.logger.info(
		`Starting batched translation for document ${docId} in collection ${collection} to locale ${targetLocale}.`,
	)

	const timeStart = Date.now()
	const translatedData = await translateData({
		data: dataToTranslate,
		targetLocale,
		sourceLocale,
		requiredPaths,
		maxLengthByPath: constraints,
		context: {
			requiredPaths,
			maxLengthByPath: constraints,
			[collection]: post,
		},
	})

	await payload.create({
		collection: 'ai_call_logs',
		data: {
			title: `Translated fields for ${collection}:${docId}`,
			input: JSON.stringify(dataToTranslate),
			output: JSON.stringify(translatedData),
			user: userId || undefined,
			execution_time: (Date.now() - timeStart) / msInS,
		},
	})

	payload.logger.info(
		`Finished translation for document ${docId} in collection ${collection} to locale ${targetLocale}`,
	)

	await payload.update({
		locale: targetLocale,
		id: docId,
		collection,
		data:
			collection === 'micro_posts'
				? ({
						...(translatedData as Record<string, unknown>),
						autoTranslated: true,
					} as Partial<DataFromCollectionSlug<'micro_posts'>>)
				: translatedData,
		context:
			collection === 'micro_posts'
				? {
						[AUTO_TRANSLATION_UPDATE_CONTEXT_FLAG]: true,
					}
				: undefined,
	})
}

export default autoTranslate
