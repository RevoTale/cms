import type {FunctionComponent, ReactNode} from 'react'
interface Props {
	children: ReactNode
}
const BlogPostList: FunctionComponent<Props> = ({children}) => (
	<ul className="flex flex-wrap justify-center gap-5">{children}</ul>
)
export default BlogPostList
