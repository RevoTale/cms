import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	children: ReactNode
}
const BoardSection: FunctionComponent<Props> = ({ children }) => (
	<section className="flex flex-col items-center py-4">{children}</section>
)
export default BoardSection
