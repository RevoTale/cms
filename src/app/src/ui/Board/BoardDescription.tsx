import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	children: ReactNode
}
const BoardDescription: FunctionComponent<Props> = ({ children }) => (
	<p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{children}</p>
)
export default BoardDescription
