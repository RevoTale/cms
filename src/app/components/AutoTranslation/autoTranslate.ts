'use server'

import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { type CollectionSlug, getPayload, type TypedLocale } from 'payload'

export interface Context {
	id: string
	collection: CollectionSlug
	data: Record<string, unknown>
	targetLocale: TypedLocale
}

const autoTranslateTask = async ({
	docId,
	collection,
	targetLocale,
	sourceLocale,
}: {
	docId: string
	collection: CollectionSlug
	targetLocale: TypedLocale
	sourceLocale: TypedLocale
}): Promise<
	| {
			ok: true
			processing?: boolean
			completedAt?: string
	  }
	| { error: string; ok: false; context?: Context }
> => {
	const payload = await getPayload({ config })
	const headers = await getHeaders()
	const { user } = await payload.auth({ headers })

	if (user) {
		const task = await payload.jobs.queue<'translateDocument'>({
			task: 'translateDocument',
			input: {
				targetLocale,
				postID: docId,
				sourceLocale,
				collection,
				userId: user.id,
			},
		})
		if (task.hasError) {
			return {
				ok: false,
				error: 'Unknown error',
			}
		}
		return {
			ok: true,
		}
	}
	return {
		ok: false,
		error: 'User not authenticated',
	}
}

export default autoTranslateTask
