import {
	ChevronLeftIcon,
	ChevronRightIcon,
	MoreHorizontalIcon,
} from 'lucide-react'
import type * as React from 'react'

import LocaleLink from '@/i18n/LocaleLink'
import { cn } from '@shadcn/lib/utils'
import { type Button, buttonVariants } from '@shadcn/ui/button'

function Pagination({className, ...props}: React.ComponentProps<'nav'>) {
	return (
		<nav
			role="navigation"
			aria-label="pagination"
			data-slot="pagination"
			className={cn('mx-auto flex w-full justify-center', className)}
			{...props}
		/>
	)
}

function PaginationContent({className, ...props}: React.ComponentProps<'ul'>) {
	return (
		<ul
			data-slot="pagination-content"
			className={cn('flex flex-row items-center gap-1', className)}
			{...props}
		/>
	)
}

function PaginationItem({...props}: React.ComponentProps<'li'>) {
	return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
	isActive?: boolean
	href: string
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
	React.ComponentProps<typeof LocaleLink>

function PaginationLink({
	className,
	isActive,
	size = 'icon',
	href,
	...props
}: PaginationLinkProps) {
	return (
		<LocaleLink
			href={href}
			aria-current={isActive ? 'page' : undefined}
			data-slot="pagination-link"
			data-active={isActive}
			className={cn(
				buttonVariants({
					variant: isActive ? 'outline' : 'ghost',
					size,
				}),
				className
			)}
			{...props}
		/>
	)
}

function PaginationPrevious({
	className,
	children,
	...props
}: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			size="default"
			className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
			{...props}>
			<ChevronLeftIcon />
			<span className="hidden sm:block">{children}</span>
		</PaginationLink>
	)
}

function PaginationNext({
	className,
	children,
	...props
}: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink
			aria-label="Go to next page"
			size="default"
			className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
			{...props}>
			<span className="hidden sm:block">{children}</span>
			<ChevronRightIcon />
		</PaginationLink>
	)
}

function PaginationEllipsis({
	className,
	children,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			aria-hidden
			data-slot="pagination-ellipsis"
			className={cn('flex size-9 items-center justify-center', className)}
			{...props}>
			<MoreHorizontalIcon className="size-4" />
			<span className="sr-only">{children}</span>
		</span>
	)
}

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
}

