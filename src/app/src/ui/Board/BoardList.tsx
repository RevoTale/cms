import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	children: ReactNode
}
const BoardList: FunctionComponent<Props> = ({ children }) => (
	<ul className="my-4 flex flex-wrap justify-center gap-x-7 gap-y-10 w-full">{children}</ul>
)
export default BoardList
