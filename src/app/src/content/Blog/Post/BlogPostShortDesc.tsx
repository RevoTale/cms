import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import type { FunctionComponent } from 'react'

interface Props {
	children: string | null
}
const BlogPostShortDesc: FunctionComponent<Props> = ({ children }) => (
	<p className="mb-4 text-lg text-muted-foreground">
		{children ?? (
			<>
				<InlineSkeleton className="h-4 w-full" />
				<br />
				<InlineSkeleton className="h-4  w-[90%]" />
			</>
		)}
	</p>
)
export default BlogPostShortDesc
