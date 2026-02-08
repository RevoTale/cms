import {
	createLinker,
	getQueryParamValue,
	getSearchParamValue,
	makeRelativeLink,
	type Linker,
	type ParameterOptions,
	type RelativeLinkBuilder,
	type RelativeURL,
} from 'next-navigation-utils'
import type {ReadonlyURLSearchParams} from 'next/navigation'

const canonizeSearchQuery = (
	pathname: string,
	searchParams: Record<string, string | string[]> | ReadonlyURLSearchParams,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- idk how to fix
	availableParams: Array<ParameterOptions<any>>
): RelativeURL => {
	const link = availableParams.reduce<
		RelativeLinkBuilder | Linker<RelativeURL>
	>(
		searchParams instanceof URLSearchParams
			? (link, param) => {
					if (searchParams.has(param.name)) {
						return link.setValue(
							param,
							getSearchParamValue(searchParams, param)
						)
					}
					return link
				}
			: (link, param) => {
					if (searchParams[param.name] !== undefined) {
						return link.setValue(
							param,
							getQueryParamValue(searchParams, param)
						)
					}
					return link
				},
		createLinker(makeRelativeLink(pathname))
	)
	return link.getLink()
}
export default canonizeSearchQuery
