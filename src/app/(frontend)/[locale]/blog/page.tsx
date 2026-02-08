import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import { NotebookTextIcon } from 'lucide-react'
import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { type FunctionComponent, Suspense } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import getDomain from '../../../src/config/getDomain'
import ChooseNoteArticles from '../../../src/content/Blog/ChooseNoteArticles'
import BlogSectionIntroduce from '../../../src/content/Blog/ui/BlogSectionIntroduce'
import MicroblogListWithDataHorizontal from '../../../src/content/Microblog/MicroblogListWithDataHorizontal'
import MicroblogListWithDataHorizontalSkeleton from '../../../src/content/Microblog/MicroblogListWithDataHorizontalSkeleton'
import { BlogCrumb } from '../../../src/linking/map/tools'
export const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Blog',
	})
	return {
		title: t('meta_title'),
		description: t('meta_description'),
		alternates: generateAlternatesMeta('/blog', locale),
	}
}
const Page: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Breadcrumbs',
	})
	const t2 = await getTranslations({
		locale,
		namespace: 'BlogBoard',
	})
	return (
		<>
			<div className="flex justify-center flex-col items-center">
				<Breadcrumbs
					rootUrl={getDomain()}
					locale={locale}
					homeCrumb={{ title: t('home'), href: '/' }}
					crumbs={[]}
					currentHref={BlogCrumb.href}
					title={t('blog')}
				/>
				<h1 className="text-4xl text-center font-semibold w-full block py-2">{t2('title')}</h1>
				<p className="text-muted-foreground pb-5 leading-6 max-w-3xl text-center m-auto">{t2('welcome')}</p>
				<ChooseNoteArticles locale={locale} />
			</div>

			<BlogSectionIntroduce
				locale={locale}
				title={t2('notes_title')}
				icon={<NotebookTextIcon className="size-6" />}
				href="/blog/notes"
			>
				<Suspense fallback={<MicroblogListWithDataHorizontalSkeleton className="basis-64" />}>
					<MicroblogListWithDataHorizontal locale={locale} />
				</Suspense>
			</BlogSectionIntroduce>
		</>
	)
}

export default Page
