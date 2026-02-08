import { useCallback, useEffect, useRef } from 'react'
export type SetTimeoutFunction = (callback: () => void, delay: number) => ReturnType<typeof setTimeout>
const useTimeout = (): SetTimeoutFunction => {
	const timeoutsToClear = useRef<Array<ReturnType<typeof setTimeout>>>([])
	useEffect(() => {
		return (): void => {
			for (const t of timeoutsToClear.current) {
				clearTimeout(t)
			}
		}
	}, [])
	return useCallback<SetTimeoutFunction>((callback, delay: number) => {
		const timeout = setTimeout(() => {
			callback()
			timeoutsToClear.current = timeoutsToClear.current.filter(t => t !== timeout)
		}, delay)
		return timeout
	}, [])
}
export default useTimeout
