import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	children: ReactNode
}
const HeaderTitle: FunctionComponent<Props> = ({ children }) => {
	return <div className="text-2xl flex col-span-1 items-center justify-center tracking-wider">{children}</div>
}
export default HeaderTitle
