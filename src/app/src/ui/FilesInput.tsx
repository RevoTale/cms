import {Input} from '@shadcn/ui/input'
import {Label} from '@shadcn/ui/label'
import type {FunctionComponent} from 'react'
interface Props {
	setFiles: (files: File[]) => void
	id: string
	label: string
	disabled?: boolean
}
const FilesInput: FunctionComponent<Props> = ({
	id,
	label,
	setFiles,
	disabled,
}) => (
	<div className="grid w-full max-w-sm items-center gap-1.5">
		<Label htmlFor={id}>{label}</Label>
		<Input
			disabled={disabled}
			id={id}
			multiple
			onChange={e => {
				const files = Array.from(e.target.files ?? [])
				setFiles(files)
			}}
			type="file"
		/>
	</div>
)
export default FilesInput
