import {
	$convertFromMarkdownString,
	$convertToMarkdownString,
	ELEMENT_TRANSFORMERS,
	type ElementTransformer,
	MULTILINE_ELEMENT_TRANSFORMERS,
	TEXT_FORMAT_TRANSFORMERS,
	TEXT_MATCH_TRANSFORMERS,
	TRANSFORMERS,
	type Transformer,
} from '@lexical/markdown'
import {
	$createTableCellNode,
	$createTableNode,
	$createTableRowNode,
	$isTableCellNode,
	$isTableNode,
	$isTableRowNode,
	TableCellHeaderStates,
	TableCellNode,
	TableNode,
	TableRowNode,
} from '@lexical/table'
import type { ElementNode, LexicalNode } from 'lexical'
import { $createParagraphNode, $isParagraphNode, $isTextNode } from 'lexical'

const TABLE_ROW_REG_EXP = /^(?:\|)(.+)(?:\|)\s?$/v
const TABLE_ROW_DIVIDER_REG_EXP = /^(\| ?:?-*:? ?)+\|\s?$/v

const BASE_TRANSFORMERS: Transformer[] = [
	...ELEMENT_TRANSFORMERS,
	...MULTILINE_ELEMENT_TRANSFORMERS,
	...TEXT_FORMAT_TRANSFORMERS,
	...TEXT_MATCH_TRANSFORMERS,
]

const TABLE: ElementTransformer = {
	dependencies: [TableNode, TableRowNode, TableCellNode],
	export: (node: LexicalNode) => {
		if (!$isTableNode(node)) {
			return null
		}

		const rows: string[] = []

		for (const row of node.getChildren()) {
			if (!$isTableRowNode(row)) {
				continue
			}

			const cells: string[] = []
			let isHeaderRow = false

			for (const cell of row.getChildren()) {
				if (!$isTableCellNode(cell)) {
					continue
				}

				const cellMarkdown = $convertToMarkdownString(TRANSFORMERS, cell).replace(/\n/gv, '\\n').trim()
				cells.push(cellMarkdown)

				if (cell.__headerState === TableCellHeaderStates.ROW) {
					isHeaderRow = true
				}
			}

			rows.push(`| ${cells.join(' | ')} |`)

			if (isHeaderRow) {
				rows.push(`| ${cells.map(() => '---').join(' | ')} |`)
			}
		}

		return rows.join('\n')
	},
	regExp: TABLE_ROW_REG_EXP,
	replace: (parentNode, _1, match) => {
		const rawLine = match[0]
		if (handleHeaderDivider(parentNode, rawLine)) {
			return
		}

		const firstRowCells = mapToTableCells(rawLine)
		if (firstRowCells === null) {
			return
		}

		const { rows, maxColumns } = collectTableRows(parentNode, firstRowCells)
		const tableNode = buildTable(rows, maxColumns)
		insertTable(parentNode, tableNode, maxColumns)
		tableNode.selectEnd()
	},
	type: 'element',
}

const handleHeaderDivider = (parentNode: ElementNode, rawLine: string): boolean => {
	if (!TABLE_ROW_DIVIDER_REG_EXP.test(rawLine)) {
		return false
	}

	const precedingTable = parentNode.getPreviousSibling()
	if (!precedingTable || !$isTableNode(precedingTable)) {
		return true
	}

	const existingRows = precedingTable.getChildren()
	const lastRow = existingRows[existingRows.length - 1]
	if (!lastRow || !$isTableRowNode(lastRow)) {
		return true
	}

	lastRow.getChildren().forEach(cell => {
		if ($isTableCellNode(cell)) {
			cell.setHeaderStyles(TableCellHeaderStates.ROW, TableCellHeaderStates.ROW)
		}
	})

	parentNode.remove()
	return true
}

const collectTableRows = (
	parentNode: ElementNode,
	initialRow: TableCellNode[],
): { rows: TableCellNode[][]; maxColumns: number } => {
	const rows: TableCellNode[][] = [initialRow]
	let maxColumns = initialRow.length
	let sibling = parentNode.getPreviousSibling()

	while (sibling) {
		if (!$isParagraphNode(sibling) || sibling.getChildrenSize() !== 1) {
			break
		}

		const textChild = sibling.getFirstChild()
		if (!$isTextNode(textChild)) {
			break
		}

		const siblingCells = mapToTableCells(textChild.getTextContent())
		if (siblingCells === null) {
			break
		}

		maxColumns = Math.max(maxColumns, siblingCells.length)
		rows.unshift(siblingCells)
		const previous = sibling.getPreviousSibling()
		sibling.remove()
		sibling = previous
	}

	return { rows, maxColumns }
}

const buildTable = (rows: TableCellNode[][], maxColumns: number): TableNode => {
	const tableNode = $createTableNode()

	for (const rowCells of rows) {
		const rowNode = $createTableRowNode()
		tableNode.append(rowNode)

		for (let columnIndex = 0; columnIndex < maxColumns; columnIndex += 1) {
			rowNode.append(rowCells[columnIndex] ?? createEmptyTableCell())
		}
	}

	return tableNode
}

const insertTable = (parentNode: ElementNode, tableNode: TableNode, maxColumns: number) => {
	const previousSibling = parentNode.getPreviousSibling()
	if ($isTableNode(previousSibling) && getColumnCount(previousSibling) === maxColumns) {
		previousSibling.append(...tableNode.getChildren())
		parentNode.remove()
		return
	}

	parentNode.replace(tableNode)
}

const createTableCell = (rawText: string): TableCellNode => {
	const textContent = rawText.replace(/\\n/gv, '\n').trim()
	const cell = $createTableCellNode(TableCellHeaderStates.NO_STATUS)
	$convertFromMarkdownString(textContent, BASE_TRANSFORMERS, cell)
	if (cell.getChildrenSize() === 0) {
		cell.append($createParagraphNode())
	}
	return cell
}

const createEmptyTableCell = (): TableCellNode => {
	const cell = $createTableCellNode(TableCellHeaderStates.NO_STATUS)
	cell.append($createParagraphNode())
	return cell
}

const mapToTableCells = (rawLine: string): TableCellNode[] | null => {
	const match = TABLE_ROW_REG_EXP.exec(rawLine)
	if (match === null || match[1] === null) {
		return null
	}

	return match[1].split('|').map(segment => createTableCell(segment))
}

const getColumnCount = (table: TableNode): number => {
	const firstRow = table.getFirstChild()
	return $isTableRowNode(firstRow) ? firstRow.getChildrenSize() : 0
}

export const MARKDOWN_TRANSFORMERS: Transformer[] = [TABLE, ...TRANSFORMERS]
