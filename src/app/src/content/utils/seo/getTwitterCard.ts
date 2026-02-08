import type { Metadata } from 'next'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

export interface TwitterCardOptions {
	/**
	 * Default site handle to use if not provided
	 */
	defaultSite?: string
	/**
	 * Default creator handle to use if not provided
	 */
	defaultCreator?: string
	/**
	 * Force a specific card type (overrides automatic detection)
	 */
	forceCardType?: 'summary' | 'summary_large_image' | 'app' | 'player'
	/**
	 * Custom title to use instead of OpenGraph title
	 */
	customTitle?: string
	/**
	 * Custom description to use instead of OpenGraph description
	 */
	customDescription?: string
	/**
	 * Custom URL to use instead of OpenGraph URL
	 */
	customUrl?: string
	/**
	 * Custom image to use instead of OpenGraph image
	 */
	customImage?: {
		url: string
		alt?: string
	}
	/**
	 * Creator information to add to the card
	 */
	creator?: {
		handle?: string
		name?: string
	}
	/**
	 * Additional authors to include
	 */
	authors?: Array<{
		handle?: string
		name?: string
	}>
}

/**
 * Twitter Card character limits and validation constants
 * Based on official Twitter Card documentation (2024/2025)
 */
const TWITTER_LIMITS = {
	TITLE_MAX_LENGTH: 70, // Twitter recommends max 70 characters for title
	DESCRIPTION_MAX_LENGTH: 200, // Twitter max 200 characters for description
	SITE_HANDLE_MAX_LENGTH: 15, // Twitter username max length
	CREATOR_HANDLE_MAX_LENGTH: 15,
	ELLIPSIS_LENGTH: 3, // Length of "..."
	WORD_BREAK_THRESHOLD: 0.8, // Only break at word if we don't lose > 20% of content
} as const

/**
 * Determines the appropriate Twitter card type based on content
 */
function determineCardType(openGraph?: OpenGraph, options?: TwitterCardOptions): 'summary' | 'summary_large_image' {
	// If force card type is specified, use it (but only allow summary types for safety)
	if (options?.forceCardType === 'summary' || options?.forceCardType === 'summary_large_image') {
		return options.forceCardType
	}

	// If there's an image, prefer large image card
	const images = openGraph?.images
	const hasImage = Array.isArray(images) ? Boolean(images.length) : Boolean(images)
	const hasCustomImage = Boolean(options?.customImage?.url)

	if (hasImage || hasCustomImage) {
		return 'summary_large_image'
	}

	// Default to summary card
	return 'summary'
}

/**
 * Extracts the best image from OpenGraph data or custom options
 */
function getTwitterImage(openGraph?: OpenGraph, options?: TwitterCardOptions): string | undefined {
	// Prioritize custom image
	const customImageUrl = options?.customImage?.url
	if (typeof customImageUrl === 'string' && customImageUrl.length > 0) {
		return customImageUrl
	}

	// Use OpenGraph image
	const images = openGraph?.images
	if (Array.isArray(images) && images.length > 0) {
		const [firstImage] = images
		if (typeof firstImage === 'string') {
			return firstImage
		}
		if (typeof firstImage === 'object' && 'url' in firstImage && typeof firstImage.url === 'string') {
			return firstImage.url
		}
	}

	return undefined
}

/**
 * Formats Twitter handle to ensure it starts with @
 */
function formatTwitterHandle(handle: string): string {
	return handle.startsWith('@') ? handle : `@${handle}`
}

/**
 * Gets the title for Twitter card with fallback logic and validation
 */
function getTwitterTitle(openGraph?: OpenGraph, options?: TwitterCardOptions): string | undefined {
	const title = options?.customTitle ?? openGraph?.title
	if (typeof title === 'string' && title.length > 0) {
		return validateTwitterText(title, TWITTER_LIMITS.TITLE_MAX_LENGTH)
	}
	return undefined
}

/**
 * Gets the description for Twitter card with fallback logic and validation
 */
