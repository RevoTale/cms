import type { FunctionComponent, ReactNode } from 'react'
import { labSansStyle, labThemeStyle } from './theme'

interface Props {
	children: ReactNode
}

const LabShellFrame: FunctionComponent<Props> = ({ children }) => (
	<div
		style={{
			...labThemeStyle,
			...labSansStyle,
		}}
		className="relative isolate min-h-screen overflow-x-clip bg-[#eef3f6] text-slate-950 dark:bg-[#0d1720] dark:text-slate-50"
	>
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0"
			style={{
				backgroundImage:
					'radial-gradient(circle at 20% 8%, rgba(44, 188, 243, 0.14), transparent 22rem), radial-gradient(circle at 82% 18%, rgba(255, 154, 49, 0.12), transparent 18rem), linear-gradient(180deg, #f7fafc 0%, #eef3f6 42%, #dfe7ec 100%)',
			}}
		/>
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 hidden dark:block"
			style={{
				backgroundImage:
					'radial-gradient(circle at 18% 8%, rgba(44, 188, 243, 0.18), transparent 22rem), radial-gradient(circle at 84% 16%, rgba(255, 154, 49, 0.14), transparent 18rem), linear-gradient(180deg, #0d1720 0%, #111d27 44%, #172532 100%)',
			}}
		/>
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 opacity-60"
			style={{
				backgroundImage:
					'linear-gradient(90deg, transparent 0, transparent 24px, rgba(255, 255, 255, 0.18) 24px, transparent 25px), linear-gradient(180deg, rgba(255, 255, 255, 0.2), transparent 16rem)',
			}}
		/>
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 hidden opacity-50 dark:block"
			style={{
				backgroundImage:
					'linear-gradient(90deg, transparent 0, transparent 28px, rgba(255, 255, 255, 0.08) 28px, transparent 29px), linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 16rem)',
			}}
		/>
		<div className="relative flex min-h-screen flex-col">{children}</div>
	</div>
)

export default LabShellFrame
