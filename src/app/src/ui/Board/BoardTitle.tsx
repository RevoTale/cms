import type { FunctionComponent, ReactNode } from 'react'

interface Props {
	children: ReactNode
	icon: ReactNode
}
const BoardTitle: FunctionComponent<Props> = ({ children, icon }) => (
	<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
		<span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-950 shadow-[0_8px_20px_rgba(41,72,91,0.12)] dark:border-white/12 dark:bg-white/6 dark:text-white">
			{icon}
		</span>
		<h2 className="m-0 text-3xl font-semibold leading-none tracking-[-0.04em] sm:text-4xl">{children}</h2>
	</div>
)
export default BoardTitle
