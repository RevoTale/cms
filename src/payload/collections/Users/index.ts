import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

const toCookieDomain = (value: string | undefined): string | undefined => {
	if (!value || value.length === 0) {
		return undefined
	}

	const trimmedValue = value.trim()

	if (trimmedValue.length === 0) {
		return undefined
	}

	if (trimmedValue.startsWith('.')) {
		return trimmedValue
	}

	const maybeDomain = (() => {
		try {
			return new URL(trimmedValue).hostname
		} catch {
			return trimmedValue
		}
	})()

	if (maybeDomain === 'localhost' || maybeDomain === '127.0.0.1' || maybeDomain === '::1') {
		return undefined
	}

	return `.${maybeDomain}`
}

const authCookieDomain = toCookieDomain(
	process.env.PAYLOAD_AUTH_COOKIE_DOMAIN ??
		process.env.CMS_URL ??
		process.env.PAYLOAD_PUBLIC_SERVER_URL ??
		process.env.APP_URL,
)

const Users: CollectionConfig = {
	slug: 'users',
	access: {
		admin: authenticated,
		create: authenticated,
		delete: authenticated,
		read: authenticated,
		update: authenticated,
	},
	admin: {
		defaultColumns: ['name', 'email'],
		useAsTitle: 'name',
	},
	auth: {
		cookies: authCookieDomain ? { domain: authCookieDomain } : undefined,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
		},
	],

	timestamps: true,
}

export default Users
