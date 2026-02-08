function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
	const s = {} as Pick<T, K>
	return keys.reduce((acc, val) => {
		acc[val] = obj[val]
		return acc
	}, s)
}
export default pick
