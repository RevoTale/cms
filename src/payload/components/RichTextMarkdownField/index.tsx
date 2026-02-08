'use client'
import { useField } from '@payloadcms/ui'
import dynamic from 'next/dynamic'
import type { TextareaFieldClientComponent } from 'payload'
import { Suspense, useEffect } from 'react'

const SHORT_POST_MAX = 255

const getSiblingPath = (path: string, siblingFieldName: string): string => {
	const pathParts = path.split('.')
	pathParts[0] = siblingFieldName
	return pathParts.join('.')
}

const MDXNoSSG = dynamic(async () => await import('./MDXNoSSG'), { ssr: false })

const RichTextMarkdownField: TextareaFieldClientComponent = ({ path }) => {
	const postTypePath = getSiblingPath(path, 'post_type')
	const titlePath = getSiblingPath(path, 'title')
	const { value, setValue, initialValue } = useField<string>({ path })
	const { value: postType, setValue: setPostType } = useField<'short' | 'long'>({
		path: postTypePath,
	})
	const { value: title } = useField<string>({ path: titlePath })
	const currentValue = typeof value === 'string' ? value : ''
	const titleValue = typeof title === 'string' ? title.trim() : ''
	const currentLength = currentValue.length
	const nextPostType = currentLength < SHORT_POST_MAX ? 'short' : 'long'
	const isLongPost = nextPostType === 'long'
	const isTitleRequired = isLongPost
	const isTitleMissing = isTitleRequired && titleValue.length === 0

	useEffect(() => {
		if (postType !== nextPostType) {
			setPostType(nextPostType)
		}
	}, [nextPostType, postType, setPostType])

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
			<MDXNoSSG initialValue={initialValue ?? value} value={currentValue} setValue={setValue} />
		</Suspense>
	)
}

export default RichTextMarkdownField
