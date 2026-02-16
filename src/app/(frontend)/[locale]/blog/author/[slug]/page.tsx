import { getFragmentData, graphql } from '@blog/gql'
import Breadcrumbs from '@revotale/ui/Breadcrumbs'
import { cn } from '@shadcn/lib/utils'
import { buttonVariants } from '@shadcn/ui/button'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { createLinker, makeRelativeLink } from 'next-navigation-utils'
import { cache, type FunctionComponent, Suspense } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import getGqlLocale from '@/i18n/getGqlLocale'
import NextLink from '@/i18n/LocaleLink'
import { routing } from '@/i18n/routing'
import { staleContentCache } from '../../../../../src/cache-config'
import getDomain from '../../../../../src/config/getDomain'
import getAuthorHref from '../../../../../src/content/Blog/getAuthorHref'
import BlogListItemAuthor from '../../../../../src/content/Blog/List/BlogListItemAuthor'
import { authorSlugInOption } from '../../../../../src/content/Blog/linking'
import AuthorJsonLD from '../../../../../src/content/LdJson/AuthorJsonLD'
import MicroblogListWithDataHorizontal from '../../../../../src/content/Microblog/MicroblogListWithDataHorizontal'
import MicroblogListWithDataHorizontalSkeleton from '../../../../../src/content/Microblog/MicroblogListWithDataHorizontalSkeleton'
import getOGImage from '../../../../../src/content/utils/seo/getOGImage'
import { getClient } from '../../../../../src/gql/getClient'
import { BlogCrumb } from '../../../../../src/linking/map/tools'
import getNextJsApolloCache from '../../../../../src/utils/getNextJsApolloCache'

const authorSeoFragment = graphql(/* GraphQL */ `
	fragment SinglePageAuthorSeo on Author {
		name
		bio
		id
		avatar {
			...SEO_getOGImage
		}
	}
`)
const authorQuery = graphql(/* GraphQL */ `
	query authorPersonalPage($slug: String!, $locale: LocaleInputType) {
		Authors(where: {slug: {equals: $slug}}, limit: 1, locale: $locale) {
			docs {
				...BlogListAuthor
				...SinglePageAuthorSeo
				...GetAuthorURL
				...SingleAuthorJsonLd
				name
				bio
				slug
			}
		}
	}
`)

const allAuthorsQuery = graphql(/* GraphQL */ `
	query Get_AllAuthors_Slugs($locale: LocaleInputType!, $limit: Int!) {
		Authors(limit: $limit, locale: $locale) {
			docs {
				slug
			}
		}
	}
`)
const firstIndex = 0
const fetchAuthor = cache(async (slug: string, locale: Locale) => {
	const result = await getClient().query({
		query: authorQuery,
		variables: {
			slug,
			locale: getGqlLocale(locale),
		},
		context: getNextJsApolloCache({
			revalidate: staleContentCache,
			tags: ['blog:authors', `blog:author:${slug}`, `blog:author:${slug}:${locale}`],
		}),
	})
	const authors = result.data?.Authors?.docs ?? []
	const item = firstIndex in authors ? authors[firstIndex] : null
	if (item === null) {
		return null
	}
	return item
})
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const { slug, locale } = await params
	const authorMasked = await fetchAuthor(slug, locale)
	if (authorMasked === null) {
		notFound()
	}

	const { avatar, name, bio } = getFragmentData(authorSeoFragment, authorMasked)
	return {
		title: `${name} | Author`,
		description: bio ?? undefined,
		alternates: generateAlternatesMeta(getAuthorHref(authorMasked), locale),

		openGraph: {
			type: 'profile',
			description: bio ?? undefined,
			images: avatar ? getOGImage(avatar) : undefined,
		},
		pinterest: {
			richPin: true,
		},
	}
}
interface Props {
	params: Promise<{ slug: string; locale: Locale }>
}
const Page: FunctionComponent<Props> = async ({ params }) => {
	const { slug, locale } = await params
	const author = await fetchAuthor(slug, locale)
	if (author === null) {
		notFound()
	}
	const t = await getTranslations({
		locale,
		namespace: 'Breadcrumbs',
	})
	return (
		<div className="m-auto max-w-3xl">
			<AuthorJsonLD rootUrl={getDomain()} author={author} locale={locale} />
			<Breadcrumbs
				rootUrl={getDomain()}
				locale={locale}
				homeCrumb={{ title: t('home'), href: '/' }}
				crumbs={[
					{
						title: t('blog'),
						href: BlogCrumb.href,
					},
				]}
				currentHref={getAuthorHref(author).asString()}
				title={author.name ?? ''}
			/>
			<section className="my-3 flex flex-wrap gap-2">
				<BlogListItemAuthor author={author} className="basis-80" locale={locale} />
				{(author.bio ?? '') === '' ? null : <p className="text-base text-muted-foreground mt-1">{author.bio}</p>}
			</section>
			<hr className="my-3" />

			<section className="my-6">
				<h1
					className={cn(
						buttonVariants({
							variant: 'link',
							size: 'default',
							className: 'text-2xl mb-4',
						}),
					)}
				>
					<NextLink
						locale={locale}
						href={createLinker(makeRelativeLink('/blog/notes')).setValue(authorSlugInOption, [author.slug]).asString()}
					>
						<strong>{author.name}</strong>’s notes
					</NextLink>
				</h1>
				<Suspense fallback={<MicroblogListWithDataHorizontalSkeleton />}>
					<MicroblogListWithDataHorizontal locale={locale} authorSlug={author.slug} limit={20} />
				</Suspense>
			</section>
		</div>
	)
}

export async function generateStaticParams(): Promise<Array<{ locale: Locale; slug: string }>> {
	const slugsByLocale = await Promise.all(
		routing.locales.map(async locale => {
			try {
				const result = await getClient().query({
					query: allAuthorsQuery,
					variables: {
						locale: getGqlLocale(locale),
						limit: 10000, // Fetch all authors
					},
					context: getNextJsApolloCache({
						revalidate: staleContentCache,
						tags: ['blog:authors', `blog:authors:${locale}`],
					}),
				})

				return (result.data?.Authors?.docs ?? [])
					.filter((doc): doc is { slug: string } => typeof doc?.slug === 'string')
					.map(doc => ({ locale, slug: doc.slug }))
			} catch (error) {
				// eslint-disable-next-line no-console -- no need
				console.error(`Failed to fetch authors for locale ${locale}:`, error)
				return []
			}
		}),
	)

	return slugsByLocale.flat()
}

export default Page
