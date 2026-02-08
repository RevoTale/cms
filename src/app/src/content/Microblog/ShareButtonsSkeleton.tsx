import { Skeleton } from '@shadcn/ui/skeleton'
import type { FunctionComponent } from 'react'

const ShareButtonsSkeleton: FunctionComponent = () => {
	return (
		<div className="flex gap-2">
			<Skeleton className="w-10 h-8" />
			<Skeleton className="w-10 h-8" />
		</div>
	)
}
export default ShareButtonsSkeleton
