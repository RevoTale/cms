'use client'
import {
    codeBlockPlugin,
    CodeMirrorEditor,
    codeMirrorPlugin,
    diffSourcePlugin,
    headingsPlugin,
    imagePlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    MDXEditor,
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

const RichTextMarkdownField: FunctionComponent<{ value: string;initialValue:string, setValue: (value: string) => void }> = ({value,setValue,initialValue}) => {
  const currentValue = typeof value === 'string' ? value : ''

  return (
    <div onClick={e=>{
      console.log(e)
    }} onSubmit={e=>{
      console.log(e,'form submit')
      e.preventDefault()
    }}>
      <MDXEditor 
      
      //lexicalTheme={lexicalTheme}
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
      imageUploadHandler: () => {
        return Promise.resolve('https://picsum.photos/200/300') //TODO - replace with actual upload logic
      },
      imageAutocompleteSuggestions: []
    }),
          sandpackPlugin(),
         
          codeBlockPlugin({ codeBlockEditorDescriptors: [{ priority: -10, match: (_) => true, Editor: CodeMirrorEditor }]}),
                  codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS' } }),

           diffSourcePlugin({ diffMarkdown:initialValue, viewMode: 'rich-text' }),
    toolbarPlugin({
      toolbarContents: () => (
        <KitchenSinkToolbar/>
      )
    }),  markdownShortcutPlugin(),

        ]}
      />
    </div>
  )
}

export default RichTextMarkdownField
