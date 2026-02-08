import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import PrimaryHeader from '@revotale/ui/PrimaryHeader'
import type {Locale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import type {FunctionComponent, ReactNode} from 'react'
import 'server-only'
import getDomain from '../../config/getDomain'
import {ToolsCrumb} from '../../linking/map/tools'
interface Props {
	title: string
	currentHref: string
	children: ReactNode
	locale: Locale
}
const UtilityTemplate: FunctionComponent<Props> = async ({
	title,
	currentHref,
	children,
	locale,
}) => {
	const t = await getTranslations({
		namespace: 'Breadcrumbs',
		locale,
	})
	return (
		<section className="flex flex-col gap-3 max-w-3xl mx-auto items-center">
			<PrimaryHeader className="w-full">{title}</PrimaryHeader>
			<div className="flex justify-start w-full">
				<Breadcrumbs
					rootUrl={getDomain()}
					locale={locale}
					homeCrumb={{title: t('home'), href: '/'}}
					crumbs={[
						{
							href: ToolsCrumb.href,
							title: t('utils'),
						},
					]}
					currentHref={currentHref}
					title={title}
				/>
			</div>
			{children}
		</section>
	)
}
export default UtilityTemplate
