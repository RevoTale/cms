import type { FunctionComponent } from 'react'
import BlogPostList from '../Blog/List/BlogPostList'
import MicroblogListItemSkeleton from './MicroblogListItemSkeleton'

interface Props {
	skeletonCount: number
}
const MicroBlogPostListWithDataSkeleton: FunctionComponent<Props> = ({ skeletonCount }) => {
	return (
		<BlogPostList>
			{Array(skeletonCount)
				.fill(null)
				.map((_, i) => {
					return (
						<li className="basis-64" key={`index_${i}`}>
							<MicroblogListItemSkeleton className="max-w-64" />
						</li>
					)
				})}
		</BlogPostList>
	)
}
export default MicroBlogPostListWithDataSkeleton
