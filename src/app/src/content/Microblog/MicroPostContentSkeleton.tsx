import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import { clsx } from 'clsx'
import type { FunctionComponent } from 'react'

const Text: FunctionComponent<{ count: number }> = ({ count }) => (
	<>
		<InlineSkeleton className="h-4 w-full mt-5" />
		{Array.from({ length: count }, (_, index) => `line-${index + 1}`).map((lineKey, index) => (
			<InlineSkeleton className={clsx('h-4', 'w-full', count - 1 === index ? 'w-4/6' : undefined)} key={lineKey} />
		))}
	</>
)
const MicroPostContentSkeleton: FunctionComponent = () => (
	<>
		<Text count={3} />

		<Text count={5} />
		<Text count={2} />
	</>
)
export default MicroPostContentSkeleton
