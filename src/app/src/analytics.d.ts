declare global {
	interface Window {
		lovelyEye?: {
			track?: (
				eventName: 'gql_error',
				opt: {path?: string; message?: string}
			) => void
		}
	}
}

export {}
