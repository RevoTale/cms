'use client'

import { Button, toast, useDocumentInfo } from '@payloadcms/ui'
import type { Data } from 'payload'
import type React from 'react'
import { useState } from 'react'
import generateImageWithSafeResp from './generateImageWithSafeResp'

const pickText = (value: unknown): string => {
	if (typeof value === 'string') {
		return value
	}

	if (!value || typeof value !== 'object') {
		return ''
	}

	for (const localizedValue of Object.values(value)) {
		if (typeof localizedValue === 'string' && localizedValue.trim().length > 0) {
			return localizedValue
		}
	}

	return ''
}

const getContentFromData = (data: Data): { content: string; hasSourceText: boolean } => {
	const title = pickText(data.title)
	const body = pickText(data.content)
	const hasSourceText = title.trim().length > 0 || body.trim().length > 0

	return {
		content: `
    Title: ${title}
    Content:
    ${body}`,
		hasSourceText,
	}
}

const GenerateImageButton: React.FC = () => {
	const { id, collectionSlug, data } = useDocumentInfo()
	const [loading, setLoading] = useState(false)

	// id and collectionSlug are undefined on create form
	if (!id || !collectionSlug || collectionSlug !== 'micro_posts' || !data) {
		return null
	}

	const { content, hasSourceText } = getContentFromData(data)

	const handleClick = async () => {
		if (loading) return
		if (!hasSourceText) {
			toast.error('Content is empty, cannot generate image.')
			return
		}

		setLoading(true)

		try {
			const result = await generateImageWithSafeResp({ id: id.toString(), collectionSlug, content })
			if (result.success) {
				toast.success('Image generated and attached!')
				return
			}

			toast.error(result.message)
		} catch (error: unknown) {
			toast.error(error instanceof Error ? error.message : 'Failed to generate image.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Button
			disabled={loading || Boolean(data.meta?.image) || !hasSourceText}
			onClick={(): void => {
				void handleClick()
			}}
		>
			{loading ? 'Generating...' : 'Generate Image'}
		</Button>
	)
}

export default GenerateImageButton
