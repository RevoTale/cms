import type { TaskHandler } from 'payload'
import autoTranslate from './autoTranslate'

function hasKey<T extends object>(obj: T, key: keyof T | string): key is keyof T {
	return key in obj
}

const translateHandler: TaskHandler<'translateDocument'> = async ({ input, job, req }) => {
	const { localization } = req.payload.config
	if (!localization) {
		throw new Error('Localization is not enabled')
	}
	const { targetLocale, sourceLocale, collection } = input

	const { collections } = req.payload

	if (!hasKey(collections, collection)) {
		throw new Error(`Collection ${collection} does not exist`)
	}

	await autoTranslate({
		docId: input.postID,
		collection,
		sourceLocale,
		targetLocale,
		payload: req.payload,
		userId: input.userId || undefined,
	})
	return {
		output: {},
	}
}
export default translateHandler
