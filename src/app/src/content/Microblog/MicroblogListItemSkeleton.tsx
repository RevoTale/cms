import {routing} from '@/i18n/routing'
import {InlineSkeleton} from '@revotale/ui/InlineSkeleton'
import {cn} from '@shadcn/lib/utils'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@shadcn/ui/card'
import {Skeleton} from '@shadcn/ui/skeleton'
import type {FunctionComponent} from 'react'
import BlogListItemAuthor from '../Blog/List/BlogListItemAuthor'
import GoToNoteLinkSkeleton from './GoToNoteLinkSkeleton'
import PostPublishDate from './PostPublishDate'

interface Props {
	className?: string
}
const MicroblogListItemSkeleton: FunctionComponent<Props> = ({className}) => {
	const textPlaceHolder = (
		<div>
			<InlineSkeleton className="h-3 w-full" />

			<InlineSkeleton className="h-3 w-4/5" />
			<InlineSkeleton className="h-3 w-4/5" />
			<InlineSkeleton className="h-3 w-4/5" />
		</div>
	)
	return (
		<Card
			className={cn(
				'overflow-hidden pb-0 gap-0.5 h-fit w-full',
				className
			)}>
			<CardHeader className=" px-4">
				<BlogListItemAuthor
					author={null}
					locale={routing.defaultLocale}
				/>
				<CardTitle>
					<InlineSkeleton className="w-full h-5" />
					<InlineSkeleton className="w-3/5 h-5" />
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 px-4 pb-0">
				{textPlaceHolder}
				<PostPublishDate
					showTime
					className="ml-auto italic"
					locale={routing.defaultLocale}
					post={null}
				/>
			</CardContent>

			<CardFooter className="flex flex-col py-3">
				<GoToNoteLinkSkeleton />
			</CardFooter>
			<Skeleton className="h-36 w-full" />
		</Card>
	)
}
export default MicroblogListItemSkeleton
