import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {buttonVariants} from '@shadcn/ui/button'
import {SearchIcon} from 'lucide-react'
import type {FunctionComponent} from 'react'
const linkClassname = buttonVariants({
	variant: 'outline',
})
const Loading: FunctionComponent = () => {
	return (
		<div className="flex justify-center my-4">
			<span className={linkClassname}>
				<SearchIcon />
				<InlineSkeleton className="w-10 h-5" />
			</span>
		</div>
	)
}
export default Loading
