import type { FunctionComponent, HTMLAttributes } from 'react'
import LabFooterBlock from '../../ui/lab/LabFooterBlock'

interface Props extends HTMLAttributes<HTMLDivElement> {
	title: string
}

const FooterList: FunctionComponent<Props> = ({ children, title, ...props }) => (
	<LabFooterBlock {...props} title={title}>
		<ul className="m-0 flex list-none flex-col gap-2">{children}</ul>
	</LabFooterBlock>
)

export default FooterList
