import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	children: ReactNode
}
const BoardList: FunctionComponent<Props> = ({ children }) => (
	<ul className="m-0 grid w-full list-none gap-4 p-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))]">
		{children}
	</ul>
)
export default BoardList
