'use client'

import { $createCodeNode } from '@lexical/code'
import { TOGGLE_LINK_COMMAND } from '@lexical/link'
import {
	INSERT_CHECK_LIST_COMMAND,
	INSERT_ORDERED_LIST_COMMAND,
	INSERT_UNORDERED_LIST_COMMAND,
	REMOVE_LIST_COMMAND,
} from '@lexical/list'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import type { HeadingTagType } from '@lexical/rich-text'
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text'
import {
	$deleteTableColumnAtSelection,
	$deleteTableRowAtSelection,
	$getTableCellNodeFromLexicalNode,
	$insertTableColumnAtSelection,
	$insertTableRowAtSelection,
	$isTableSelection,
	INSERT_TABLE_COMMAND,
} from '@lexical/table'
import {
	$createTextNode,
	$getSelection,
	$isRangeSelection,
	FORMAT_TEXT_COMMAND,
	INSERT_PARAGRAPH_COMMAND,
	type TextFormatType,
} from 'lexical'
import type { MouseEvent } from 'react'
import { useCallback, useMemo } from 'react'

type TableEditAction =
	| 'insertRowAbove'
	| 'insertRowBelow'
	| 'deleteRow'
	| 'insertColumnLeft'
	| 'insertColumnRight'
	| 'deleteColumn'

interface ButtonConfig {
	key: string
	label: string
	title: string
	onClick: () => void
}

interface TableActionMeta {
	action: TableEditAction
	key: string
	label: string
	title: string
}

const HEADING_LEVELS: HeadingTagType[] = ['h1', 'h2', 'h3']

const TABLE_ACTION_META: TableActionMeta[] = [
	{
		action: 'insertRowAbove',
		key: 'table-row-add-before',
		label: 'Row +',
		title: 'Insert row above',
	},
	{
		action: 'insertRowBelow',
		key: 'table-row-add-after',
		label: 'Row + after',
		title: 'Insert row below',
	},
	{
		action: 'deleteRow',
		key: 'table-row-delete',
		label: 'Row del',
		title: 'Delete row',
	},
	{
		action: 'insertColumnLeft',
		key: 'table-col-add-before',
		label: 'Col +',
		title: 'Insert column left',
	},
	{
		action: 'insertColumnRight',
		key: 'table-col-add-after',
		label: 'Col + after',
		title: 'Insert column right',
	},
	{
		action: 'deleteColumn',
		key: 'table-col-delete',
		label: 'Col del',
		title: 'Delete column',
	},
]

const toolbarButtonClass =
	'rounded-md border border-slate-200 px-2.5 py-1 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800'

const infoButtonClass =
	'ml-auto rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800'

const markdownTooltip = [
	'# H1, ## H2, ### H3',
	'- List item / 1. Numbered',
	'> Blockquote',
	'`inline code` / ``` code block ```',
	'[link](https://example.com)',
	'--- Horizontal rule',
	'| table | syntax |',
	'**bold**, *italic*, ~~strike~~, __underline__',
].join('\n')

