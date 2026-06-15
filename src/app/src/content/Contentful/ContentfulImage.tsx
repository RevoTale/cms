import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import Image from 'next/image'
import type { FunctionComponent } from 'react'
import fallbackSrc from './default-fallback-image.png'
export const contentfulImageFragment = graphql(/* GraphQL */ `
	fragment ContentfulImage on Media {
		id
		alt
		description
		url
		width
		height
	}
`)

interface ContentfulImageProps {
	quality?: number
	className?: string
	image: FragmentType<typeof contentfulImageFragment>
	alt?: string
	priority?: boolean
	sizes: string
	id?: string
}

const getNonEmptyText = (value: string | null | undefined): string | undefined => {
	const trimmed = value?.trim()
	return trimmed === '' ? undefined : trimmed
}

const ContentfulImage: FunctionComponent<ContentfulImageProps> = ({ image, priority, ...props }) => {
	const data = getFragmentData(contentfulImageFragment, image)
	const url = data.url ?? null
	const height = data.height ?? null
	const width = data.width ?? null
	const imageAlt = getNonEmptyText(props.alt) ?? getNonEmptyText(data.alt) ?? getNonEmptyText(data.description) ?? ''
	const imageDescription = getNonEmptyText(data.description)
	if (url === null || height === null || width === null) {
		throw new Error('No url returned by image')
	}

	return (
		<Image
			{...props}
			alt={imageAlt}
			aria-description={imageDescription}
			height={height}
			width={width}
			priority={priority}
			blurDataURL={fallbackSrc.blurDataURL}
			src={url}
		/>
	)
}
export default ContentfulImage
