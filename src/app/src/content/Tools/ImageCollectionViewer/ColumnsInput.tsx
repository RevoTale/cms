import { type FunctionComponent, useEffect, useState } from 'react'

type ColValue = number | null
interface Props {
	value: ColValue
	onChange: (value: ColValue) => void
}
const valueToStr = (value: ColValue): string => (value === null ? '' : value.toString())
const ColumnsInput: FunctionComponent<Props> = ({ value, onChange }) => {
	const [text, setText] = useState(valueToStr(value))
	useEffect(() => {
		setText(valueToStr(value))
	}, [value])
	return (
		<input
			onChange={e => {
				setText(e.target.value)
				const num = Number(e.target.value)
				onChange(Number.isNaN(num) || num <= 0 ? null : num)
			}}
			type="number"
			value={text}
		/>
	)
}
export default ColumnsInput
