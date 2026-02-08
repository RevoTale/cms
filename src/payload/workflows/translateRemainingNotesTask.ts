import type { Payload, WorkflowConfig } from 'payload'
import { defaultLocale, locales } from 'src/i18n-config'
import type { MicroPost } from 'src/payload-types'

const defaultLimit = 100
export const findOriginalLocalePosts = async (
	payload: Payload,
	locale: (typeof locales)[number],
	limit = defaultLimit,
) => {
	const posts = (
		await payload.find({
			collection: 'micro_posts',
			locale: defaultLocale, //this should be the original locale
			where: {
				[`content.${locale}`]: {
					exists: false,
				},
				content: {
					not_equals: '',
				},
				_status: {
					equals: 'published',
				},
				cronTranslationLocalesQueued: {
					not_equals: locale,
				},
			},
			limit,
		})
	).docs
	for (const post of posts) {
		//Validate twice to avoid money spend on AI
		if (post.cronTranslationLocalesQueued?.includes(locale) === true) {
			throw new Error(`BAD QUERY 1 ${locale}`)
		}
	}
	return posts
}
const updatePostsQueuedLocales = async (payload: Payload, posts: MicroPost[], locale: (typeof locales)[number]) =>
	await Promise.all(
		posts.map(
			async post =>
				await payload.update({
					collection: 'micro_posts',
					id: post.id,
					data: {
						cronTranslationLocalesQueued: [...(post.cronTranslationLocalesQueued || []), locale],
					},
				}),
		),
	)
const queueJobs = async (payload: Payload, updatedPosts: MicroPost[], locale: (typeof locales)[number]) => {
	for (const post of updatedPosts) {
		await payload.jobs.queue({
			task: 'translateDocument',
			input: {
				postID: post.id,
				collection: 'micro_posts',
				sourceLocale: 'en-US',
				targetLocale: locale,
				userId: undefined,
			},
		})
	}
}
const handler: WorkflowConfig['handler'] = async ({ req }) => {
	const { payload } = req

	for (const locale of locales) {
		const posts = await updatePostsQueuedLocales(payload, await findOriginalLocalePosts(payload, locale), locale)
		await queueJobs(payload, posts, locale)
	}
}
const translateRemainingNotesTask = {
	queue: 'default',
	retries: 1,
	schedule: [
		{
			cron: '0/10 * * * *', // Every 10 minutes
			queue: 'default',
		},
	],
	slug: 'localizeRemainedDocuments',
	label: 'Localize remained documents',
	handler,
}
export default translateRemainingNotesTask
