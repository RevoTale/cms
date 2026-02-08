import {cn} from '@shadcn/lib/utils'
import type {FunctionComponent, HTMLAttributes} from 'react'

const InlineSkeleton: FunctionComponent<HTMLAttributes<HTMLSpanElement>> = ({
	className,
	...props
}) => (
	<span
		className={cn(
			'animate-pulse rounded-md bg-muted inline-block',
			className
		)}
		{...props}
	/>
)

export {InlineSkeleton}
