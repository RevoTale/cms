'use client'

import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@shadcn/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@shadcn/ui/carousel'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import LabActionLink from '../../../ui/lab/LabActionLink'
import LabIconAction from '../../../ui/lab/LabIconAction'

interface CarouselImage {
	alt: string
	height: number
	src: string
	width: number
}

interface CompactBoardCarouselItem {
	actionAriaLabel?: string
	actionHref?: string
	description: string
	external?: boolean
	href: string
	image?: CarouselImage
	newTab?: boolean
	title: string
}

interface Props {
	actionLabel: string
	items: CompactBoardCarouselItem[]
	locale: Locale
}

const cardClassName =
	'h-full rounded-[1.55rem] border-white/80 bg-white/78 text-slate-950 shadow-[var(--lab-card-shadow)] backdrop-blur-xl dark:border-white/12 dark:bg-slate-950/74 dark:text-white'

const CompactBoardCarousel: FunctionComponent<Props> = ({ actionLabel, items, locale }) => {
	const renderCard = (item: CompactBoardCarouselItem) => (
		<Card size="sm" className={cardClassName}>
			{item.image === undefined ? null : (
				<LocaleLink
					className="block overflow-hidden border-b border-slate-200/70 transition hover:opacity-95 dark:border-white/10"
					href={item.href}
					hrefLang={locale}
					locale={locale}
					rel={item.external ? 'noopener noreferrer' : undefined}
					target={item.newTab ? '_blank' : undefined}
				>
					<Image
						alt={item.image.alt}
						className="h-40 w-full object-cover"
						height={item.image.height}
						sizes="(max-width: 640px) 90vw, (max-width: 1024px) 72vw, 340px"
						src={item.image.src}
						width={item.image.width}
					/>
				</LocaleLink>
			)}
			<CardHeader className="gap-2">
				<CardTitle className="pr-3 text-xl leading-tight tracking-[-0.03em]">
					<LocaleLink
						className="transition hover:text-[var(--lab-cyan)]"
						href={item.href}
						hrefLang={locale}
						locale={locale}
						rel={item.external ? 'noopener noreferrer' : undefined}
						target={item.newTab ? '_blank' : undefined}
					>
						{item.title}
					</LocaleLink>
				</CardTitle>
				{item.actionHref === undefined ? null : (
					<CardAction>
						<LabIconAction
							aria-label={item.actionAriaLabel ?? item.title}
							className="size-9"
							href={item.actionHref}
							locale={locale}
						>
							<ArrowUpRightIcon className="size-4" />
						</LabIconAction>
					</CardAction>
				)}
				<CardDescription className="line-clamp-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
					{item.description}
				</CardDescription>
			</CardHeader>
			<CardFooter className="pt-0">
				<LabActionLink
					className="min-h-0 px-0 py-0 text-xs uppercase tracking-[0.16em]"
					external={item.external ?? false}
					href={item.href}
					locale={locale}
					newTab={item.newTab ?? false}
					size="sm"
					variant="text"
				>
					{actionLabel}
					<ArrowRightIcon className="size-4" />
				</LabActionLink>
			</CardFooter>
		</Card>
	)

	return (
		<div className="w-full">
			<div className="lg:hidden">
				<Carousel
					className="w-full"
					opts={{
						align: 'start',
						loop: false,
					}}
				>
					<CarouselContent className="-ml-3">
						{items.map(item => (
							<CarouselItem className="basis-[88%] pl-3 sm:basis-[72%]" key={item.title}>
								{renderCard(item)}
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<div className="hidden lg:block">
				<Carousel
					className="mx-auto h-[28rem] w-full max-w-[22rem]"
					opts={{
						align: 'start',
						loop: false,
					}}
					orientation="vertical"
				>
					<CarouselContent className="-mt-3 h-full">
						{items.map(item => (
							<CarouselItem className="basis-[64%] pt-3" key={item.title}>
								{renderCard(item)}
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="border-white/80 bg-white/85 dark:border-white/12 dark:bg-slate-900/80" />
					<CarouselNext className="border-white/80 bg-white/85 dark:border-white/12 dark:bg-slate-900/80" />
				</Carousel>
			</div>
		</div>
	)
}

export type { CompactBoardCarouselItem }
export default CompactBoardCarousel
