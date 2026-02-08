'use client'

import LocaleLink from '@/i18n/LocaleLink'
import getGqlLocale from '@/i18n/getGqlLocale'
import {getFragmentData} from '@blog/gql'
import {useLazyQuery} from '@apollo/client/react'
import BadError from '@revotale/ui/BadError'
import {buttonVariants} from '@shadcn/ui/button'
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from '@shadcn/ui/empty'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@shadcn/ui/input-group'
import {ItemGroup} from '@shadcn/ui/item'
import {Spinner} from '@shadcn/ui/spinner'
import {SearchCheckIcon} from 'lucide-react'
import type {Locale} from 'next-intl'
import {useLinker, useParamState} from 'next-navigation-utils/client'
import {stringType} from 'next-navigation-utils/parameters'
import {useEffect, type FunctionComponent} from 'react'
import type {PlaceholderMapTranslationKeys} from '../Microblog/shortTextPlaceholders'
import {SearchQuery, SearchQueryDocFragment} from './gqlDef'
import SearchItem from './SearchItem'
import SearchItemSkeleton from './SearchItemSkeleton'
interface Props {
	translationKeys: PlaceholderMapTranslationKeys
	locale: Locale
}
const searchQueryOpt = {
	name: 's',
	...stringType,
}
const navOpt = {
	navigate: {push: false, scroll: false},
}
const SearchBarInput: FunctionComponent<Props> = ({
	translationKeys,
	locale,
}) => {
	const [value, setValue] = useParamState(searchQueryOpt, navOpt)
	const [fetchItems, {data, error, loading, called, previousData}] =
		useLazyQuery(SearchQuery, {
			fetchPolicy: 'cache-and-network',
		})
	const items = data?.Searches?.docs ?? previousData?.Searches?.docs ?? null
	const errorMessage = error?.message ?? null
	const dialogOpen = value !== null
	useEffect(() => {
		if (dialogOpen && !called) {
			void fetchItems({
				variables: {
					query: `%${value}%`,
					locale: getGqlLocale(locale),
				},
			})
		}
	}, [called, dialogOpen, fetchItems, locale, value])
	const linker = useLinker()
	return (
		<div className="flex flex-col gap-4 max-w-xl mx-auto">
			<InputGroup>
				<InputGroupInput
					autoFocus
					value={value ?? ''}
					onChange={e => {
						setValue(e.target.value)
						void fetchItems({
							variables: {
								query: `%${e.target.value}%`,
								locale: getGqlLocale(locale),
							},
						})
					}}
					placeholder="Type search..."
				/>
				{loading ? (
					<InputGroupAddon align="inline-end">
						<Spinner />
					</InputGroupAddon>
				) : null}
			</InputGroup>

			{errorMessage === null ? null : <BadError title={errorMessage} />}

			{items !== null && items.length === 0 ? (
				<Empty className="justify-start">
					<EmptyHeader>
						<EmptyMedia variant="icon">
							<SearchCheckIcon />
						</EmptyMedia>
						<EmptyTitle>Nothing found</EmptyTitle>
						<EmptyDescription>
							Nothing found matching your search criteria.
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<LocaleLink
							locale={locale}
							href={linker()
								.setValue(searchQueryOpt, null)
								.asString()}
							className={buttonVariants({size: 'sm'})}>
							Close
						</LocaleLink>
					</EmptyContent>
				</Empty>
			) : (
				<ItemGroup className="gap-1">
					{loading && items === null ? (
						<>
							{Array.from({length: 10}).map((_, i) => (
								<SearchItemSkeleton key={i} />
							))}
						</>
					) : (
						<>
							{items?.map(item => (
								<SearchItem
									locale={locale}
									key={
										getFragmentData(
											SearchQueryDocFragment,
											item
										).id
									}
									translationKeys={translationKeys}
									item={
										getFragmentData(
											SearchQueryDocFragment,
											item
										).doc
									}
								/>
							))}
						</>
					)}
				</ItemGroup>
			)}
		</div>
	)
}
export default SearchBarInput
