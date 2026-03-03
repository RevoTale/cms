import bundleAnalyzer from '@next/bundle-analyzer'
import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { locales } from './src/app/src/i18n/config'

const appURL = process.env.APP_URL
const payloadPublicServerURL = process.env.PAYLOAD_PUBLIC_SERVER_URL
const verboseRuntimeLogs = process.env.NEXT_RUNTIME_VERBOSE_LOGS === '1'
const localePattern = locales.join('|')
const withNextIntl = createNextIntlPlugin({
	experimental: {
		// Provide the path to the messages that you're using in `AppConfig`
		createMessagesDeclaration: locales.map(locale => `./src/app/dictionaries/${locale}.json`),
	},
})

type LegacyBlogRedirectRule = {
	source: string
	destination: string
	preserveLocaleInDestination: boolean
}

const resolveBlogBaseURL = (): string => {
	for (const maybeURL of [appURL, payloadPublicServerURL]) {
		if (!maybeURL) {
			continue
		}
		try {
			const parsed = new URL(maybeURL)
			const hostname = parsed.hostname.startsWith('www.') ? parsed.hostname.slice(4) : parsed.hostname
			return `${parsed.protocol}//blog.${hostname}`
		} catch {
			// Ignore malformed optional URLs so local development can still boot.
		}
	}
	return 'https://blog.revotale.com'
}

const joinDestination = (baseURL: string, destinationPath: string): string => {
	const trimmedPath = destinationPath.startsWith('/') ? destinationPath : `/${destinationPath}`
	return `${baseURL}${trimmedPath}`
}

const legacyBlogRedirectRules: LegacyBlogRedirectRule[] = [
	{ source: '/blog', destination: '/', preserveLocaleInDestination: true },
	{ source: '/blog/notes', destination: '/', preserveLocaleInDestination: true },
	{ source: '/blog/articles', destination: '/tales', preserveLocaleInDestination: true },
	{ source: '/blog/micro', destination: '/micro-tales', preserveLocaleInDestination: true },
	{ source: '/blog/note/:slug', destination: '/note/:slug', preserveLocaleInDestination: true },
	{ source: '/blog/author/:slug', destination: '/author/:slug', preserveLocaleInDestination: true },
	{ source: '/blog/notes/feed.xml', destination: '/feed.xml', preserveLocaleInDestination: false },
	{
		source: '/blog/note/sitemap/:chunkId(\\d+).xml',
		destination: '/note/sitemap/:chunkId.xml',
		preserveLocaleInDestination: false,
	},
	{
		source: '/blog/author/sitemap/:chunkId(\\d+).xml',
		destination: '/author/sitemap/:chunkId.xml',
		preserveLocaleInDestination: false,
	},
	{
		source: '/blog/notes/sitemap/:chunkId(\\d+).xml',
		destination: '/notes/sitemap/:chunkId.xml',
		preserveLocaleInDestination: false,
	},
]

const buildLegacyBlogRedirects = (): Array<{
	source: string
	destination: string
	permanent: true
}> => {
	const blogBaseURL = resolveBlogBaseURL()
	const redirects: Array<{ source: string; destination: string; permanent: true }> = []

	for (const rule of legacyBlogRedirectRules) {
		redirects.push({
			source: rule.source,
			destination: joinDestination(blogBaseURL, rule.destination),
			permanent: true,
		})

		const localeDestination = rule.preserveLocaleInDestination
			? `/:locale${rule.destination === '/' ? '' : rule.destination}`
			: rule.destination
		redirects.push({
			source: `/:locale(${localePattern})${rule.source}`,
			destination: joinDestination(blogBaseURL, localeDestination),
			permanent: true,
		})
	}

	return redirects
}

const remoteHosts = new Set<string>([])
for (const maybeURL of [appURL, payloadPublicServerURL]) {
	if (!maybeURL) {
		continue
	}

	try {
		remoteHosts.add(new URL(maybeURL).hostname)
	} catch {
		// Ignore malformed optional URLs so local development can still boot.
	}
}

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	//cacheHandler: require.resolve('./cache-handler.mjs'), //waiting for https://github.com/fortedigital/nextjs-cache-handler/issues/110
	//cacheMaxMemorySize: 0, // Disable in-memory caching for custom handler
	// cacheComponents: true,WARNING! DO NOT USE "use cache" DIRECTIVE AND ANY OTHER BECUASE SEA BATTLE CAUSE DIALOG AND PAGES TO BE NOT UNMOUNTED WHICH COMPLETELY BREAKS THE UI
	logging: verboseRuntimeLogs
		? {
				fetches: {
					fullUrl: true,
				},
				incomingRequests: true,
			}
		: undefined,
	/* THIS IS FUCKING BULLSHIT. SAVE IT TO REMEMBER. SPENT 7 HOURS DEBUGGING NGONX CACHE ISSUES.
  THIS FUCKING PART OF CODE DISABLED SHARED CACHE IN NGIXN PROXYING.
  FUCK YOU NEXTJS AND YOUR SUGGESTION!!!
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'X-Accel-Buffering', //Dissable buffering for Nginx https://nextjs.org/docs/app/guides/self-hosting#streaming-and-suspense
            value: 'no',
          },
        ],
      },
    ]
  },
  */
	images: {
		remotePatterns: [...remoteHosts].map(hostname => ({ hostname })),
		loader: 'custom',
		loaderFile: './imageLoader.js',
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60 * 60 * 24 * 30,
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		// Optimized device sizes covering common device breakpoints
		deviceSizes: [384, 450, 530, 640, 828, 1080, 1920],
		// Optimized image sizes for thumbnails and smaller UI elements
		imageSizes: [16, 32, 64, 96, 256],
	},
	async redirects() {
		return buildLegacyBlogRedirects()
	},
}

const withAnalyzer = process.env.ANALYZE === 'true' ? bundleAnalyzer()(nextConfig) : nextConfig

export default withPayload(withNextIntl(withAnalyzer))