export const ToolbarPlugin = () => {
	const [editor] = useLexicalComposerContext()

	const insertParagraph = useCallback(() => {
		editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND, undefined)
	}, [editor])

	const insertHeading = useCallback(
		(tag: HeadingTagType) => {
			editor.update(() => {
				const selection = $getSelection()
				if (!$isRangeSelection(selection)) {
					return
				}

				const heading = $createHeadingNode(tag)
				heading.append($createTextNode(''))
				selection.insertNodes([heading])
			})
		},
		[editor],
	)

	const insertQuote = useCallback(() => {
		editor.update(() => {
			const selection = $getSelection()
			if (!$isRangeSelection(selection)) {
				return
			}

			const quote = $createQuoteNode()
			quote.append($createTextNode(''))
			selection.insertNodes([quote])
		})
	}, [editor])

	const insertCodeBlock = useCallback(() => {
		editor.update(() => {
			const selection = $getSelection()
			if (!$isRangeSelection(selection)) {
				return
			}

			const codeBlock = $createCodeNode()
			codeBlock.append($createTextNode(''))
			selection.insertNodes([codeBlock])
		})
	}, [editor])

	const promptForLink = useCallback(() => {
		// eslint-disable-next-line no-alert -- Lightweight admin prompt avoids introducing modal state for a simple URL input.
		const url = window.prompt('Enter URL', 'https://')
		if (url === null) {
			return
		}

		const trimmed = url.trim()
		editor.dispatchCommand(TOGGLE_LINK_COMMAND, trimmed === '' ? null : trimmed)
	}, [editor])

	const removeLink = useCallback(() => {
		editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
	}, [editor])

	const insertBulletList = useCallback(() => {
		editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
	}, [editor])

	const insertNumberedList = useCallback(() => {
		editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
	}, [editor])

	const insertChecklist = useCallback(() => {
		editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined)
	}, [editor])

	const clearListFormatting = useCallback(() => {
		editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
	}, [editor])

	const preventMouseDown = useCallback((event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}, [])

	const applyTextFormat = useCallback(
		(format: TextFormatType) => {
			editor.dispatchCommand(FORMAT_TEXT_COMMAND, format)
		},
		[editor],
	)

	const ensureTableSelection = useCallback(() => {
		const selection = $getSelection()
		if (selection === null) {
			return false
		}

		if ($isRangeSelection(selection)) {
			const cellFromAnchor = $getTableCellNodeFromLexicalNode(selection.anchor.getNode())
			return cellFromAnchor !== null
		}

		if ($isTableSelection(selection)) {
			return true
		}

		return false
	}, [])

	const handleTableInsert = useCallback(() => {
		editor.dispatchCommand(INSERT_TABLE_COMMAND, {
			columns: '3',
			rows: '3',
			includeHeaders: true,
		})
	}, [editor])

	const handleTableEdit = useCallback(
		(action: TableEditAction) => {
			editor.update(() => {
				if (!ensureTableSelection()) {
					return
				}

				switch (action) {
					case 'insertRowAbove':
						$insertTableRowAtSelection(false)
						break
					case 'insertRowBelow':
						$insertTableRowAtSelection(true)
						break
					case 'deleteRow':
						$deleteTableRowAtSelection()
						break
					case 'insertColumnLeft':
						$insertTableColumnAtSelection(false)
						break
					case 'insertColumnRight':
						$insertTableColumnAtSelection(true)
						break
					case 'deleteColumn':
						$deleteTableColumnAtSelection()
						break
				}
			})
		},
		[editor, ensureTableSelection],
	)

	const headingButtons = useMemo<ButtonConfig[]>(
		() =>
			HEADING_LEVELS.map(tag => {
				const level = Number(tag.slice(1))
				return {
					key: `heading-${tag}`,
					label: `H${level}`,
					title: `Heading ${level} (${Array(level).fill('#').join('')})`,
					onClick: () => {
						insertHeading(tag)
					},
				}
			}),
		[insertHeading],
	)

	const formatButtons = useMemo<ButtonConfig[]>(
		() => [
			{
				key: 'format-bold',
				label: 'B',
				title: 'Bold (**text**)',
				onClick: () => {
					applyTextFormat('bold')
				},
			},
			{
				key: 'format-italic',
				label: 'I',
				title: 'Italic (*text*)',
				onClick: () => {
					applyTextFormat('italic')
				},
			},
			{
				key: 'format-underline',
				label: 'U',
				title: 'Underline (__text__)',
				onClick: () => {
					applyTextFormat('underline')
				},
			},
			{
				key: 'format-strikethrough',
				label: 'S',
				title: 'Strikethrough (~~text~~)',
				onClick: () => {
					applyTextFormat('strikethrough')
				},
			},
			{
				key: 'format-inline-code',
				label: '</>',
				title: 'Inline code (`code`)',
				onClick: () => {
					applyTextFormat('code')
				},
			},
		],
		[applyTextFormat],
	)

	const listButtons = useMemo<ButtonConfig[]>(
		() => [
			{
				key: 'list-bullet',
				label: '• List',
				title: 'Bulleted list (-)',
				onClick: insertBulletList,
			},
			{
				key: 'list-numbered',
				label: '1.',
				title: 'Numbered list (1.)',
				onClick: insertNumberedList,
			},
			{
				key: 'list-check',
				label: '☑',
				title: 'Checklist ([ ] )',
				onClick: insertChecklist,
			},
			{
				key: 'list-clear',
				label: 'List ✕',
				title: 'Clear list formatting',
				onClick: clearListFormatting,
			},
		],
		[insertBulletList, insertChecklist, insertNumberedList, clearListFormatting],
	)

	const tableButtons = useMemo<ButtonConfig[]>(
		() => [
			{
				key: 'table-insert',
				label: 'Table',
				title: 'Insert table',
				onClick: handleTableInsert,
			},
			...TABLE_ACTION_META.map(({ action, key, label, title }) => ({
				key,
				label,
				title,
				onClick: () => {
					handleTableEdit(action)
				},
			})),
		],
		[handleTableEdit, handleTableInsert],
	)

	const allButtons = useMemo<ButtonConfig[]>(
		() => [
			{
				key: 'paragraph',
				label: 'P',
				title: 'Paragraph',
				onClick: insertParagraph,
			},
			...headingButtons,
			{
				key: 'quote',
				label: '❝',
				title: 'Blockquote (>)',
				onClick: insertQuote,
			},
			...formatButtons,
			{
				key: 'code-block',
				label: 'Code',
				title: 'Code block (``` )',
				onClick: insertCodeBlock,
			},
			...listButtons,
			{
				key: 'link-insert',
				label: 'Link',
				title: 'Insert / edit link [text](url)',
				onClick: promptForLink,
			},
			{
				key: 'link-remove',
				label: 'Unlink',
				title: 'Remove link',
				onClick: removeLink,
			},
			...tableButtons,
		],
		[
			formatButtons,
			headingButtons,
			insertCodeBlock,
			insertParagraph,
			insertQuote,
			listButtons,
			promptForLink,
			removeLink,
			tableButtons,
		],
	)

	const renderButton = ({ key, label, title, onClick }: ButtonConfig) => (
		<button
			key={key}
			type="button"
			className={toolbarButtonClass}
			onMouseDown={preventMouseDown}
			onClick={onClick}
			title={title}
		>
			{label}
		</button>
	)

	return (
		<div className="mb-4 flex flex-wrap items-center gap-2 rounded-md border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
			{allButtons.map(renderButton)}
			<button type="button" className={infoButtonClass} onMouseDown={preventMouseDown} title={markdownTooltip}>
				ℹ︎ Markdown cheatsheet
			</button>
		</div>
	)
}

export default ToolbarPlugin
