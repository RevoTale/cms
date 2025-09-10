/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

interface Args {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<Record<string, string | string[]>>
}

export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> =>
  await generatePageMetadata({ config, params, searchParams })

const NotFound = async ({ params, searchParams }: Args) =>
  await NotFoundPage({ config, params, searchParams, importMap })

export default NotFound
