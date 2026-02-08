import { cn } from '@shadcn/lib/utils'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@shadcn/ui/pagination'
import type { Locale } from 'next-intl'
import type React from 'react'
import { Fragment } from 'react'

interface PaginationComponentProps {
	currentPage: number
	totalPages: number | null
	createPageLink: (page: number) => string
	previousLabel: string
	nextLabel: string
	className?: string
	locale: Locale
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
	currentPage,
	totalPages,
	createPageLink,
	previousLabel,
	className,
	nextLabel,
	locale,
}) => {
	if (!totalPages) return null

	const pages = new Set<number>() // Use a Set to prevent duplicates
	pages.add(1)
	const paging = [currentPage - 1, currentPage, currentPage + 1]
	paging.forEach(page => {
		if (page === 1) {
			paging.push(currentPage + 2)
		}
		if (page === totalPages) {
			paging.push(currentPage - 2)
		}
	})
	paging.forEach(page => {
		if (page > 1 && page < totalPages) {
			pages.add(page)
		}
	})

	pages.add(totalPages)

	const pageValues = Array.from(pages.values()).sort((a, b) => a - b)
	const prevDisable = currentPage > 1
	const nextDisable = currentPage + 1 < totalPages
	return (
		<Pagination className={className}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						locale={locale}
						aria-disabled={!prevDisable}
						className={cn({
							'text-muted-foreground pointer-events-none':
								!prevDisable,
						})}
						href={
							prevDisable
								? createPageLink(Math.max(currentPage - 1, 1))
								: '#'
						}>
						{previousLabel}
					</PaginationPrevious>
				</PaginationItem>
				{pageValues.map((pageNum, index) => (
					<Fragment key={pageNum}>
						{pageValues[index - 1] !== pageNum - 1 &&
						pageNum !== 1 ? (
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						) : null}
						<PaginationItem>
							<PaginationLink
								locale={locale}
								scroll={true}
								href={createPageLink(pageNum)}
								isActive={pageNum === currentPage}>
								{pageNum}
							</PaginationLink>
						</PaginationItem>
					</Fragment>
				))}
				<PaginationItem>
					<PaginationNext
						locale={locale}
						className={cn({
							'text-muted-foreground pointer-events-none':
								!nextDisable,
						})}
						aria-disabled={!nextDisable}
						href={
							nextDisable
								? createPageLink(
										Math.min(
											currentPage + 1,
											totalPages || 1
										)
									)
								: '#'
						}>
						{nextLabel}
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationComponent
