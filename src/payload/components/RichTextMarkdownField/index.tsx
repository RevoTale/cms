'use client'
import { useField, useWatchForm } from '@payloadcms/ui'
import dynamic from 'next/dynamic'
import type { TextareaFieldClientComponent } from 'payload'
import { Suspense, useCallback, useEffect, useState } from 'react'

const SHORT_POST_MAX = 255

const getSiblingPath = (path: string, siblingFieldName: string, fieldName?: string): string => {
	const pathParts = path.split('.')

	if (typeof fieldName === 'string' && fieldName.length > 0) {
		for (let index = pathParts.length - 1; index >= 0; index -= 1) {
			if (pathParts[index] === fieldName) {
				pathParts[index] = siblingFieldName
				return pathParts.join('.')
			}
		}
	}

	if (pathParts.length > 0) {
		pathParts[pathParts.length - 1] = siblingFieldName
	}

	return pathParts.join('.')
}

const MDXNoSSG = dynamic(async () => await import('./MDXNoSSG'), { ssr: false })

const RichTextMarkdownField: TextareaFieldClientComponent = ({ path, field }) => {
	const fieldName = 'name' in field && typeof field.name === 'string' ? field.name : undefined
	const postTypePath = getSiblingPath(path, 'post_type', fieldName)
	const { getDataByPath, getSiblingData } = useWatchForm()
	const { setValue, initialValue } = useField<string>({ path })
	const { setValue: setPostType } = useField<'short' | 'long'>({
		path: postTypePath,
	})
	const watchedValue = getDataByPath<string>(path)
	const siblingData = getSiblingData(path)
	const postType =
		siblingData.post_type === 'short' || siblingData.post_type === 'long' ? siblingData.post_type : undefined
	const title = typeof siblingData.title === 'string' ? siblingData.title : undefined
	const [editorValue, setEditorValue] = useState<string>(typeof watchedValue === 'string' ? watchedValue : '')
	const currentValue = editorValue
	const titleValue = typeof title === 'string' ? title.trim() : ''
	const currentLength = currentValue.length
	const nextPostType = currentLength < SHORT_POST_MAX ? 'short' : 'long'
	const isLongPost = nextPostType === 'long'
	const isTitleRequired = isLongPost
	const isTitleMissing = isTitleRequired && titleValue.length === 0

	useEffect(() => {
		const nextValue = typeof watchedValue === 'string' ? watchedValue : ''
		setEditorValue(prev => (prev === nextValue ? prev : nextValue))
	}, [watchedValue])

	useEffect(() => {
		if (postType !== nextPostType) {
			setPostType(nextPostType)
		}
	}, [nextPostType, postType, setPostType])

	const handleValueChange = useCallback(
		(nextValue: string) => {
			setEditorValue(nextValue)
			setValue(nextValue)
		},
		[setValue],
	)

	return (
		<Suspense fallback={<div>Loading editor...</div>}>
			<div
				style={{
					marginBottom: 8,
					padding: 8,
					borderRadius: 6,
					border: '1px solid var(--theme-elevation-150)',
					background: isLongPost ? 'var(--theme-warning-100)' : 'var(--theme-elevation-50)',
					display: 'grid',
					gap: 6,
				}}
			>
				<div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
					<strong>Post type: {nextPostType === 'long' ? 'Long' : 'Short'}</strong>
					<span>{currentLength} chars</span>
				</div>
				<div>
					{isLongPost
						? `Limit hit (${SHORT_POST_MAX}+). This post is now Long.`
						: `Switches to Long at ${SHORT_POST_MAX} characters.`}
				</div>
				{isTitleMissing && (
					<div style={{ color: 'var(--theme-error-500)', fontWeight: 600 }}>Title is required for long posts.</div>
				)}
			</div>
			<MDXNoSSG initialValue={initialValue ?? currentValue} value={currentValue} setValue={handleValueChange} />
		</Suspense>
	)
}

export default RichTextMarkdownField
