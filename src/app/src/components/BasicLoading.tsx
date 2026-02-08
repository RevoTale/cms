import { Spinner } from '@shadcn/ui/spinner'
import type { FunctionComponent } from 'react'

const BasicLoading: FunctionComponent = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="mt-auto mb-auto text-3xl flex flex-row items-center gap-0.5">
				Rev
				<Spinner className="size-6 mt-1" />
				tale
			</div>
		</div>
	)
}
export default BasicLoading
