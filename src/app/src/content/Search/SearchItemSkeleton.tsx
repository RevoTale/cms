import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from '@shadcn/ui/item'
import {Skeleton} from '@shadcn/ui/skeleton'
import type {FunctionComponent} from 'react'

const SearchItemSkeleton: FunctionComponent = () => {
	return (
		<Item>
			<ItemMedia variant={'image'}>
				<Skeleton className="w-full h-full" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle className="w-full">
					<InlineSkeleton className="w-2/3 h-4" />
				</ItemTitle>
				<ItemDescription>
					<InlineSkeleton className="w-full h-3 mt-2 mb-1" />
					<InlineSkeleton className="w-9/12 h-3 mt-1 mb-1" />
				</ItemDescription>
			</ItemContent>
			<ItemActions>
				<Skeleton className="size-4" />
			</ItemActions>
		</Item>
	)
}
export default SearchItemSkeleton
