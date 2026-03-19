import { cn } from '@shadcn/lib/utils'
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import { labEyebrowClassName, labMonoStyle } from './theme'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	title: string
}

const LabFooterBlock: FunctionComponent<Props> = ({ children, className, title, ...props }) => (
	<div {...props} className={cn('flex flex-col gap-3', className)}>
		<p style={labMonoStyle} className={labEyebrowClassName}>
			{title}
		</p>
		{children}
	</div>
)

export default LabFooterBlock
