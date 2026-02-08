import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import Link from 'next/link'
import type { FunctionComponent, ReactNode } from 'react'
import getMicropostHref from './getMicroPostHref'
import {
	CODE_BLOCK_PLACEHOLDER,
	IMAGE_PLACEHOLDER,
	PLACEHOLDER_MAP,
	type PlaceholderMapTranslationKeys,
	TABLE_PLACEHOLDER,
} from './shortTextPlaceholders'

/**
Input should: be the following:
--------
# Heading Level 1

## Heading Level 2

### Heading Level 3

---

**Bold text**, *italic text*, and ***bold italic text***

~~Strikethrough~~

> This is a blockquote spanning
> multiple lines.

---

### Lists

- Unordered item 1
- Unordered item 2
  - Nested unordered item

1. Ordered item 1
2. Ordered item 2

---

### Code

Inline code: `console.log('Hello World');`

```python
def greet(name):
    return f"Hello, {name}!"
print(greet("Markdown"))
```

---

### Links

[OpenAI Website](https://openai.com)

---

### Images

![Cute Cat](https://placekitten.com/400/200 "Kitten Image")

---

### Tables

| Name      | Age | City          |
| --------- | --- | ------------- |
| Alice     | 24  | New York      |
| Bob       | 30  | San Francisco |
| Charlie   | 28  | London        |

---

### Task List

- [x] Write introduction
- [ ] Add examples
- [ ] Review content

---

### Horizontal Rule

---

### Emoji

I :sparkles: love Markdown! 😄

---

### Footnotes

Here is a footnote example.[^note]

[^note]: This is the footnote text.

---

### HTML block example

<div style="background-color: #f0f0f0; padding: 10px;">
This is an HTML block inside Markdown.
</div>
 */
/*
Output should be the following:
--------
Heading Level 1
Heading Level 2
Heading Level 3

Bold text, italic text, and bold italic text

Strikethrough

This is a blockquote spanning
multiple lines.


Lists

- Unordered item 1
- Unordered item 2

- Ordered item 1
- Ordered item 2

Code
Inline code: `console.log('Hello World');`

...

*/

function markdownToPlainText(markdown: string, maxLength?: number): string {
	let text = markdown

	// Replace code blocks with constant placeholder
	text = text.replace(/```[\s\S]*?```/g, CODE_BLOCK_PLACEHOLDER)

	// Replace tables with constant placeholder
	text = text.replace(/^\|.*\|.*$/gm, TABLE_PLACEHOLDER)

	// Replace images with constant placeholder
	text = text.replace(/!\[.*?\]\(.*?\)/g, IMAGE_PLACEHOLDER)

	// Remove horizontal rules
	text = text.replace(/^---+$/gm, '')

	// Remove footnote definitions
	text = text.replace(/^\[\^[^\]]+\]: .*$/gm, '')

	// Remove footnote references
	text = text.replace(/\[\^[^\]]+\]/g, '')

	// Remove other markdown formatting while preserving content

	text = text
		.replace(/\*\*\*(.*?)\*\*\*/g, '$1') // Bold italic ***text***
		.replace(/\*\*(.*?)\*\*/g, '$1') // Bold **text**
		.replace(/\*(.*?)\*/g, '$1') // Italic *text*
		.replace(/_(.*?)_/g, '$1') // Italic _text_
		.replace(/^#{1,6}\s+(.*?)$/gm, '\n$1\n') // Headers # Header (add newline after)
		.replace(/~~(.*?)~~/g, '$1') // Strikethrough ~~text~~
		.replace(/`(.*?)`/g, '`$1`') // Inline code `code` - wrap in curly braces
		.replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links [text](url) - keep text only
		.replace(/^\s*>\s*(.*?)$/gm, '$1') // Blockquotes > text
		.replace(/^\s*- \[[ x]\]\s+/gm, '- ') // Task lists to regular lists
		.replace(/^\s*\d+\.\s+/gm, '- ') // Ordered lists to unordered lists

	// Remove HTML tags but preserve content
	text = text.replace(/<[^>]*>/g, '')

	// Clean up extra spaces but preserve paragraph structure
	text = text.replace(/[ \t]{2,}/g, ' ') // Remove multiple spaces/tabs

	// Clean up multiple newlines but preserve paragraph breaks
	text = text.replace(/\n{3,}/g, '\n\n') // Limit to double newlines for paragraphs
	text = text.replace(/^\n+/g, '') // Remove leading newlines
	text = text.replace(/\n+$/g, '') // Remove trailing newlines

	// Remove whitespaces before and after the text
	text = text.trim()

	// Safe truncation that doesn't cut placeholders
	if (maxLength !== undefined && text.length > maxLength) {
		text = safeTruncate(text, maxLength)
	}

	return text
}
const lastGoodBreakParam = 0.8 // 80% of maxLength

