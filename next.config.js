import {withPayload} from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const PAYLOAD_PUBLIC_SERVER_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: PAYLOAD_PUBLIC_SERVER_URL?[
      ...[PAYLOAD_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ]:undefined,
  },
  reactStrictMode: true,
  basePath: '',
  redirects,
  output:'standalone'
}

export default withPayload(nextConfig)
