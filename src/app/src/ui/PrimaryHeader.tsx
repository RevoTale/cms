import { clsx } from 'clsx'
import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	className?: string
	children: ReactNode
}
const PrimaryHeader: FunctionComponent<Props> = ({ children, className }) => (
	<h1 className={clsx('scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0', className)}>
		{children}
	</h1>
)
export default PrimaryHeader
