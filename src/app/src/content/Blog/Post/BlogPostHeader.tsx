import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import type { FunctionComponent } from 'react'

interface Props {
	children: string | null
}
const BlogPostHeader: FunctionComponent<Props> = ({ children }) => (
	<h1 className="m-0 mb-2 text-3xl font-extrabold leading-snug text-left">
		{children ?? <InlineSkeleton className="h-7 w-4/6" />}
	</h1>
)
export default BlogPostHeader
