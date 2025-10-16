'use client'
import { CodeNode } from '@lexical/code'
import { LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from '@lexical/markdown'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { useField } from '@payloadcms/ui'
import type { TextareaFieldClientComponent } from 'payload'

const RichTextMarkdownField: TextareaFieldClientComponent = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const currentValue = typeof value === 'string' ? value : ''

  return (
    <div>
      <LexicalComposer
        initialConfig={{
          namespace: 'MyEditor',
          onError: (error: Error) => {
            throw error
          },
          nodes: [
            HeadingNode,
            QuoteNode,
            ListNode,
            ListItemNode,
            CodeNode,
            LinkNode,
            TableNode,
            TableRowNode,
            TableCellNode,
          ],
          editable: true,
          editorState: () => {
            if (currentValue) {
              $convertFromMarkdownString(currentValue, TRANSFORMERS)
            }
          },
        }}
      >
        <RichTextPlugin
          contentEditable={<ContentEditable className="min-h-[200px] outline-none" />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin
          onChange={(editorState) => {
            editorState.read(() => {
              const markdown = $convertToMarkdownString(TRANSFORMERS)
              if (markdown !== currentValue) {
                setValue(markdown)
              }
            })
          }}
        />
        <HistoryPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </LexicalComposer>
    </div>
  )
}

export default RichTextMarkdownField
