export const CODE_BLOCK_PLACEHOLDER = '⟨⟩abc123qewwewqewaefrewrqqwe'
export const TABLE_PLACEHOLDER = '⟪⟫def456ewrrqwer123123'
export const IMAGE_PLACEHOLDER = '⟬⟭ghi789rqweqwerrqew123123123213'
export const PLACEHOLDER_MAP: Record<
	string,
	'placeholder.codeBlock' | 'placeholder.table' | 'placeholder.image'
> = {
	[CODE_BLOCK_PLACEHOLDER]: 'placeholder.codeBlock',
	[TABLE_PLACEHOLDER]: 'placeholder.table',
	[IMAGE_PLACEHOLDER]: 'placeholder.image',
} as const
export type PlaceholderMapTranslationKeys = Record<
	keyof typeof PLACEHOLDER_MAP,
	string
>
