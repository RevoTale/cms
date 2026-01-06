import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from 'next'

const PAYLOAD_PUBLIC_SERVER_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL

const nextConfig: NextConfig = {
  images: {
    remotePatterns: PAYLOAD_PUBLIC_SERVER_URL ? [new URL(PAYLOAD_PUBLIC_SERVER_URL)] : [],
  },
  reactStrictMode: true,
  output: 'standalone',
}

export default withPayload(nextConfig)
