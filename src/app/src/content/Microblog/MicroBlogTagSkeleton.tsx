import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {badgeVariants} from '@shadcn/ui/badge'
import type {FunctionComponent} from 'react'

const MicroBlogTagSkeleton: FunctionComponent = () => {
	return (
		<span className={badgeVariants({variant: 'secondary'})}>
			<InlineSkeleton className="w-10 h-4" />
		</span>
	)
}
export default MicroBlogTagSkeleton
