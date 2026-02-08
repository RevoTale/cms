import { useOnChange } from '@bladl/react-hooks'
import { cn } from '@shadcn/lib/utils'
import { Button } from '@shadcn/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@shadcn/ui/dialog'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { type FunctionComponent, startTransition, useCallback, useReducer } from 'react'

const getRandom = (values: RecordValue[], alreadyUsed: RecordValue[]): null | RecordValue => {
	const filteredUsed = values.filter(a => !alreadyUsed.some(usedItem => usedItem.index === a.index))
	if (filteredUsed.length === 0) {
		return null
	}
	const result = filteredUsed[Math.floor(Math.random() * filteredUsed.length)] ?? null
	if (result === null) {
		throw new Error('No values available')
	}
	return result
}

export interface RecordValue {
	index: number
	value: string
}

interface State {
	wheelValues: RecordValue[]
	isWheelActive: boolean
	winner: string | null
}

type Action =
	| { type: 'RESET_WHEEL_VALUES'; payload: RecordValue[] }
	| { type: 'SET_WHEEL_VALUES'; payload: RecordValue[] }
	| { type: 'START_SPIN' }
	| { type: 'SCROLL'; payload: { values: RecordValue[]; last: boolean } }
	| { type: 'SET_WINNER'; payload: string | null }

const getNextWheelValues = (current: RecordValue[], values: RecordValue[]): RecordValue[] => {
	const next = current.slice(1)
	const random = getRandom(values, next)
	if (random !== null) {
		next.push(random)
	}
	return next
}

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'RESET_WHEEL_VALUES':
			return {
				...state,
				wheelValues: action.payload,
			}
		case 'SET_WHEEL_VALUES':
			return {
				...state,
				wheelValues: action.payload,
			}
		case 'START_SPIN':
			return {
				...state,
				isWheelActive: true,
				winner: null,
			}
		case 'SCROLL': {
			const nextWheelValues = getNextWheelValues(state.wheelValues, action.payload.values)
			const winner = action.payload.last
				? (nextWheelValues[Math.floor(nextWheelValues.length / half)]?.value ?? null)
				: state.winner
			return {
				...state,
				wheelValues: nextWheelValues,
				winner,
			}
		}
		case 'SET_WINNER':
			return {
				...state,
				winner: action.payload,
			}
	}
	return state
}

interface Props {
	values: RecordValue[]
	disableWinnerDialog: boolean
	wheelDuration: number
}
const itemCount = 5
const half = 2
const RandomizerWheel: FunctionComponent<Props> = ({ values, wheelDuration, disableWinnerDialog }) => {
	const getDefaultValues = (): RecordValue[] => values.slice(0, itemCount)
	const [state, dispatch] = useReducer(reducer, undefined, () => ({
		wheelValues: getDefaultValues(),
		isWheelActive: false,
		winner: null,
	}))
	const { wheelValues, isWheelActive, winner } = state
	useOnChange(() => {
		dispatch({ type: 'RESET_WHEEL_VALUES', payload: getDefaultValues() })
	}, values)
	const verifyNotEmpty = useCallback(
		(func: () => void) => {
			if (values.length > 0) {
				func()
			} else {
				dispatch({ type: 'SET_WHEEL_VALUES', payload: [] })
			}
		},
		[values.length],
	)
	const scrollWheelDown = (lastTime: boolean): void => {
		verifyNotEmpty(() => {
			if (lastTime) {
				startTransition(() => {
					dispatch({
						type: 'SCROLL',
						payload: { values, last: true },
					})
				})
			} else {
				dispatch({
					type: 'SCROLL',
					payload: { values, last: false },
				})
			}
		})
	}
	const centralValue = Math.floor(wheelValues.length / half)
	const possibleWinner: RecordValue | null = wheelValues[centralValue] ?? null
	const startScrollWheel = (): void => {
		dispatch({ type: 'START_SPIN' })
		let totalDuration = 0
		const makeNextTimeout = (): void => {
			const faultDuration = 50
			const phases = [faultDuration, 75, 100, 125, 150, 175, 200]
			const nextIntervalTime = phases[Math.floor(phases.length / (wheelDuration / totalDuration))] ?? faultDuration
			if (totalDuration + nextIntervalTime >= wheelDuration) {
				return
			}
			totalDuration += nextIntervalTime
			setTimeout(() => {
				scrollWheelDown(totalDuration + nextIntervalTime >= wheelDuration)
				makeNextTimeout()
			}, nextIntervalTime)
		}
		makeNextTimeout()
	}
	const spinTheWheel = (): void => {
		startTransition(() => {
			const randomInit: RecordValue[] = []
			for (let i = 0; i < itemCount; i++) {
				const item = getRandom(values, randomInit)
				if (item !== null) {
					randomInit.push(item)
				}
			}
			dispatch({
				type: 'SET_WINNER',
				payload: null,
			})
			dispatch({ type: 'SET_WHEEL_VALUES', payload: randomInit })
			startScrollWheel()
		})
	}
	let openWinnerDialog = false
	if (!disableWinnerDialog && winner !== null) {
		openWinnerDialog = true
	}
	return (
		<div className="flex flex-col gap-2 max-w-64 w-full">
			<div className="flex flex-col">
				{wheelValues.map((value, index) => {
					const isActive = possibleWinner === value
					return (
						<div
							className={cn('flex gap-2 w-full rounded-lg p-1', isActive ? 'bg-secondary/80' : null)}
							key={value.index}
						>
							<div className={cn('flex justify-center items-center', isActive ? null : 'opacity-0')}>
								<ArrowRightIcon />
							</div>
							<div className={cn('text-center grow break-all', isActive ? 'text-xl font-semibold' : 'text-base')}>
								{isWheelActive
									? value.value
									: Array(itemCount - Math.abs(index - centralValue))
											.fill('-')
											.join('')}
							</div>
							<div className={cn('ml-auto flex justify-center items-center', isActive ? null : 'opacity-0')}>
								<ArrowLeftIcon />
							</div>
						</div>
					)
				})}
			</div>
			<Dialog
				onOpenChange={isOpen => {
					if (isOpen) {
						return
					}
					dispatch({
						type: 'SET_WINNER',
						payload: null,
					})
				}}
				open={openWinnerDialog}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-2xl wrap-break-word">We have a winner! 🎉</DialogTitle>
					</DialogHeader>
					<div className="text-2xl font-semibold text-center underline underline-offset-4 break-all">{winner}</div>
					<DialogFooter className="">
						<div className="flex justify-between w-full">
							<Button onClick={spinTheWheel} variant="outline">
								Restart the wheel
							</Button>
							<Button
								onClick={() => {
									dispatch({
										type: 'SET_WINNER',
										payload: null,
									})
								}}
								variant="default"
							>
								Close
							</Button>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			{winner === null ? null : (
				<div>
					<div className="text-base font-medium text-center">We have a have winner!🎉</div>
					<div className="text-xl font-semibold p-3 break-all underline underline-offset-4 text-center">{winner}</div>
				</div>
			)}
			<Button onClick={spinTheWheel} variant="default">
				Select random value!
			</Button>
		</div>
	)
}
export default RandomizerWheel
