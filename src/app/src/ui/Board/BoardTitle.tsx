import type {FunctionComponent, ReactNode} from 'react'
interface Props {
	children: ReactNode
	icon: ReactNode
}
const BoardTitle: FunctionComponent<Props> = ({children, icon}) => (
	<h2 className="m-0 mb-2 text-3xl font-extrabold leading-snug text-center flex gap-2 items-center">
		{children}
		<span className="mt-1">{icon}</span>
	</h2>
)
export default BoardTitle
