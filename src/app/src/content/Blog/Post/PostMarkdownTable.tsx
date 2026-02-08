import {cn} from '@shadcn/lib/utils'
import {ScrollArea, ScrollBar} from '@shadcn/ui/scroll-area'
import {Table} from '@shadcn/ui/table'
import {type FunctionComponent, type ReactNode, Suspense} from 'react'
import 'server-only'
interface Props {
	children: ReactNode
}
const PostMarkdownTable: FunctionComponent<Props> = ({children}) => {
	const className = 'h-96 max-w-3xl rounded-md border p-4'
	return (
		<Suspense
			fallback={<Table className={cn('overflow-hidden', className)} />}>
			<ScrollArea className={className}>
				<Table>{children}</Table>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</Suspense>
	)
}
export default PostMarkdownTable
