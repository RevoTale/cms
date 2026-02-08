'use client'
import {
	CodeMirrorEditor,
	codeBlockPlugin,
	codeMirrorPlugin,
	diffSourcePlugin,
	headingsPlugin,
	imagePlugin,
	linkDialogPlugin,
	linkPlugin,
	listsPlugin,
	MDXEditor,
	markdownShortcutPlugin,
	quotePlugin,
	sandpackPlugin,
	tablePlugin,
	thematicBreakPlugin,
	toolbarPlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import type { FunctionComponent } from 'react'
import './style.css'
import { KitchenSinkToolbar } from './Toolbar'

const RichTextMarkdownField: FunctionComponent<{
	value: string
	initialValue: string
	setValue: (value: string) => void
}> = ({ value, setValue, initialValue }) => {
	const currentValue = typeof value === 'string' ? value : ''

	return (
		<div
			onSubmit={e => {
				e.preventDefault()
			}}
		>
			<MDXEditor
				markdown={currentValue}
				onChange={setValue}
				plugins={[
					headingsPlugin(),
					linkPlugin(),
					linkDialogPlugin(),
					listsPlugin(),
					quotePlugin(),
					thematicBreakPlugin(),
					tablePlugin(),
					imagePlugin({
						imageUploadHandler: async () => await Promise.resolve('https://picsum.photos/200/300'), //TODO - replace with actual upload logic
						imageAutocompleteSuggestions: [],
					}),
					sandpackPlugin(),

					codeBlockPlugin({
						codeBlockEditorDescriptors: [{ priority: -10, match: _ => true, Editor: CodeMirrorEditor }],
					}),
					codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS' } }),

					diffSourcePlugin({ diffMarkdown: initialValue, viewMode: 'rich-text' }),
					toolbarPlugin({
						toolbarContents: () => <KitchenSinkToolbar />,
					}),
					markdownShortcutPlugin(),
				]}
			/>
		</div>
	)
}

export default RichTextMarkdownField
