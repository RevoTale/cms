'use client'

import { Button, toast, useDocumentInfo } from '@payloadcms/ui'
import React, { useState } from 'react'
import { genImageSafe } from './generateImage'

const GenerateImageButton: React.FC = () => {
  const { id, collectionSlug, savedDocumentData, initialData } = useDocumentInfo()
  const [loading, setLoading] = useState(false)

  // id and collectionSlug are undefined on create form
  if (!id || !collectionSlug || collectionSlug !== 'micro_posts' || !savedDocumentData) {
    return null
  }

  const content = `
    Title: ${savedDocumentData.title || initialData?.title || ''}
    Content:
    ${savedDocumentData.content || initialData?.content || ''}`

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
      disabled={loading || Boolean(savedDocumentData.meta?.image) || content === ''}
      onClick={handleClick}
    >
      {loading ? 'Generating...' : 'Generate Image'}
    </Button>
  )
}

export default GenerateImageButton
