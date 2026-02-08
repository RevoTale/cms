import type { ReadonlyURLSearchParams } from 'next/navigation'
import {
	createLinker,
	getQueryParamValue,
	getSearchParamValue,
	type Linker,
	makeRelativeLink,
	type ParameterOptions,
	type RelativeLinkBuilder,
	type RelativeURL,
} from 'next-navigation-utils'

const canonizeSearchQuery = (
	pathname: string,
	searchParams: Record<string, string | string[]> | ReadonlyURLSearchParams,
	/* biome-ignore lint/suspicious/noExplicitAny: mixed parameter coders from next-navigation-utils require heterogeneous value types */
	availableParams: Array<ParameterOptions<any>>,
): RelativeURL => {
	const link = availableParams.reduce<RelativeLinkBuilder | Linker<RelativeURL>>(
		searchParams instanceof URLSearchParams
			? (link, param) => {
					if (searchParams.has(param.name)) {
						return link.setValue(param, getSearchParamValue(searchParams, param))
					}
					return link
				}
			: (link, param) => {
					if (searchParams[param.name] !== undefined) {
						return link.setValue(param, getQueryParamValue(searchParams, param))
					}
					return link
				},
		createLinker(makeRelativeLink(pathname)),
	)
	return link.getLink()
}
export default canonizeSearchQuery
