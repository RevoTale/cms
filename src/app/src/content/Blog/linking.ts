import type {ParameterOptions} from 'next-navigation-utils'
import {pageType, stringType} from 'next-navigation-utils/parameters'
export const tagInURLOption: ParameterOptions<string[] | null> = {
	name: 'tag_name_in',
	decode: v => {
		if (Array.isArray(v)) {
			return v
		}
		if (typeof v === 'string') {
			return [v]
		}
		return null
	},
	encode: v => v,
}
export const singleTagOption: ParameterOptions<string | null> = {
	name: tagInURLOption.name,
	...stringType,
}
export const authorSlugInOption: ParameterOptions<string[]> = {
	name: 'author_slug_in',
	decode: v => {
		if (Array.isArray(v)) {
			return v
		}
		if (typeof v === 'string') {
			return [v]
		}
		return []
	},
	encode: v => v,
}
export const singleAuthorOption: ParameterOptions<string | null> = {
	name: authorSlugInOption.name,
	...stringType,
}
export const pageOption: ParameterOptions<number> = {
	name: 'page',
	...pageType,
}
