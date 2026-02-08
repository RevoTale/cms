import { type FragmentType, getFragmentData, graphql } from '@blog/gql'
import { Skeleton } from '@shadcn/ui/skeleton'
import type { FunctionComponent } from 'react'
import ContentfulImage from '../../Contentful/ContentfulImage'

const postFragment = graphql(/* GraphQL */ `
	fragment BlogPost_featuredImageFrag on Post {
		id
		featuredImage {
			...ContentfulImage
			caption
		}
	}
`)
interface Props {
	post: FragmentType<typeof postFragment> | null
}
const BlogPostImage: FunctionComponent<Props> = ({ post }) => {
	const data = getFragmentData(postFragment, post)
	return data?.featuredImage ? (
		<figure className="mt-4 max-w-2xl mx-auto mb-4">
			<ContentfulImage image={data.featuredImage} priority={true} sizes="(max-width: 660px) 100vw, 672px" />
			<figcaption className="text-sm text-muted-foreground mt-2 font-normal text-center block">
				{data.featuredImage.caption}
			</figcaption>
		</figure>
	) : data === null ? (
		<Skeleton className="w-full h-64 mt-4" />
	) : null
}
export default BlogPostImage
