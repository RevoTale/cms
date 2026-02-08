import LocaleLink from '@/i18n/LocaleLink'
import {cn} from '@shadcn/lib/utils'
import {buttonVariants} from '@shadcn/ui/button'
import type {Locale} from 'next-intl'
import {Fragment, type FunctionComponent} from 'react'
interface SchemaBranch {
	name: string
	children?: SchemaBranch[]
	href: string | URL
}

interface Props {
	schema: SchemaBranch[]
	isRoot?: boolean
	locale: Locale
}
const Branches: FunctionComponent<{
	branches: SchemaBranch[]
	isRoot?: boolean
	locale: Locale
}> = ({branches, locale, isRoot = false}) => {
	return (
		<>
			{branches.map((branch, index) => (
				<Fragment
					key={
						branch.href instanceof URL
							? branch.href.toString()
							: branch.href
					}>
					<div
						className={cn(
							'[&>div]:inline-block [&>div]:my-auto relative flex',
							isRoot ? 'max-w-full overflow-x-auto px-4' : null
						)}>
						{isRoot ? null : (
							<>
								{branches.length > 1 ? (
									<div
										className={cn(
											'w-1 bg-secondary absolute h-full',
											index === 0
												? 'bottom-0 h-[50%]'
												: index === branches.length - 1
													? 'top-0 h-[50%]'
													: 'h-full'
										)}></div>
								) : null}
								<div className="w-1" />
								<div
									className={cn(
										'w-7 h-1 bg-secondary relative'
									)}>
									<div className="absolute border-3 -left-2.5 top-1/2 transform -translate-y-1/2 size-4 bg-muted-foreground z-10 rounded-full" />
								</div>
							</>
						)}
						<div className="py-3">
							<LocaleLink
								locale={locale}
								href={branch.href.toString()}
								className={buttonVariants({
									variant: 'secondary',
								})}
								key={
									branch.href instanceof URL
										? branch.href.toString()
										: branch.href
								}>
								{branch.name}
							</LocaleLink>
						</div>
						{branch.children ? (
							<>
								<div
									className={cn(
										'w-7 h-1 bg-secondary relative'
									)}>
									<div className="absolute border-3 -right-2.5 top-1/2 transform -translate-y-1/2 size-4 bg-muted-foreground z-10 rounded-full" />
								</div>
								<div className="flex flex-col">
									<Branches
										locale={locale}
										branches={branch.children}
									/>
								</div>
							</>
						) : null}
					</div>
				</Fragment>
			))}
		</>
	)
}
const SchemaNavigation: FunctionComponent<Props> = ({schema, locale}) => {
	return (
		<div className="flex flex-col gap-2 mx-auto">
			<Branches locale={locale} branches={schema} isRoot />
		</div>
	)
}
export default SchemaNavigation
