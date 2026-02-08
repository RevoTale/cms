import type {FunctionComponent, ReactNode} from 'react'
interface Props {
	children: ReactNode
}

const Layout: FunctionComponent<Props> = ({children}) => (
	<div className="max-w-5xl m-auto p-2">{children}</div>
)

export default Layout
