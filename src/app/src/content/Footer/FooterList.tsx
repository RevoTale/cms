import type { FunctionComponent, HTMLAttributes } from 'react'

const FooterList: FunctionComponent<HTMLAttributes<HTMLUListElement> & { title: string }> = ({ children, title }) => (
	<div className="flex flex-col">
		<p className="mb-2 flex items-center py-1.5 text-md font-semibold">{title}</p>
		<ul className="m-0 list-none">{children}</ul>
	</div>
)
export default FooterList
