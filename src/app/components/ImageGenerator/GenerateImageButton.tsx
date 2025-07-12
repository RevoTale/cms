'use client'

import { Button, toast, useDocumentInfo } from '@payloadcms/ui'
import React, { useState } from 'react'
import { generateImage } from './generateImage'

const GenerateImageButton: React.FC = () => {
  const { id, collectionSlug, savedDocumentData,initialData } = useDocumentInfo()
  const [loading, setLoading] = useState(false)

  // id and collectionSlug are undefined on create form
  if (!id || !collectionSlug || collectionSlug !== 'micro_posts' || !savedDocumentData) {
    return null
  }


    const content = savedDocumentData.content || initialData?.content || ''

    const handleClick = async () => {
    if (content === '') {
      throw new Error('Content is empty, cannot generate image')
    }
    if (loading) return
    setLoading(true)
    try {
      await generateImage({ id: id.toString(), collection: collectionSlug, content   })
      toast.success('Image generated and attached!')
    } catch (error: unknown) {

      const msg = error instanceof Error ? error.message : String(error)
      toast.error(`Error: ${msg}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button   disabled={loading || Boolean(savedDocumentData.meta?.image) || content === ''} onClick={handleClick} >
      {loading ? 'Generating...' : 'Generate Image'}
    </Button>
  )
}

export default GenerateImageButton