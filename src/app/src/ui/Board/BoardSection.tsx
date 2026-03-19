import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	children: ReactNode
}
const BoardSection: FunctionComponent<Props> = ({ children }) => (
	<section className="w-full space-y-5 py-1">{children}</section>
)
export default BoardSection
