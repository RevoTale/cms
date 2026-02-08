import { searchPlugin } from '@payloadcms/plugin-search'
import beforeSync from './utils/beforeSync'

const createSearchPlugin = () =>
	searchPlugin({
		localize: false,
		collections: ['micro_posts', 'tags', 'authors'],

		beforeSync,
		searchOverrides: {
			fields: ({ defaultFields }) => [
				...defaultFields,
				{
					name: 'excerpt',
					type: 'textarea',
					admin: {
						position: 'sidebar',
					},
				},
			],
		},
		defaultPriorities: {
			micro_posts: 10,
			tags: 15,
			authors: 20,
		},
	})
export default createSearchPlugin
