import {cn} from '@shadcn/lib/utils'
import {buttonVariants} from '@shadcn/ui/button'
import type {FunctionComponent} from 'react'

const GoToNoteLinkSkeleton: FunctionComponent = () => {
	return (
		<span
			className={cn(
				buttonVariants({
					variant: 'outline',
					size: 'sm',
					className: 'text-muted-foreground',
				})
			)}
		/>
	)
}
export default GoToNoteLinkSkeleton
