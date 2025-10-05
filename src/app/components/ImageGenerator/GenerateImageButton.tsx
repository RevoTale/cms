'use client'

import { Button, toast, useDocumentInfo } from '@payloadcms/ui'
import type { Data } from 'payload'
import React, { useState } from 'react'
import { genImageSafe } from './generateImage'

const getContentFromData = (data: Data) => `
    Title: ${data.title || data?.title || ''}
    Content:
    ${data.content || data?.content || ''}`
const GenerateImageButton: React.FC = () => {
  const { id, collectionSlug, data, initialData } = useDocumentInfo()
  const [loading, setLoading] = useState(false)

  // id and collectionSlug are undefined on create form
  if (!id || !collectionSlug || collectionSlug !== 'micro_posts' || !data) {
    return null
  }

  const content = getContentFromData(initialData ?? data)

  const handleClick = async () => {
    if (content === '') {
      throw new Error('Content is empty, cannot generate image')
    }
    if (loading) return
    setLoading(true)
    const result = await genImageSafe({ id: id.toString(), collectionSlug, content })
    if (result.success) {
      toast.success('Image generated and attached!')
    } else {
      throw new Error(result.message)
    }
    setLoading(false)
  }

  return (
    <Button
      disabled={loading || Boolean(data.meta?.image) || content === ''}
      onClick={()=>{
        void handleClick()
      }}
    >
      {loading ? 'Generating...' : 'Generate Image'}
    </Button>
  )
}

export default GenerateImageButton
