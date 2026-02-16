import { type FragmentType, getFragmentData, graphql, makeFragmentData } from '@blog/gql'
import { cn } from '@shadcn/lib/utils'
import { ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle, itemVariants } from '@shadcn/ui/item'
import { ExternalLinkIcon } from 'lucide-react'
import type { Locale } from 'next-intl'
import { createLinker, makeRelativeLink } from 'next-navigation-utils'
import type { FunctionComponent } from 'react'
import LocaleLink from '@/i18n/LocaleLink'
import getAuthorHref, { AuthorFragment } from '../Blog/getAuthorHref'
import { tagInURLOption } from '../Blog/linking'
import ContentfulImage from '../Contentful/ContentfulImage'
import getMicropostHref, { BlogGetMicropostHref } from '../Microblog/getMicroPostHref'
import ShortPostTextPreview from '../Microblog/ShortPostTextPreview'
import type { PlaceholderMapTranslationKeys } from '../Microblog/shortTextPlaceholders'
export const SearchItemFragment = graphql(/* GraphQL */ `
	fragment SearchItem on Search_Doc_Relationship {
		value {
			__typename
			... on Author {
				id
				authorSlug: slug
				title: name
				bio
				avatar {
					...ContentfulImage
				}
			}
			... on Micro_post {
				id
				micropostSlug: slug
				title
				content
				meta {
					image {
						...ContentfulImage
					}
				}
				attachment {
					...ContentfulImage
				}
				...MicroBlogListItem_toReactTranslate
			}
			... on Tag {
				id
				title
				tagName: name
			}
		}
	}
`)
interface Props {
	item: FragmentType<typeof SearchItemFragment>
	translationKeys: PlaceholderMapTranslationKeys
	locale: Locale
}

const SearchItem: FunctionComponent<Props> = ({ item, translationKeys, locale }) => {
	const { value } = getFragmentData(SearchItemFragment, item)
	if (!value) {
		return null
	}
	const linkActions = (
		<ItemActions>
			<ExternalLinkIcon className="size-4" />
		</ItemActions>
	)
	if (value.__typename === 'Micro_post' && value.content) {
		const image = value.meta?.image ?? value.attachment
		return (
			<LocaleLink
				locale={locale}
				className={cn(itemVariants({}))}
				prefetch={false}
				href={getMicropostHref(
					makeFragmentData(
						{
							id: value.id,
							slug: value.micropostSlug,
						},
						BlogGetMicropostHref,
					),
				).asString()}
			>
				{image ? (
					<ItemMedia variant={'image'}>
						<ContentfulImage sizes="10rem" image={image} />
					</ItemMedia>
				) : null}
				<ItemContent>
					<ItemTitle>{value.title}</ItemTitle>
					<ItemDescription>
						<ShortPostTextPreview post={value} disableLink charLimit={180} translationKeys={translationKeys} />
					</ItemDescription>
				</ItemContent>
				{linkActions}
			</LocaleLink>
		)
	}
	if (value.__typename === 'Author') {
		const image = value.avatar
		return (
			<LocaleLink
				locale={locale}
				className={cn(itemVariants({}))}
				prefetch={false}
				href={getAuthorHref(
					makeFragmentData(
						{
							id: value.id,
							slug: value.authorSlug,
						},
						AuthorFragment,
					),
				).asString()}
			>
				{image ? (
					<ItemMedia variant={'image'}>
						<ContentfulImage sizes="10rem" image={image} />
					</ItemMedia>
				) : null}
				<ItemContent>
					<ItemTitle>{value.title}</ItemTitle>
					<ItemDescription>{value.bio}</ItemDescription>
				</ItemContent>
				{linkActions}
			</LocaleLink>
		)
	}
	if (value.__typename === 'Tag') {
		return (
			<LocaleLink
				locale={locale}
				className={cn(
					itemVariants({
						size: 'sm',
					}),
				)}
				prefetch={false}
				href={createLinker(makeRelativeLink('/blog/notes')).setValue(tagInURLOption, [value.tagName]).asString()}
			>
				<ItemContent>
					<ItemTitle>Tag: {value.title}</ItemTitle>
				</ItemContent>
				{linkActions}
			</LocaleLink>
		)
	}
	return null
}
export default SearchItem
