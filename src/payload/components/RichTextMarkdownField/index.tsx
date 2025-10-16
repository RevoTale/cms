'use client'
import { useField } from '@payloadcms/ui'
import dynamic from 'next/dynamic'
import type { TextareaFieldClientComponent } from 'payload'
import { Suspense } from 'react'
const MDXNoSSG = dynamic(() => import('./MDXNoSSG'), { ssr: false })

const RichTextMarkdownField: TextareaFieldClientComponent = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const currentValue = typeof value === 'string' ? value : ''

  return (
   <Suspense fallback={<div>Loading editor...</div>}>
     <MDXNoSSG value={currentValue} setValue={setValue} />
   </Suspense>
  )
}

export default RichTextMarkdownField
