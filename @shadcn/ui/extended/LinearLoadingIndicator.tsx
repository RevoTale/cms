import React, {type FunctionComponent} from 'react'
import {cn} from '@shadcn/lib/utils'

interface Props {
	loading: boolean
	layout?: 'invisible' | 'hidden'
}
const LinearLoadingIndicator: FunctionComponent<Props> = ({
	loading,
	layout = 'invisible',
}) => {
	if (!loading && layout === 'hidden') {
		return null
	}
	return (
		<div
			className={cn(
				'bg-current m-0 h-1 rounded w-full overflow-hidden block',
				layout === 'invisible' && !loading ? 'invisible' : null
			)}>
			<div className="before:bg-primary-foreground after:bg-primary" />
		</div>
	)
}
export default LinearLoadingIndicator
