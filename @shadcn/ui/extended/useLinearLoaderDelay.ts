import {useBool, useCallTrue, useTimeout} from '@bladl/react-hooks'
import {useEffect} from 'react'

const useLinearLoaderDelay = (loading: boolean, delayTime = 300): boolean => {
	const [display, setDisplay] = useBool()

	useTimeout(useCallTrue(setDisplay), loading ? delayTime : null)
	useEffect(() => {
		if (display && !loading) {
			setDisplay(false)
		}
	}, [display, loading, setDisplay])
	return display
}
export default useLinearLoaderDelay
