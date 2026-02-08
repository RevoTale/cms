import type { FunctionComponent, MouseEvent } from 'react'

interface Props {
	fileSrc: string
	onClose: () => void
}
const ZoomedImage: FunctionComponent<Props> = ({ onClose, fileSrc }) => {
	const handleClose = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()
		onClose()
	}

	return (
		<button
			type="button"
			onClick={handleClose}
			style={{
				height: '100%',
				width: '100%',
				position: 'static',
				border: 'none',
				padding: 0,
				background: 'transparent',
			}}
		>
			{/* eslint-disable-next-line @next/next/no-img-element -- because  */}
			{/* biome-ignore lint/performance/noImgElement: this fullscreen preview uses native img sizing and does not benefit from next/image */}
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
		</button>
	)
}
export default ZoomedImage
