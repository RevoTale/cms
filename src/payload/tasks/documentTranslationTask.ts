import type { TaskConfig } from 'payload'
import { locales } from 'src/i18n-config'
import translateHandler from './translate/translateHandler'

const documentTranslationTask = {
	retries: 1,
	slug: 'translateDocument',
	inputSchema: [
		{
			name: 'postID',
			type: 'text',
			required: true,
		},
		{
			name: 'sourceLocale',
			type: 'select',
			options: locales.map(locale => {
				return { label: locale, value: locale }
			}),
			required: true,
		},
		{
			name: 'collection',
			type: 'text',
			required: true,
		},
		{
			name: 'userId',
			type: 'text',
			required: false,
		},
		{
			name: 'targetLocale',
			type: 'select',
			options: locales.map(locale => {
				return { label: locale, value: locale }
			}),
			required: true,
		},
	],
	handler: translateHandler,
} as TaskConfig<'translateDocument'>
export default documentTranslationTask