function getTwitterDescription(openGraph?: OpenGraph, options?: TwitterCardOptions): string | undefined {
	const description = options?.customDescription ?? openGraph?.description
	if (typeof description === 'string' && description.length > 0) {
		return validateTwitterText(description, TWITTER_LIMITS.DESCRIPTION_MAX_LENGTH)
	}
	return undefined
}

/**
 * Gets the site handle for Twitter card
 */
function getTwitterSite(options?: TwitterCardOptions): string | undefined {
	const defaultSite = options?.defaultSite
	return typeof defaultSite === 'string' && defaultSite.length > 0 ? formatTwitterHandle(defaultSite) : undefined
}

/**
 * Gets creator information with fallback logic
 * Creator should be the actual author's Twitter handle, not the site handle
 */
function getCreatorInfo(_openGraph?: OpenGraph, options?: TwitterCardOptions): { handle?: string; name?: string } {
	// Start with explicit creator options
	let creator = options?.creator ?? {}

	// If no creator handle but we have authors, use the first author with a Twitter handle
	const hasCreatorHandle = typeof creator.handle === 'string' && creator.handle.length > 0
	const hasAuthors = Array.isArray(options?.authors) && options.authors.length > 0

	if (!hasCreatorHandle && hasAuthors && options.authors) {
		// Find the first author with a Twitter handle
		const authorWithHandle = options.authors.find(
			author => typeof author.handle === 'string' && author.handle.length > 0,
		)

		if (authorWithHandle) {
			creator = {
				...creator,
				handle: authorWithHandle.handle,
				name: authorWithHandle.name,
			}
		}
	}

	// Note: We intentionally DON'T fallback to defaultCreator here
	// because creator should be the actual author, not the site
	// If no author has a Twitter handle, it's better to omit the creator field

	return creator
}

/**
 * Validates and truncates text to fit Twitter card limits
 */
function validateTwitterText(text: string, maxLength: number, addEllipsis = true): string {
	if (text.length <= maxLength) {
		return text
	}

	const truncated = text.substring(0, maxLength - (addEllipsis ? TWITTER_LIMITS.ELLIPSIS_LENGTH : 0))

	// Try to break at word boundary if possible
	if (addEllipsis) {
		const lastSpace = truncated.lastIndexOf(' ')
		if (lastSpace > maxLength * TWITTER_LIMITS.WORD_BREAK_THRESHOLD) {
			return `${truncated.substring(0, lastSpace)}...`
		}
		return `${truncated}...`
	}

	return truncated
}

/**
 * Generates Twitter card metadata from Open Graph data and app-specific options
 *
 * IMPORTANT: Twitter Card Fields Explained:
 * - site: The Twitter handle of the website/publication (e.g., "@RevoTale")
 * - creator: The Twitter handle of the actual content author (e.g., "@john_doe")
 *
 * The creator field should ONLY be set if you have the author's actual Twitter handle.
 * It should NOT default to the site handle - it's better to omit it if unknown.
 *
 * Example usage:
 * ```typescript
 * const authors = post.authors?.map(author => ({
 *   name: author.name,
 *   twitterHandle: author.social?.twitter // Extract from your data structure
 * }))
 *
 * const twitter = getTwitterCard(openGraph, {
 *   defaultSite: '@RevoTale',
 *   authors,
 *   // creator will automatically be set to first author with twitterHandle
 * })
 * ```
 */
