// collections/Tags.js
import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

const AICallLogs: CollectionConfig = {
	slug: 'ai_call_logs',
	labels: {
		singular: 'AI Call Log',
		plural: 'AI Call Logs',
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: authenticated,
		update: authenticated,
	},
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			label: 'Title',
			localized: false,
		},
		{
			name: 'input',
			type: 'text',
			required: true,
			label: 'Input',
			localized: false,
		},
		{
			name: 'output',
			type: 'text',
			required: true,
			label: 'Output',
			localized: false,
		},
		{
			name: 'execution_time',
			type: 'number',
			required: true,
			label: 'Execution Time (s)',
			localized: false,
		},
		{
			name: 'user',
			type: 'relationship',
			relationTo: 'users',
			required: false,
			hasMany: false,
			localized: false,
		},
	],
}

export default AICallLogs
