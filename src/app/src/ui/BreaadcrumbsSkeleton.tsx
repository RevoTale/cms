import { InlineSkeleton } from '@revotale/ui/InlineSkeleton'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@shadcn/ui/breadcrumb'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import { Fragment, type FunctionComponent } from 'react'

interface Props {
	count: number
	className?: string
}
const classes = cva('', {
	variants: {
		variant: {
			'0': 'w-12',
			'1': 'w-12',
			'2': 'w-24',
			'3': 'w-28',
			default: 'w-24',
		},
	},
})
const availableCssClassCount = 3
const BreaadcrumbsSkeleton: FunctionComponent<Props> = ({ count, className }) => (
	<Breadcrumb className={className}>
		<BreadcrumbList>
			{Array(count)
				.fill(null)
				.map((_, index) => (
					<Fragment key={index}>
						<BreadcrumbItem>
							<InlineSkeleton
								className={clsx(
									'h-5',
									classes({
										variant: (index >= 0 && index <= availableCssClassCount ? index.toString() : 'default') as
											| 'default'
											| '0'
											| '1'
											| '2'
											| '3',
									}),
								)}
							/>
						</BreadcrumbItem>
						{index === count - 1 ? null : <BreadcrumbSeparator />}
					</Fragment>
				))}
		</BreadcrumbList>
	</Breadcrumb>
)
export default BreaadcrumbsSkeleton
