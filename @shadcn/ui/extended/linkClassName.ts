import {cn} from '@shadcn/lib/utils'

const linkClassName = (className?: string) => {
	return cn(
		'text-primary underline-offset-4 hover:underline font-semibold',
		className
	)
}
export default linkClassName
