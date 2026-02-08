import type { FunctionComponent } from 'react'
import BlogPostList from '../Blog/List/BlogPostList'
import MicroblogListItemSkeleton from './MicroblogListItemSkeleton'

interface Props {
	skeletonCount: number
}
const MicroBlogPostListWithDataSkeleton: FunctionComponent<Props> = ({ skeletonCount }) => {
	const skeletonKeys = Array.from({ length: skeletonCount }, (_, index) => `microblog-skeleton-${index + 1}`)
	return (
		<BlogPostList>
			{skeletonKeys.map(key => {
				return (
					<li className="basis-64" key={key}>
						<MicroblogListItemSkeleton className="max-w-64" />
					</li>
				)
			})}
		</BlogPostList>
	)
}
export default MicroBlogPostListWithDataSkeleton
