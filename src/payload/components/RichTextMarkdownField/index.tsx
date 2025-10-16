'use client'
import { useField } from '@payloadcms/ui'
import dynamic from 'next/dynamic'
import type { TextareaFieldClientComponent } from 'payload'
import { Suspense } from 'react'
const MDXNoSSG = dynamic(async () => await import('./MDXNoSSG'), { ssr: false })

const RichTextMarkdownField: TextareaFieldClientComponent = ({ path }) => {
  const { value, setValue, initialValue } = useField<string>({ path })
  const currentValue = typeof value === 'string' ? value : ''

  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <MDXNoSSG initialValue={initialValue ?? value} value={currentValue} setValue={setValue} />
    </Suspense>
  )
}

export default RichTextMarkdownField
