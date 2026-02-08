import {Separator} from '@radix-ui/react-separator'
import BreaadcrumbsSkeleton from '@revotale/ui/BreaadcrumbsSkeleton'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import type {FunctionComponent} from 'react'
import MicroBlogPostListWithDataSkeleton from '../../../../src/content/Microblog/MicroblogPostListWithDataSkeleton'

const Loading: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-4">
			<BreaadcrumbsSkeleton count={3} />
			<div className="text-2xl font-semibold text-center">
				<InlineSkeleton className="w-24 h-6" />
			</div>
			<Separator className="my-2" />
			<MicroBlogPostListWithDataSkeleton skeletonCount={16} />
		</div>
	)
}
export default Loading
