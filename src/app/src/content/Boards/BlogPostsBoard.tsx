import BoardDescription from '@revotale/ui/Board/BoardDescription'
import BoardSection from '@revotale/ui/Board/BoardSection'
import BoardTitleLink from '@revotale/ui/Board/BoardTitleLink'
import { LibraryBigIcon, NotebookTextIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { type FunctionComponent, Suspense } from 'react'
import NextLink from '@/i18n/LocaleLink'
import { blogPaths, getBlogHref } from '../../linking/map/tools'
import ChooseNoteArticles from '../Blog/ChooseNoteArticles'
import BlogSectionIntroduce from '../Blog/ui/BlogSectionIntroduce'
import MicroblogListWithDataHorizontal from '../Microblog/MicroblogListWithDataHorizontal'
import MicroblogListWithDataHorizontalSkeleton from '../Microblog/MicroblogListWithDataHorizontalSkeleton'

interface Props {
	locale: Locale
}
const BlogPostsBoard: FunctionComponent<Props> = async ({ locale }) => {
	const t = await getTranslations({
		locale,
		namespace: 'BlogBoard',
	})
	const blogHref = getBlogHref(locale)
	const notesHref = getBlogHref(locale, blogPaths.notes)

	return (
		<BoardSection>
			<BoardTitleLink icon={<LibraryBigIcon />} href={blogHref} locale={locale}>
				{t('title')}
			</BoardTitleLink>
			<BoardDescription>
				<NextLink locale={locale} className="hover:text-foreground" href={blogHref} title={t('go_to_blog')}>
					{t('desc')}
				</NextLink>
			</BoardDescription>
			<ChooseNoteArticles className="my-1" locale={locale} />
			<BlogSectionIntroduce
				locale={locale}
				title={t('discover_notes')}
				icon={<NotebookTextIcon className="size-6" />}
				href={notesHref}
			>
				<Suspense fallback={<MicroblogListWithDataHorizontalSkeleton className="basis-64" />}>
					<MicroblogListWithDataHorizontal locale={locale} />
				</Suspense>
			</BlogSectionIntroduce>
		</BoardSection>
	)
}
export default BlogPostsBoard
