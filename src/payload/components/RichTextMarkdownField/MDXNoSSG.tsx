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
const lexicalTheme = {
  paragraph: 'mb-4 text-[1.05rem] leading-relaxed text-slate-800 md:text-lg dark:text-slate-200',
  heading: {
    h1: 'mb-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100',
    h2: 'mb-5 text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-100',
    h3: 'mb-4 text-2xl font-semibold text-slate-900 md:text-3xl dark:text-slate-100',
    h4: 'mb-3 text-xl font-semibold text-slate-900 md:text-2xl dark:text-slate-100',
    h5: 'mb-2 text-lg font-semibold text-slate-900 md:text-xl dark:text-slate-100',
    h6: 'mb-2 text-base font-semibold uppercase tracking-wide text-slate-600 md:text-lg dark:text-slate-300',
  },
  quote:
    'mb-6 border-l-4 border-sky-200/70 bg-sky-50/60 px-4 py-3 italic text-slate-700 dark:border-sky-400/60 dark:bg-sky-500/10 dark:text-slate-200',
  list: {
    listitem: 'mb-1 last:mb-0 text-[1.05rem] md:text-lg text-slate-800 dark:text-slate-200',
    ul: 'mb-4 list-disc list-inside space-y-2 text-[1.05rem] md:text-lg text-slate-800 dark:text-slate-200',
    ol: 'mb-4 list-decimal list-inside space-y-2 text-[1.05rem] md:text-lg text-slate-800 dark:text-slate-200',
    checklist: 'mb-4 space-y-2',
  },
  link: 'text-sky-600 underline underline-offset-2 transition-colors hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200',
  code: 'mb-4 block rounded-lg bg-slate-900 px-5 py-4 font-mono text-base text-slate-100 shadow-inner shadow-slate-950/40',
  codeHighlight: {
    atrule: 'text-pink-400',
    attr: 'text-sky-300',
    boolean: 'text-amber-300',
    builtin: 'text-violet-300',
    cdata: 'text-slate-400',
    char: 'text-emerald-300',
    comment: 'text-slate-500 italic',
    constant: 'text-amber-300',
    deleted: 'text-rose-400 line-through',
    doctype: 'text-slate-500',
    entity: 'text-emerald-300',
    function: 'text-sky-300',
    important: 'text-pink-400 font-semibold',
    inserted: 'text-emerald-300',
    keyword: 'text-pink-400',
    number: 'text-amber-300',
    operator: 'text-slate-200',
    prolog: 'text-slate-500',
    property: 'text-sky-300',
    punctuation: 'text-slate-300',
    regex: 'text-emerald-300',
    selector: 'text-pink-400',
    string: 'text-emerald-300',
    symbol: 'text-amber-300',
    tag: 'text-sky-300',
    url: 'text-sky-300 underline',
  },
  text: {
    bold: 'font-semibold text-slate-900 dark:text-slate-100',
    italic: 'italic',
    underline: 'underline underline-offset-2',
    strikethrough: 'line-through text-slate-500 dark:text-slate-400',
    code: 'rounded bg-slate-900/80 px-1.5 py-0.5 font-mono text-base text-slate-100',
  },
  horizontalRule: 'my-8 h-px border-0 bg-slate-200 dark:bg-slate-700',
  table:
    'w-full table-auto border border-slate-200 text-base text-slate-800 dark:border-slate-600 dark:text-slate-100',
  tableCell:
    'border border-slate-200 px-4 py-3 align-top text-base dark:border-slate-600 dark:text-slate-100',
  tableCellHeader:
    'border border-slate-200 bg-slate-100 px-4 py-3 font-semibold text-slate-700 dark:border-slate-600 dark:bg-slate-700/40 dark:text-slate-100',
  tableRow:
    'odd:bg-slate-50 even:bg-white hover:bg-slate-100/70 dark:odd:bg-slate-800 dark:even:bg-slate-900 dark:hover:bg-slate-800/80',
}

const RichTextMarkdownField: FunctionComponent<{ value: string;initialValue:string, setValue: (value: string) => void }> = ({value,setValue,initialValue}) => {
  const currentValue = typeof value === 'string' ? value : ''

  return (
    <div onClick={e=>{
      console.log(e)
    }} onSubmit={e=>{
      console.log(e,'form submit')
      e.preventDefault()
    }} className='dark-editor'>
      <MDXEditor lexicalTheme={lexicalTheme}
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
