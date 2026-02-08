import type { FragmentType } from '@blog/gql'
import { cn } from '@shadcn/lib/utils'
import type { FunctionComponent } from 'react'
import ContentfulImage, { type contentfulImageFragment } from '../Contentful/ContentfulImage'

interface Props {
	asset: FragmentType<typeof contentfulImageFragment>
	className?: string
	alt?: string
	sizes: string
}
const ContentfulImageFill: FunctionComponent<Props> = ({ asset, className, alt, sizes }) => (
	<ContentfulImage
		alt={alt}
		className={cn('object-cover h-full rounded-full', className)}
		image={asset}
		sizes={sizes}
	/>
)
export default ContentfulImageFill
