function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
	const s = {} as Pick<T, K>
	return keys.reduce((acc, val) => {
		// eslint-disable-next-line no-param-reassign -- no fix
		return ((acc[val] = obj[val]), acc)
	}, s)
}
export default pick
