import type { FunctionComponent } from 'react'
import { routing } from '@/i18n/routing'
import MicroblogListItem from './BlogListItem'

interface Props {
	className?: string
}

const SKELETON_ITEM_KEYS = [
	'skeleton-item-1',
	'skeleton-item-2',
	'skeleton-item-3',
	'skeleton-item-4',
	'skeleton-item-5',
	'skeleton-item-6',
]

const BlogListWithDataHorizontalSkeleton: FunctionComponent<Props> = ({ className }) => {
	return (
		<div className="px-12 w-full flex justify-center items-start">
			<div className="relative w-full max-w-4xl">
				<div className="overflow-hidden">
					<div className="flex -ml-4">
						{SKELETON_ITEM_KEYS.map(key => (
							<div className="min-w-0 shrink-0 grow-0 pl-4 basis-64 max-w-full justify-center flex w-full" key={key}>
								<MicroblogListItem
									locale={routing.defaultLocale}
									post={null}
									className={className}
									imageSizes="16rem"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default BlogListWithDataHorizontalSkeleton
