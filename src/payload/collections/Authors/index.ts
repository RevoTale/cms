// collections/Tags.js
import type { CollectionConfig } from 'payload'
import { AutoTranslate } from 'src/payload/fields/autoTranslate'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { slugField } from '../../fields/slug'

const Authors: CollectionConfig = {
	slug: 'authors',
	labels: {
		singular: 'Author',
		plural: 'Authors',
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	admin: {
		useAsTitle: 'name',
	},
	fields: [
		AutoTranslate,
		{
			name: 'name',
			type: 'text',
			required: true,
			label: 'Author Name',
			maxLength: 32,
			localized: true,
		},
		slugField('name', {
			unique: true,
			required: true,
			localized: false,
		}),
		{
			name: 'twitter',
			label: 'Twitter',
			type: 'group',
			fields: [
				{
					name: 'apiKey',
					type: 'text',
				},
			],
		},
		{
			name: 'bio',
			type: 'text',
			localized: true,
		},
		{
			name: 'avatar',
			required: false,
			type: 'upload',
			relationTo: 'media',
			localized: false,
		},
		{
			name: 'user',
			type: 'relationship',
			relationTo: 'users',
			required: true,
			localized: false,
		},
	],
}

export default Authors
