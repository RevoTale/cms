import type { FunctionComponent } from 'react'

interface Props {
	fileSrc: string
	onClose: () => void
}
const ZoomedImage: FunctionComponent<Props> = ({ onClose, fileSrc }) => (
	<div
		onClick={e => {
			e.preventDefault()
			onClose()
		}}
		style={{
			height: '100%',
			width: '100%',
			position: 'static',
		}}
	>
		{/* eslint-disable-next-line @next/next/no-img-element -- because  */}
		<img
			alt=""
			src={fileSrc}
			style={{
				position: 'fixed',
				zIndex: 1,
				maxHeight: '100%',
				maxWidth: '100%',
			}}
		/>
	</div>
)
export default ZoomedImage
