export const toKebabCase = (string: string): string =>
	string
		.replace(/([a-z])([A-Z])/gv, '$1-$2')
		.replace(/\s+/gv, '-')
		.toLowerCase()