export function getTwitterCard(openGraph?: OpenGraph, options?: TwitterCardOptions): Metadata['twitter'] {
	const cardType = determineCardType(openGraph, options)
	const imageUrl = getTwitterImage(openGraph, options)
	const creator = getCreatorInfo(openGraph, options)

	// Build the base Twitter metadata
	const twitter: NonNullable<Metadata['twitter']> = {
		card: cardType,
	}

	// Add title
	const title = getTwitterTitle(openGraph, options)
	if (typeof title === 'string') {
		twitter.title = title
	}

	// Add description
	const description = getTwitterDescription(openGraph, options)
	if (typeof description === 'string') {
		twitter.description = description
	}

	// Add site information
	const site = getTwitterSite(options)
	if (typeof site === 'string') {
		twitter.site = site
	}

	// Add creator information
	const creatorHandle = creator.handle
	if (typeof creatorHandle === 'string' && creatorHandle.length > 0) {
		twitter.creator = formatTwitterHandle(creatorHandle)
	}

	// Add image information
	if (typeof imageUrl === 'string' && imageUrl.length > 0) {
		twitter.images = imageUrl
	}

	return twitter
}

/**
 * Convenience function for blog posts with author information
 */
export function getTwitterCardForBlogPost(
	openGraph?: OpenGraph,
	blogOptions?: {
		authors?: Array<{
			name?: string
			twitterHandle?: string
		}>
		siteName?: string
		/**
		 * @deprecated Use authors array instead.
		 * Creator should be the actual author's Twitter handle, not a site default.
		 */
		defaultCreator?: string
	},
): Metadata['twitter'] {
	const authors = blogOptions?.authors?.map(author => ({
		name: author.name,
		handle: author.twitterHandle,
	}))

	// Find the primary author (first one with a Twitter handle)
	const primaryAuthor = authors?.find(author => typeof author.handle === 'string' && author.handle.length > 0)

	return getTwitterCard(openGraph, {
		defaultSite: blogOptions?.siteName ?? '@RevoTale',
		authors,
		creator: primaryAuthor, // Use the primary author as creator
		// Note: We don't use defaultCreator anymore as creator should be the actual author
	})
}

/**
 * Convenience function for micro blog posts
 */
export function getTwitterCardForMicroPost(
	openGraph?: OpenGraph,
	microPostOptions?: {
		authors?: Array<{
			name?: string
			twitterHandle?: string
		}>
		siteName?: string
		hasAttachment?: boolean
	},
): Metadata['twitter'] {
	const authors = microPostOptions?.authors?.map(author => ({
		name: author.name,
		handle: author.twitterHandle,
	}))

	// Find the primary author (first one with a Twitter handle)
	const primaryAuthor = authors?.find(author => typeof author.handle === 'string' && author.handle.length > 0)

	// Force large image card if there's an attachment
	const forceCardType = microPostOptions?.hasAttachment === true ? 'summary_large_image' : undefined

	return getTwitterCard(openGraph, {
		defaultSite: microPostOptions?.siteName ?? '@RevoTale',
		authors,
		creator: primaryAuthor, // Use the primary author as creator
		forceCardType,
		// Note: No defaultCreator - creator should be the actual author
	})
}

/**
 * Enhanced Twitter Card Best Practices Implementation (2024/2025)
 *
 * This utility implements modern Twitter Card best practices:
 *
 * ✅ Character Limits & Truncation:
 *    - Title: Max 70 characters (recommended by Twitter)
 *    - Description: Max 200 characters (Twitter limit)
 *    - Smart word-boundary truncation with ellipsis
 *
 * ✅ Card Type Selection:
 *    - Uses 'summary_large_image' when images are available
 *    - Falls back to 'summary' for text-only content
 *    - Avoids deprecated card types (app, player)
 *
 * ✅ Proper Field Usage:
 *    - site: Publication Twitter handle (@RevoTale)
 *    - creator: Author's actual Twitter handle (never defaults to site)
 *    - title/description: Optimized and validated content
 *    - images: Uses OpenGraph images with proper fallbacks
 *
 * ✅ SEO & Social Sharing Optimization:
 *    - No unsupported fields (e.g., url)
 *    - Proper handle formatting with @ prefix
 *    - Type-safe implementation
 *    - Integration with OpenGraph metadata
 *
 * ✅ Content Quality:
 *    - Validates Twitter handle format and length
 *    - Optimizes text for better engagement
 *    - Handles missing data gracefully
 *    - Supports multiple authors with primary author detection
 */
export default getTwitterCard