function safeTruncate(text: string, maxLength: number): string {
	if (text.length <= maxLength) {
		return text
	}

	// Get all placeholder positions
	const placeholders = Object.keys(PLACEHOLDER_MAP)
	const placeholderPositions: Array<{
		start: number
		end: number
		placeholder: string
	}> = []

	placeholders.forEach(placeholder => {
		let index = text.indexOf(placeholder)
		while (index !== -1) {
			placeholderPositions.push({
				start: index,
				end: index + placeholder.length,
				placeholder,
			})
			index += placeholder.length
			index = text.indexOf(placeholder, index)
		}
	})

	// Sort by start position
	placeholderPositions.sort((a, b) => a.start - b.start)

	// Find safe truncation point
	let truncateAt = maxLength

	// Check if truncation would cut through a placeholder
	for (const pos of placeholderPositions) {
		if (pos.start < maxLength && pos.end > maxLength) {
			// Truncation would cut through this placeholder
			// Move truncation point to before the placeholder
			truncateAt = pos.start
			break
		}
	}

	// If we still exceed length after avoiding placeholders,
	// try to find a good word boundary
	if (truncateAt > 0) {
		const truncated = text.substring(0, truncateAt)
		const lastSpace = truncated.lastIndexOf(' ')
		const lastNewline = truncated.lastIndexOf('\n')
		const lastGoodBreak = Math.max(lastSpace, lastNewline)

		// If we found a good break point and it's not too far back (at least 80% of desired length)
		if (lastGoodBreak > 0 && lastGoodBreak >= maxLength * lastGoodBreakParam) {
			return `${truncated.substring(0, lastGoodBreak).trim()}...`
		}
	}

	return `${text.substring(0, truncateAt).trim()}...`
}
export const postItemFragment = graphql(/* GraphQL */ `
	fragment MicroBlogListItem_toReactTranslate on Micro_post {
		id
		...Blog_getMicropostHref
		content
	}
`)
export function toReactTranslate(
	text: string,
	post: FragmentType<typeof postItemFragment>,
	translationKeys: PlaceholderMapTranslationKeys,
	disableLink: boolean,
): Array<string | ReactNode> | string {
	const result: Array<string | ReactNode> = []
	let nextStart = 0
	const data = getFragmentData(postItemFragment, post)
	// Create regex pattern from placeholder keys and language tags
	const placeholderKeys = Object.keys(PLACEHOLDER_MAP)
		.map(key => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
		.join('|')
	const combinedRegex = new RegExp(`\\[([\\w.]+)\\]|(?:${placeholderKeys})`, 'g')

	let match = combinedRegex.exec(text)
	while (match !== null) {
		const before = text.substring(nextStart, match.index)

		if (before) {
			result.push(before)
		}
		const [matchedText, id] = match

		// Check if it's a language tag or placeholder
		if (undefined !== id) {
			if (!disableLink) {
				// Language tag
				result.push(
					<Link
						className={buttonVariants({
							variant: 'link',
							size: 'sm',
							className: 'max-w-full px-0 whitespace-normal',
						})}
						key={`lang-${match.index}`}
						href={getMicropostHref(data).asString()}
						id={id}
					/>,
				)
			}
		} else if (PLACEHOLDER_MAP[matchedText] !== undefined) {
			const classsName = cn(
				buttonVariants({
					variant: 'link',
					size: 'sm',
				}),
				'max-w-full px-0 break-words !whitespace-normal !inline',
			)
			if (disableLink) {
				result.push(
					<span className={classsName} key={`placeholder-${match.index}`}>
						{translationKeys[PLACEHOLDER_MAP[matchedText]]}
					</span>,
				)
			} else {
				// Placeholder text - wrap in Link
				result.push(
					<Link className={classsName} key={`placeholder-${match.index}`} href={getMicropostHref(data).asString()}>
						{translationKeys[PLACEHOLDER_MAP[matchedText]]}
					</Link>,
				)
			}
		}

		nextStart = match.index + match[0].length
		match = combinedRegex.exec(text)
	}

	if (nextStart < text.length) {
		const after = text.substring(nextStart)

		if (after) {
			result.push(after)
		}
	}

	return result.length ? result : text
}
interface Props {
	post: FragmentType<typeof postItemFragment>
	charLimit: number
	translationKeys: PlaceholderMapTranslationKeys
	disableLink?: boolean
}
const ShortPostTextPreview: FunctionComponent<Props> = ({ post, charLimit, translationKeys, disableLink = false }) => {
	const data = getFragmentData(postItemFragment, post)
	return <>{toReactTranslate(markdownToPlainText(data.content ?? '', charLimit), post, translationKeys, disableLink)}</>
}
export default ShortPostTextPreview
