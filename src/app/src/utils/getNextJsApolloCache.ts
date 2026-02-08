import type { DefaultContext } from '@apollo/client'

const getNextJsApolloCache = (time: number): DefaultContext => {
	return {
		fetchOptions: {
			next: {
				revalidate: time,
				cache: 'force-cache', //, BE CAREFUL THIS COULD BE THE MEMORY LEAK SOURCE. UPDATE, IT DOESN'T SEEM TO BE
			},
		},
	}
}
export default getNextJsApolloCache
