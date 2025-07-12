'use client'

import { Button, toast, useDocumentInfo } from '@payloadcms/ui'
import React, { useState } from 'react'
import { generateImage } from './generateImage'

const GenerateImageButton: React.FC = () => {
  const { id, collectionSlug, savedDocumentData } = useDocumentInfo()
  // id and collectionSlug are undefined on create form
  if (!id || !collectionSlug || collectionSlug !== 'micro_posts') {
    return null
  }


  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (loading) return
    setLoading(true)
    try {
      await generateImage({ id: id.toString(), collection: collectionSlug })
      toast.success('Image generated and attached!')
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error)
      toast.error(`Error: ${msg}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={loading || savedDocumentData.meta?.image} variant="primary">
      {loading ? 'Generating...' : 'Generate Image'}
    </Button>
  )
}

export default GenerateImageButton