import type {FunctionComponent, ReactNode} from 'react'
interface Props {
	children: ReactNode
}
const BoardDescription: FunctionComponent<Props> = ({children}) => (
	<p className="text-muted-foreground mb-5 leading-6 max-w-3xl text-center">
		{children}
	</p>
)
export default BoardDescription
