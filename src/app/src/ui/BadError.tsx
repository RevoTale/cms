import {cn} from '@shadcn/lib/utils'
import {Alert, AlertDescription, AlertTitle} from '@shadcn/ui/alert'
import {AlertCircle} from 'lucide-react'
import type {FunctionComponent} from 'react'
interface Props {
	children?: string
	title: string
	className?: string
}
const BadError: FunctionComponent<Props> = ({children, className, title}) => {
	return (
		<Alert className={cn(className)} variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>{title}</AlertTitle>
			{children ? <AlertDescription>{children}</AlertDescription> : null}
		</Alert>
	)
}
export default BadError
