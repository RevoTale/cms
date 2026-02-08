import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import Image from 'next/image'
import type {FunctionComponent} from 'react'
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

const ContentfulImage: FunctionComponent<ContentfulImageProps> = ({
	image,
	priority,
	...props
}) => {
	const data = getFragmentData(contentfulImageFragment, image)
	const url = data.url ?? null
	const height = data.height ?? null
	const width = data.width ?? null
	if (url === null || height === null || width === null) {
		throw new Error('No url returned by image')
	}

	return (
		<Image
			{...props}
			alt={data.alt ?? ''}
			aria-description={data.description ?? ''}
			height={height}
			width={width}
			priority={priority}
			blurDataURL={fallbackSrc.blurDataURL}
			src={url}
		/>
	)
}
export default ContentfulImage
