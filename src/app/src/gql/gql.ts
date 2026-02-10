/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n\tquery Get_AllAuthors_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tAuthors(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n": typeof types.Get_AllAuthors_SlugsDocument,
    "\n\tfragment SinglePageAuthorSeo on Author {\n\t\tname\n\t\tbio\n\t\tid\n\t\tavatar {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t}\n": typeof types.SinglePageAuthorSeoFragmentDoc,
    "\n\tquery authorPersonalPage($slug: String!, $locale: LocaleInputType) {\n\t\tAuthors(where: {slug: {equals: $slug}}, limit: 1, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...BlogListAuthor\n\t\t\t\t...SinglePageAuthorSeo\n\t\t\t\t...GetAuthorURL\n\t\t\t\t...SingleAuthorJsonLd\n\t\t\t\tname\n\t\t\t\tbio\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n": typeof types.authorPersonalPageDocument,
    "\n\tfragment MicroPostPage_getOG on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...SEO_getOGImage\n\t\t\t}\n\t\t\ttitle\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t\tattachment {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t\tpublishedAt\n\t\ttitle\n\t}\n": typeof types.MicroPostPage_getOGFragmentDoc,
    "\n\tquery Get_SingleMicroPost_SEO($slug: String!, $locale: LocaleInputType!) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tauthors {\n\t\t\t\t\t...GetAuthorURL\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\t...MicroPostPage_getOG\n\t\t\t\tmeta {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n": typeof types.Get_SingleMicroPost_SEODocument,
    "\n\tquery Get_AllMicroPosts_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tMicro_posts(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n": typeof types.Get_AllMicroPosts_SlugsDocument,
    "\n\tfragment FetchAllData_Tag on Tag {\n\t\tid\n\t\tname\n\t\ttitle\n\t}\n": typeof types.FetchAllData_TagFragmentDoc,
    "\n\tfragment NotesListItem on Micro_post {\n\t\tid\n\t\tslug\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\ttags {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t\tauthors {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tavatar {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t\tbio\n\t\t}\n\t\tattachment {\n\t\t\turl\n\t\t\talt\n\t\t\twidth\n\t\t\theight\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t}\n\t}\n": typeof types.NotesListItemFragmentDoc,
    "\n\tfragment TagFragment on Tag {\n\t\t...fetchMicroblogPost_tag\n\t\t...MicroBlogTag\n\t\tname\n\t\tid\n\t\ttitle\n\t}\n": typeof types.TagFragmentFragmentDoc,
    "\n\tquery tagIds($tagNames: [String!], $locale: LocaleInputType!) {\n\t\tTags(where: {name: {in: $tagNames}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...TagFragment\n\t\t\t}\n\t\t}\n\t}\n": typeof types.tagIdsDocument,
    "\n\tquery AvailableTags($locale: LocaleInputType!, $postType: String) {\n\t\tavailableTagsByMicroPostType(locale: $locale, postType: $postType) {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t}\n": typeof types.AvailableTagsDocument,
    "\n\tquery sitemap_blog_authors_list($page: Int!) {\n\t\tAuthors(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t}\n\t}\n": typeof types.sitemap_blog_authors_listDocument,
    "\n\tquery sitemap_blog_authors_list_total {\n\t\tAuthors {\n\t\t\ttotalPages\n\t\t}\n\t}\n": typeof types.sitemap_blog_authors_list_totalDocument,
    "\n\tquery sitemap_blog_post_list_dffd($page: Int!) {\n\t\tMicro_posts(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tpublishedAt\n\t\t\t\tupdatedAt\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tattachment {\n\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n": typeof types.sitemap_blog_post_list_dffdDocument,
    "\n\tquery sitemap_blog_post_list_total_dfsdf {\n\t\tMicro_posts(limit: 1000) {\n\t\t\ttotalPages\n\t\t}\n\t}\n": typeof types.sitemap_blog_post_list_total_dfsdfDocument,
    "\n\tquery sitemap_blog_tags_list($page: Int!, $limit: Int!) {\n\t\tTags(limit: $limit, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": typeof types.sitemap_blog_tags_listDocument,
    "\n\tquery sitemap_blog_tags_list_total($limit: Int!) {\n\t\tTags(limit: $limit) {\n\t\t\ttotalPages\n\t\t}\n\t}\n": typeof types.sitemap_blog_tags_list_totalDocument,
    "\n\tfragment BlogListAuthor on Author {\n\t\tid\n\t\tavatar {\n\t\t\t...ContentfulImage\n\t\t}\n\t\tname\n\t\tslug\n\t\tbio\n\t\t...GetAuthorURL\n\t}\n": typeof types.BlogListAuthorFragmentDoc,
    "\n\tfragment GetAuthorURL on Author {\n\t\tslug\n\t\tid\n\t}\n": typeof types.GetAuthorURLFragmentDoc,
    "\n\tfragment ContentfulImage on Media {\n\t\tid\n\t\talt\n\t\tdescription\n\t\turl\n\t\twidth\n\t\theight\n\t}\n": typeof types.ContentfulImageFragmentDoc,
    "\n\tfragment SingleAuthorJsonLd on Author {\n\t\tname\n\t\tslug\n\t\tavatar {\n\t\t\t...ImageJsonLd\n\t\t}\n\t\t...GetAuthorURL\n\t\tbio\n\t\tid\n\t}\n": typeof types.SingleAuthorJsonLdFragmentDoc,
    "\n\tfragment SingleNoteJsonld on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...SingleAuthorJsonLd\n\t\t}\n\t\tmeta {\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timage {\n\t\t\t\t...ImageJsonLd\n\t\t\t}\n\t\t}\n\t\ttitle\n\t\tpublishedAt\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t\t...Blog_getMicropostHref\n\t}\n": typeof types.SingleNoteJsonldFragmentDoc,
    "\n\tfragment ImageJsonLd on Media {\n\t\tid\n\t\twidth\n\t\theight\n\t\turl\n\t\tdescription\n\t}\n": typeof types.ImageJsonLdFragmentDoc,
    "\n\tfragment PostInternalLinksList on Micro_post {\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t\ttitle\n\t\t\tauthors {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t\t...Blog_getMicropostHref\n\t\t\t...MicroPostPublishDate_BlogPost\n\t\t}\n\t}\n": typeof types.PostInternalLinksListFragmentDoc,
    "\n\tfragment MicroBlogPostText_Text on Micro_post {\n\t\tid\n\t\tcontent\n\t}\n": typeof types.MicroBlogPostText_TextFragmentDoc,
    "\n\tfragment MicroBlogListItem on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\tauthors {\n\t\t\t...BlogListAuthor\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t\t...MicroBlogTag\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...ContentfulImage\n\t\t\t}\n\t\t}\n\t\tcontent\n\t\ttitle\n\t\t...MicroBlogListItem_toReactTranslate\n\t}\n": typeof types.MicroBlogListItemFragmentDoc,
    "\n\tfragment MicroBlogPostListWithData on Micro_post {\n\t\tid\n\t\t...MicroBlogListItem\n\t}\n": typeof types.MicroBlogPostListWithDataFragmentDoc,
    "\n\tfragment SingleMicroBlogPostBreadCrumb on Micro_post {\n\t\tauthors {\n\t\t\tname\n\t\t\tslug\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tid\n\t\ttitle\n\t\t...Blog_getMicropostHref\n\t}\n": typeof types.SingleMicroBlogPostBreadCrumbFragmentDoc,
    "\n\tfragment OutGoingLinksList on Micro_post {\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t}\n": typeof types.OutGoingLinksListFragmentDoc,
    "\n\tfragment MicroPostPublishDate_BlogPost on Micro_post {\n\t\tpublishedAt\n\t\tid\n\t\t...Blog_getMicropostHref\n\t}\n": typeof types.MicroPostPublishDate_BlogPostFragmentDoc,
    "\n\tfragment MicroBlogListItem_toReactTranslate on Micro_post {\n\t\tid\n\t\t...Blog_getMicropostHref\n\t\tcontent\n\t}\n": typeof types.MicroBlogListItem_toReactTranslateFragmentDoc,
    "\n\tquery get_singleBlogMicroPost($slug: String!, $locale: LocaleInputType) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...SinglePostPageData\n\t\t\t}\n\t\t}\n\t}\n": typeof types.get_singleBlogMicroPostDocument,
    "\n\tfragment SinglePostPageData on Micro_post {\n\t\t...MicroBlogPostText_Text\n\t\t...SingleMicroBlogPostBreadCrumb\n\t\ttitle\n\t\tauthors {\n\t\t\tid\n\t\t\t...BlogListAuthor\n\t\t}\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\ttags {\n\t\t\tid\n\t\t\t...MicroBlogTag\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttarget_url\n\t\t}\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\t...OutGoingLinksList\n\t\t...PostInternalLinksList\n\t\t...SingleNoteJsonld\n\t}\n": typeof types.SinglePostPageDataFragmentDoc,
    "\n\tfragment MicroBlogListItemQuery on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\t...MicroBlogPostListWithData\n\t\t...MicroBlogListItem\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...Util_getImageThumb\n\t\t\t\talt\n\t\t\t}\n\t\t}\n\t}\n": typeof types.MicroBlogListItemQueryFragmentDoc,
    "\n\tfragment MicroPoss_RSS on Micro_post {\n\t\tid\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\tauthors {\n\t\t\tname\n\t\t}\n\t\tmeta {\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t}\n": typeof types.MicroPoss_RSSFragmentDoc,
    "\n\tquery MicroBlog_post_list(\n\t\t$authorIn: [JSON!]\n\t\t$locale: LocaleInputType\n\t\t$limit: Int!\n\t\t$tagsIn: [JSON!]\n\t\t$page: Int!\n\t\t$postType: Micro_post_post_type_Input!\n\t) {\n\t\tMicro_posts(\n\t\t\tlimit: $limit\n\t\t\twhere: {\n\t\t\t\tauthors: {in: $authorIn}\n\t\t\t\ttags: {in: $tagsIn}\n\t\t\t\tpost_type: {equals: $postType}\n\t\t\t}\n\t\t\tlocale: $locale\n\t\t\tpage: $page\n\t\t) {\n\t\t\ttotalPages\n\t\t\tdocs {\n\t\t\t\t...MicroBlogListItemQuery\n\t\t\t\t...SingleNoteJsonld\n\t\t\t\t...MicroPoss_RSS\n\t\t\t}\n\t\t}\n\t}\n": typeof types.MicroBlog_post_listDocument,
    "\n\tfragment fetchMicroblogPost_tag on Tag {\n\t\tid\n\t\tname\n\t}\n": typeof types.fetchMicroblogPost_tagFragmentDoc,
    "\n\tfragment authorInFrag_author on Author {\n\t\tid\n\t\tslug\n\t}\n": typeof types.authorInFrag_authorFragmentDoc,
    "\n\tfragment AuthorQueryFrag on Author {\n\t\t...authorInFrag_author\n\t\tname\n\t\tid\n\t}\n": typeof types.AuthorQueryFragFragmentDoc,
    "\n\tquery authorInFrag($authorSlugIn: [String!]!, $locale: LocaleInputType!) {\n\t\tAuthors(where: {slug: {in: $authorSlugIn}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...AuthorQueryFrag\n\t\t\t}\n\t\t}\n\t}\n": typeof types.authorInFragDocument,
    "\n\tfragment Blog_getMicropostHref on Micro_post {\n\t\tid\n\t\tslug\n\t}\n": typeof types.Blog_getMicropostHrefFragmentDoc,
    "\n\tfragment MicroBlogTag on Tag {\n\t\tname\n\t\ttitle\n\t\tid\n\t}\n": typeof types.MicroBlogTagFragmentDoc,
    "\n\tfragment SearchItem on Search_Doc_Relationship {\n\t\tvalue {\n\t\t\t__typename\n\t\t\t... on Author {\n\t\t\t\tid\n\t\t\t\tauthorSlug: slug\n\t\t\t\ttitle: name\n\t\t\t\tbio\n\t\t\t\tavatar {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t}\n\t\t\t... on Micro_post {\n\t\t\t\tid\n\t\t\t\tmicropostSlug: slug\n\t\t\t\ttitle\n\t\t\t\tcontent\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...ContentfulImage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tattachment {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t\t...MicroBlogListItem_toReactTranslate\n\t\t\t}\n\t\t\t... on Tag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\ttagName: name\n\t\t\t}\n\t\t}\n\t}\n": typeof types.SearchItemFragmentDoc,
    "\n\tfragment SearchQueryDoc on Search {\n\t\tid\n\t\ttitle\n\t\tdoc {\n\t\t\t...SearchItem\n\t\t}\n\t}\n": typeof types.SearchQueryDocFragmentDoc,
    "\n\tquery SearchQuery($query: String!, $locale: LocaleInputType!) {\n\t\tSearches(\n\t\t\tlocale: $locale\n\t\t\tlimit: 10\n\t\t\twhere: {\n\t\t\t\tOR: [{excerpt: {like: $query}}, {excerpt: {contains: $query}}]\n\t\t\t}\n\t\t) {\n\t\t\tdocs {\n\t\t\t\t...SearchQueryDoc\n\t\t\t}\n\t\t}\n\t}\n": typeof types.SearchQueryDocument,
    "\n\tfragment Util_getImageThumb on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t}\n": typeof types.Util_getImageThumbFragmentDoc,
    "\n\tfragment SEO_getOGImage on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t\talt\n\t}\n": typeof types.SEO_getOGImageFragmentDoc,
};
const documents: Documents = {
    "\n\tquery Get_AllAuthors_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tAuthors(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n": types.Get_AllAuthors_SlugsDocument,
    "\n\tfragment SinglePageAuthorSeo on Author {\n\t\tname\n\t\tbio\n\t\tid\n\t\tavatar {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t}\n": types.SinglePageAuthorSeoFragmentDoc,
    "\n\tquery authorPersonalPage($slug: String!, $locale: LocaleInputType) {\n\t\tAuthors(where: {slug: {equals: $slug}}, limit: 1, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...BlogListAuthor\n\t\t\t\t...SinglePageAuthorSeo\n\t\t\t\t...GetAuthorURL\n\t\t\t\t...SingleAuthorJsonLd\n\t\t\t\tname\n\t\t\t\tbio\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n": types.authorPersonalPageDocument,
    "\n\tfragment MicroPostPage_getOG on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...SEO_getOGImage\n\t\t\t}\n\t\t\ttitle\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t\tattachment {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t\tpublishedAt\n\t\ttitle\n\t}\n": types.MicroPostPage_getOGFragmentDoc,
    "\n\tquery Get_SingleMicroPost_SEO($slug: String!, $locale: LocaleInputType!) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tauthors {\n\t\t\t\t\t...GetAuthorURL\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\t...MicroPostPage_getOG\n\t\t\t\tmeta {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n": types.Get_SingleMicroPost_SEODocument,
    "\n\tquery Get_AllMicroPosts_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tMicro_posts(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n": types.Get_AllMicroPosts_SlugsDocument,
    "\n\tfragment FetchAllData_Tag on Tag {\n\t\tid\n\t\tname\n\t\ttitle\n\t}\n": types.FetchAllData_TagFragmentDoc,
    "\n\tfragment NotesListItem on Micro_post {\n\t\tid\n\t\tslug\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\ttags {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t\tauthors {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tavatar {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t\tbio\n\t\t}\n\t\tattachment {\n\t\t\turl\n\t\t\talt\n\t\t\twidth\n\t\t\theight\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t}\n\t}\n": types.NotesListItemFragmentDoc,
    "\n\tfragment TagFragment on Tag {\n\t\t...fetchMicroblogPost_tag\n\t\t...MicroBlogTag\n\t\tname\n\t\tid\n\t\ttitle\n\t}\n": types.TagFragmentFragmentDoc,
    "\n\tquery tagIds($tagNames: [String!], $locale: LocaleInputType!) {\n\t\tTags(where: {name: {in: $tagNames}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...TagFragment\n\t\t\t}\n\t\t}\n\t}\n": types.tagIdsDocument,
    "\n\tquery AvailableTags($locale: LocaleInputType!, $postType: String) {\n\t\tavailableTagsByMicroPostType(locale: $locale, postType: $postType) {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t}\n": types.AvailableTagsDocument,
    "\n\tquery sitemap_blog_authors_list($page: Int!) {\n\t\tAuthors(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t}\n\t}\n": types.sitemap_blog_authors_listDocument,
    "\n\tquery sitemap_blog_authors_list_total {\n\t\tAuthors {\n\t\t\ttotalPages\n\t\t}\n\t}\n": types.sitemap_blog_authors_list_totalDocument,
    "\n\tquery sitemap_blog_post_list_dffd($page: Int!) {\n\t\tMicro_posts(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tpublishedAt\n\t\t\t\tupdatedAt\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tattachment {\n\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n": types.sitemap_blog_post_list_dffdDocument,
    "\n\tquery sitemap_blog_post_list_total_dfsdf {\n\t\tMicro_posts(limit: 1000) {\n\t\t\ttotalPages\n\t\t}\n\t}\n": types.sitemap_blog_post_list_total_dfsdfDocument,
    "\n\tquery sitemap_blog_tags_list($page: Int!, $limit: Int!) {\n\t\tTags(limit: $limit, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.sitemap_blog_tags_listDocument,
    "\n\tquery sitemap_blog_tags_list_total($limit: Int!) {\n\t\tTags(limit: $limit) {\n\t\t\ttotalPages\n\t\t}\n\t}\n": types.sitemap_blog_tags_list_totalDocument,
    "\n\tfragment BlogListAuthor on Author {\n\t\tid\n\t\tavatar {\n\t\t\t...ContentfulImage\n\t\t}\n\t\tname\n\t\tslug\n\t\tbio\n\t\t...GetAuthorURL\n\t}\n": types.BlogListAuthorFragmentDoc,
    "\n\tfragment GetAuthorURL on Author {\n\t\tslug\n\t\tid\n\t}\n": types.GetAuthorURLFragmentDoc,
    "\n\tfragment ContentfulImage on Media {\n\t\tid\n\t\talt\n\t\tdescription\n\t\turl\n\t\twidth\n\t\theight\n\t}\n": types.ContentfulImageFragmentDoc,
    "\n\tfragment SingleAuthorJsonLd on Author {\n\t\tname\n\t\tslug\n\t\tavatar {\n\t\t\t...ImageJsonLd\n\t\t}\n\t\t...GetAuthorURL\n\t\tbio\n\t\tid\n\t}\n": types.SingleAuthorJsonLdFragmentDoc,
    "\n\tfragment SingleNoteJsonld on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...SingleAuthorJsonLd\n\t\t}\n\t\tmeta {\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timage {\n\t\t\t\t...ImageJsonLd\n\t\t\t}\n\t\t}\n\t\ttitle\n\t\tpublishedAt\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t\t...Blog_getMicropostHref\n\t}\n": types.SingleNoteJsonldFragmentDoc,
    "\n\tfragment ImageJsonLd on Media {\n\t\tid\n\t\twidth\n\t\theight\n\t\turl\n\t\tdescription\n\t}\n": types.ImageJsonLdFragmentDoc,
    "\n\tfragment PostInternalLinksList on Micro_post {\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t\ttitle\n\t\t\tauthors {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t\t...Blog_getMicropostHref\n\t\t\t...MicroPostPublishDate_BlogPost\n\t\t}\n\t}\n": types.PostInternalLinksListFragmentDoc,
    "\n\tfragment MicroBlogPostText_Text on Micro_post {\n\t\tid\n\t\tcontent\n\t}\n": types.MicroBlogPostText_TextFragmentDoc,
    "\n\tfragment MicroBlogListItem on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\tauthors {\n\t\t\t...BlogListAuthor\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t\t...MicroBlogTag\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...ContentfulImage\n\t\t\t}\n\t\t}\n\t\tcontent\n\t\ttitle\n\t\t...MicroBlogListItem_toReactTranslate\n\t}\n": types.MicroBlogListItemFragmentDoc,
    "\n\tfragment MicroBlogPostListWithData on Micro_post {\n\t\tid\n\t\t...MicroBlogListItem\n\t}\n": types.MicroBlogPostListWithDataFragmentDoc,
    "\n\tfragment SingleMicroBlogPostBreadCrumb on Micro_post {\n\t\tauthors {\n\t\t\tname\n\t\t\tslug\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tid\n\t\ttitle\n\t\t...Blog_getMicropostHref\n\t}\n": types.SingleMicroBlogPostBreadCrumbFragmentDoc,
    "\n\tfragment OutGoingLinksList on Micro_post {\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t}\n": types.OutGoingLinksListFragmentDoc,
    "\n\tfragment MicroPostPublishDate_BlogPost on Micro_post {\n\t\tpublishedAt\n\t\tid\n\t\t...Blog_getMicropostHref\n\t}\n": types.MicroPostPublishDate_BlogPostFragmentDoc,
    "\n\tfragment MicroBlogListItem_toReactTranslate on Micro_post {\n\t\tid\n\t\t...Blog_getMicropostHref\n\t\tcontent\n\t}\n": types.MicroBlogListItem_toReactTranslateFragmentDoc,
    "\n\tquery get_singleBlogMicroPost($slug: String!, $locale: LocaleInputType) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...SinglePostPageData\n\t\t\t}\n\t\t}\n\t}\n": types.get_singleBlogMicroPostDocument,
    "\n\tfragment SinglePostPageData on Micro_post {\n\t\t...MicroBlogPostText_Text\n\t\t...SingleMicroBlogPostBreadCrumb\n\t\ttitle\n\t\tauthors {\n\t\t\tid\n\t\t\t...BlogListAuthor\n\t\t}\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\ttags {\n\t\t\tid\n\t\t\t...MicroBlogTag\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttarget_url\n\t\t}\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\t...OutGoingLinksList\n\t\t...PostInternalLinksList\n\t\t...SingleNoteJsonld\n\t}\n": types.SinglePostPageDataFragmentDoc,
    "\n\tfragment MicroBlogListItemQuery on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\t...MicroBlogPostListWithData\n\t\t...MicroBlogListItem\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...Util_getImageThumb\n\t\t\t\talt\n\t\t\t}\n\t\t}\n\t}\n": types.MicroBlogListItemQueryFragmentDoc,
    "\n\tfragment MicroPoss_RSS on Micro_post {\n\t\tid\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\tauthors {\n\t\t\tname\n\t\t}\n\t\tmeta {\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t}\n": types.MicroPoss_RSSFragmentDoc,
    "\n\tquery MicroBlog_post_list(\n\t\t$authorIn: [JSON!]\n\t\t$locale: LocaleInputType\n\t\t$limit: Int!\n\t\t$tagsIn: [JSON!]\n\t\t$page: Int!\n\t\t$postType: Micro_post_post_type_Input!\n\t) {\n\t\tMicro_posts(\n\t\t\tlimit: $limit\n\t\t\twhere: {\n\t\t\t\tauthors: {in: $authorIn}\n\t\t\t\ttags: {in: $tagsIn}\n\t\t\t\tpost_type: {equals: $postType}\n\t\t\t}\n\t\t\tlocale: $locale\n\t\t\tpage: $page\n\t\t) {\n\t\t\ttotalPages\n\t\t\tdocs {\n\t\t\t\t...MicroBlogListItemQuery\n\t\t\t\t...SingleNoteJsonld\n\t\t\t\t...MicroPoss_RSS\n\t\t\t}\n\t\t}\n\t}\n": types.MicroBlog_post_listDocument,
    "\n\tfragment fetchMicroblogPost_tag on Tag {\n\t\tid\n\t\tname\n\t}\n": types.fetchMicroblogPost_tagFragmentDoc,
    "\n\tfragment authorInFrag_author on Author {\n\t\tid\n\t\tslug\n\t}\n": types.authorInFrag_authorFragmentDoc,
    "\n\tfragment AuthorQueryFrag on Author {\n\t\t...authorInFrag_author\n\t\tname\n\t\tid\n\t}\n": types.AuthorQueryFragFragmentDoc,
    "\n\tquery authorInFrag($authorSlugIn: [String!]!, $locale: LocaleInputType!) {\n\t\tAuthors(where: {slug: {in: $authorSlugIn}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...AuthorQueryFrag\n\t\t\t}\n\t\t}\n\t}\n": types.authorInFragDocument,
    "\n\tfragment Blog_getMicropostHref on Micro_post {\n\t\tid\n\t\tslug\n\t}\n": types.Blog_getMicropostHrefFragmentDoc,
    "\n\tfragment MicroBlogTag on Tag {\n\t\tname\n\t\ttitle\n\t\tid\n\t}\n": types.MicroBlogTagFragmentDoc,
    "\n\tfragment SearchItem on Search_Doc_Relationship {\n\t\tvalue {\n\t\t\t__typename\n\t\t\t... on Author {\n\t\t\t\tid\n\t\t\t\tauthorSlug: slug\n\t\t\t\ttitle: name\n\t\t\t\tbio\n\t\t\t\tavatar {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t}\n\t\t\t... on Micro_post {\n\t\t\t\tid\n\t\t\t\tmicropostSlug: slug\n\t\t\t\ttitle\n\t\t\t\tcontent\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...ContentfulImage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tattachment {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t\t...MicroBlogListItem_toReactTranslate\n\t\t\t}\n\t\t\t... on Tag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\ttagName: name\n\t\t\t}\n\t\t}\n\t}\n": types.SearchItemFragmentDoc,
    "\n\tfragment SearchQueryDoc on Search {\n\t\tid\n\t\ttitle\n\t\tdoc {\n\t\t\t...SearchItem\n\t\t}\n\t}\n": types.SearchQueryDocFragmentDoc,
    "\n\tquery SearchQuery($query: String!, $locale: LocaleInputType!) {\n\t\tSearches(\n\t\t\tlocale: $locale\n\t\t\tlimit: 10\n\t\t\twhere: {\n\t\t\t\tOR: [{excerpt: {like: $query}}, {excerpt: {contains: $query}}]\n\t\t\t}\n\t\t) {\n\t\t\tdocs {\n\t\t\t\t...SearchQueryDoc\n\t\t\t}\n\t\t}\n\t}\n": types.SearchQueryDocument,
    "\n\tfragment Util_getImageThumb on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t}\n": types.Util_getImageThumbFragmentDoc,
    "\n\tfragment SEO_getOGImage on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t\talt\n\t}\n": types.SEO_getOGImageFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Get_AllAuthors_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tAuthors(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Get_AllAuthors_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tAuthors(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SinglePageAuthorSeo on Author {\n\t\tname\n\t\tbio\n\t\tid\n\t\tavatar {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment SinglePageAuthorSeo on Author {\n\t\tname\n\t\tbio\n\t\tid\n\t\tavatar {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery authorPersonalPage($slug: String!, $locale: LocaleInputType) {\n\t\tAuthors(where: {slug: {equals: $slug}}, limit: 1, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...BlogListAuthor\n\t\t\t\t...SinglePageAuthorSeo\n\t\t\t\t...GetAuthorURL\n\t\t\t\t...SingleAuthorJsonLd\n\t\t\t\tname\n\t\t\t\tbio\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery authorPersonalPage($slug: String!, $locale: LocaleInputType) {\n\t\tAuthors(where: {slug: {equals: $slug}}, limit: 1, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...BlogListAuthor\n\t\t\t\t...SinglePageAuthorSeo\n\t\t\t\t...GetAuthorURL\n\t\t\t\t...SingleAuthorJsonLd\n\t\t\t\tname\n\t\t\t\tbio\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroPostPage_getOG on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...SEO_getOGImage\n\t\t\t}\n\t\t\ttitle\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t\tattachment {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t\tpublishedAt\n\t\ttitle\n\t}\n"): (typeof documents)["\n\tfragment MicroPostPage_getOG on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...SEO_getOGImage\n\t\t\t}\n\t\t\ttitle\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t\tattachment {\n\t\t\t...SEO_getOGImage\n\t\t}\n\t\tpublishedAt\n\t\ttitle\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Get_SingleMicroPost_SEO($slug: String!, $locale: LocaleInputType!) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tauthors {\n\t\t\t\t\t...GetAuthorURL\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\t...MicroPostPage_getOG\n\t\t\t\tmeta {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Get_SingleMicroPost_SEO($slug: String!, $locale: LocaleInputType!) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tauthors {\n\t\t\t\t\t...GetAuthorURL\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\t...MicroPostPage_getOG\n\t\t\t\tmeta {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Get_AllMicroPosts_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tMicro_posts(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Get_AllMicroPosts_Slugs($locale: LocaleInputType!, $limit: Int!) {\n\t\tMicro_posts(limit: $limit, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment FetchAllData_Tag on Tag {\n\t\tid\n\t\tname\n\t\ttitle\n\t}\n"): (typeof documents)["\n\tfragment FetchAllData_Tag on Tag {\n\t\tid\n\t\tname\n\t\ttitle\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment NotesListItem on Micro_post {\n\t\tid\n\t\tslug\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\ttags {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t\tauthors {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tavatar {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t\tbio\n\t\t}\n\t\tattachment {\n\t\t\turl\n\t\t\talt\n\t\t\twidth\n\t\t\theight\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NotesListItem on Micro_post {\n\t\tid\n\t\tslug\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\ttags {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t\tauthors {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tavatar {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t\tbio\n\t\t}\n\t\tattachment {\n\t\t\turl\n\t\t\talt\n\t\t\twidth\n\t\t\theight\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\turl\n\t\t\t\talt\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment TagFragment on Tag {\n\t\t...fetchMicroblogPost_tag\n\t\t...MicroBlogTag\n\t\tname\n\t\tid\n\t\ttitle\n\t}\n"): (typeof documents)["\n\tfragment TagFragment on Tag {\n\t\t...fetchMicroblogPost_tag\n\t\t...MicroBlogTag\n\t\tname\n\t\tid\n\t\ttitle\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery tagIds($tagNames: [String!], $locale: LocaleInputType!) {\n\t\tTags(where: {name: {in: $tagNames}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...TagFragment\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery tagIds($tagNames: [String!], $locale: LocaleInputType!) {\n\t\tTags(where: {name: {in: $tagNames}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...TagFragment\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery AvailableTags($locale: LocaleInputType!, $postType: String) {\n\t\tavailableTagsByMicroPostType(locale: $locale, postType: $postType) {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery AvailableTags($locale: LocaleInputType!, $postType: String) {\n\t\tavailableTagsByMicroPostType(locale: $locale, postType: $postType) {\n\t\t\tid\n\t\t\tname\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery sitemap_blog_authors_list($page: Int!) {\n\t\tAuthors(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery sitemap_blog_authors_list($page: Int!) {\n\t\tAuthors(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tslug\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery sitemap_blog_authors_list_total {\n\t\tAuthors {\n\t\t\ttotalPages\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery sitemap_blog_authors_list_total {\n\t\tAuthors {\n\t\t\ttotalPages\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery sitemap_blog_post_list_dffd($page: Int!) {\n\t\tMicro_posts(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tpublishedAt\n\t\t\t\tupdatedAt\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tattachment {\n\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery sitemap_blog_post_list_dffd($page: Int!) {\n\t\tMicro_posts(limit: 1000, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tpublishedAt\n\t\t\t\tupdatedAt\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tattachment {\n\t\t\t\t\t...Util_getImageThumb\n\t\t\t\t}\n\t\t\t\t...Blog_getMicropostHref\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery sitemap_blog_post_list_total_dfsdf {\n\t\tMicro_posts(limit: 1000) {\n\t\t\ttotalPages\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery sitemap_blog_post_list_total_dfsdf {\n\t\tMicro_posts(limit: 1000) {\n\t\t\ttotalPages\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery sitemap_blog_tags_list($page: Int!, $limit: Int!) {\n\t\tTags(limit: $limit, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery sitemap_blog_tags_list($page: Int!, $limit: Int!) {\n\t\tTags(limit: $limit, page: $page) {\n\t\t\tdocs {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery sitemap_blog_tags_list_total($limit: Int!) {\n\t\tTags(limit: $limit) {\n\t\t\ttotalPages\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery sitemap_blog_tags_list_total($limit: Int!) {\n\t\tTags(limit: $limit) {\n\t\t\ttotalPages\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment BlogListAuthor on Author {\n\t\tid\n\t\tavatar {\n\t\t\t...ContentfulImage\n\t\t}\n\t\tname\n\t\tslug\n\t\tbio\n\t\t...GetAuthorURL\n\t}\n"): (typeof documents)["\n\tfragment BlogListAuthor on Author {\n\t\tid\n\t\tavatar {\n\t\t\t...ContentfulImage\n\t\t}\n\t\tname\n\t\tslug\n\t\tbio\n\t\t...GetAuthorURL\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment GetAuthorURL on Author {\n\t\tslug\n\t\tid\n\t}\n"): (typeof documents)["\n\tfragment GetAuthorURL on Author {\n\t\tslug\n\t\tid\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ContentfulImage on Media {\n\t\tid\n\t\talt\n\t\tdescription\n\t\turl\n\t\twidth\n\t\theight\n\t}\n"): (typeof documents)["\n\tfragment ContentfulImage on Media {\n\t\tid\n\t\talt\n\t\tdescription\n\t\turl\n\t\twidth\n\t\theight\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SingleAuthorJsonLd on Author {\n\t\tname\n\t\tslug\n\t\tavatar {\n\t\t\t...ImageJsonLd\n\t\t}\n\t\t...GetAuthorURL\n\t\tbio\n\t\tid\n\t}\n"): (typeof documents)["\n\tfragment SingleAuthorJsonLd on Author {\n\t\tname\n\t\tslug\n\t\tavatar {\n\t\t\t...ImageJsonLd\n\t\t}\n\t\t...GetAuthorURL\n\t\tbio\n\t\tid\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SingleNoteJsonld on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...SingleAuthorJsonLd\n\t\t}\n\t\tmeta {\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timage {\n\t\t\t\t...ImageJsonLd\n\t\t\t}\n\t\t}\n\t\ttitle\n\t\tpublishedAt\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t\t...Blog_getMicropostHref\n\t}\n"): (typeof documents)["\n\tfragment SingleNoteJsonld on Micro_post {\n\t\tid\n\t\tauthors {\n\t\t\t...SingleAuthorJsonLd\n\t\t}\n\t\tmeta {\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timage {\n\t\t\t\t...ImageJsonLd\n\t\t\t}\n\t\t}\n\t\ttitle\n\t\tpublishedAt\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t\t...Blog_getMicropostHref\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ImageJsonLd on Media {\n\t\tid\n\t\twidth\n\t\theight\n\t\turl\n\t\tdescription\n\t}\n"): (typeof documents)["\n\tfragment ImageJsonLd on Media {\n\t\tid\n\t\twidth\n\t\theight\n\t\turl\n\t\tdescription\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment PostInternalLinksList on Micro_post {\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t\ttitle\n\t\t\tauthors {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t\t...Blog_getMicropostHref\n\t\t\t...MicroPostPublishDate_BlogPost\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment PostInternalLinksList on Micro_post {\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t\ttitle\n\t\t\tauthors {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\t...GetAuthorURL\n\t\t\t}\n\t\t\t...Blog_getMicropostHref\n\t\t\t...MicroPostPublishDate_BlogPost\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroBlogPostText_Text on Micro_post {\n\t\tid\n\t\tcontent\n\t}\n"): (typeof documents)["\n\tfragment MicroBlogPostText_Text on Micro_post {\n\t\tid\n\t\tcontent\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroBlogListItem on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\tauthors {\n\t\t\t...BlogListAuthor\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t\t...MicroBlogTag\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...ContentfulImage\n\t\t\t}\n\t\t}\n\t\tcontent\n\t\ttitle\n\t\t...MicroBlogListItem_toReactTranslate\n\t}\n"): (typeof documents)["\n\tfragment MicroBlogListItem on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\tauthors {\n\t\t\t...BlogListAuthor\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t\t...MicroBlogTag\n\t\t}\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...ContentfulImage\n\t\t\t}\n\t\t}\n\t\tcontent\n\t\ttitle\n\t\t...MicroBlogListItem_toReactTranslate\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroBlogPostListWithData on Micro_post {\n\t\tid\n\t\t...MicroBlogListItem\n\t}\n"): (typeof documents)["\n\tfragment MicroBlogPostListWithData on Micro_post {\n\t\tid\n\t\t...MicroBlogListItem\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SingleMicroBlogPostBreadCrumb on Micro_post {\n\t\tauthors {\n\t\t\tname\n\t\t\tslug\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tid\n\t\ttitle\n\t\t...Blog_getMicropostHref\n\t}\n"): (typeof documents)["\n\tfragment SingleMicroBlogPostBreadCrumb on Micro_post {\n\t\tauthors {\n\t\t\tname\n\t\t\tslug\n\t\t\t...GetAuthorURL\n\t\t}\n\t\tid\n\t\ttitle\n\t\t...Blog_getMicropostHref\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment OutGoingLinksList on Micro_post {\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment OutGoingLinksList on Micro_post {\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttarget_url\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroPostPublishDate_BlogPost on Micro_post {\n\t\tpublishedAt\n\t\tid\n\t\t...Blog_getMicropostHref\n\t}\n"): (typeof documents)["\n\tfragment MicroPostPublishDate_BlogPost on Micro_post {\n\t\tpublishedAt\n\t\tid\n\t\t...Blog_getMicropostHref\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroBlogListItem_toReactTranslate on Micro_post {\n\t\tid\n\t\t...Blog_getMicropostHref\n\t\tcontent\n\t}\n"): (typeof documents)["\n\tfragment MicroBlogListItem_toReactTranslate on Micro_post {\n\t\tid\n\t\t...Blog_getMicropostHref\n\t\tcontent\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery get_singleBlogMicroPost($slug: String!, $locale: LocaleInputType) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...SinglePostPageData\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery get_singleBlogMicroPost($slug: String!, $locale: LocaleInputType) {\n\t\tMicro_posts(limit: 1, where: {slug: {equals: $slug}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...SinglePostPageData\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SinglePostPageData on Micro_post {\n\t\t...MicroBlogPostText_Text\n\t\t...SingleMicroBlogPostBreadCrumb\n\t\ttitle\n\t\tauthors {\n\t\t\tid\n\t\t\t...BlogListAuthor\n\t\t}\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\ttags {\n\t\t\tid\n\t\t\t...MicroBlogTag\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttarget_url\n\t\t}\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\t...OutGoingLinksList\n\t\t...PostInternalLinksList\n\t\t...SingleNoteJsonld\n\t}\n"): (typeof documents)["\n\tfragment SinglePostPageData on Micro_post {\n\t\t...MicroBlogPostText_Text\n\t\t...SingleMicroBlogPostBreadCrumb\n\t\ttitle\n\t\tauthors {\n\t\t\tid\n\t\t\t...BlogListAuthor\n\t\t}\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\ttags {\n\t\t\tid\n\t\t\t...MicroBlogTag\n\t\t}\n\t\texternalLinks {\n\t\t\tid\n\t\t\ttarget_url\n\t\t}\n\t\tlinkedMicroPosts {\n\t\t\tid\n\t\t\t...Blog_getMicropostHref\n\t\t}\n\t\tattachment {\n\t\t\t...ContentfulImage\n\t\t}\n\t\t...OutGoingLinksList\n\t\t...PostInternalLinksList\n\t\t...SingleNoteJsonld\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroBlogListItemQuery on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\t...MicroBlogPostListWithData\n\t\t...MicroBlogListItem\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...Util_getImageThumb\n\t\t\t\talt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment MicroBlogListItemQuery on Micro_post {\n\t\tid\n\t\t...MicroPostPublishDate_BlogPost\n\t\t...Blog_getMicropostHref\n\t\t...MicroBlogPostText_Text\n\t\t...MicroBlogPostListWithData\n\t\t...MicroBlogListItem\n\t\tmeta {\n\t\t\timage {\n\t\t\t\t...Util_getImageThumb\n\t\t\t\talt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroPoss_RSS on Micro_post {\n\t\tid\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\tauthors {\n\t\t\tname\n\t\t}\n\t\tmeta {\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment MicroPoss_RSS on Micro_post {\n\t\tid\n\t\ttitle\n\t\tcontent\n\t\tpublishedAt\n\t\tauthors {\n\t\t\tname\n\t\t}\n\t\tmeta {\n\t\t\tdescription\n\t\t}\n\t\ttags {\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery MicroBlog_post_list(\n\t\t$authorIn: [JSON!]\n\t\t$locale: LocaleInputType\n\t\t$limit: Int!\n\t\t$tagsIn: [JSON!]\n\t\t$page: Int!\n\t\t$postType: Micro_post_post_type_Input!\n\t) {\n\t\tMicro_posts(\n\t\t\tlimit: $limit\n\t\t\twhere: {\n\t\t\t\tauthors: {in: $authorIn}\n\t\t\t\ttags: {in: $tagsIn}\n\t\t\t\tpost_type: {equals: $postType}\n\t\t\t}\n\t\t\tlocale: $locale\n\t\t\tpage: $page\n\t\t) {\n\t\t\ttotalPages\n\t\t\tdocs {\n\t\t\t\t...MicroBlogListItemQuery\n\t\t\t\t...SingleNoteJsonld\n\t\t\t\t...MicroPoss_RSS\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery MicroBlog_post_list(\n\t\t$authorIn: [JSON!]\n\t\t$locale: LocaleInputType\n\t\t$limit: Int!\n\t\t$tagsIn: [JSON!]\n\t\t$page: Int!\n\t\t$postType: Micro_post_post_type_Input!\n\t) {\n\t\tMicro_posts(\n\t\t\tlimit: $limit\n\t\t\twhere: {\n\t\t\t\tauthors: {in: $authorIn}\n\t\t\t\ttags: {in: $tagsIn}\n\t\t\t\tpost_type: {equals: $postType}\n\t\t\t}\n\t\t\tlocale: $locale\n\t\t\tpage: $page\n\t\t) {\n\t\t\ttotalPages\n\t\t\tdocs {\n\t\t\t\t...MicroBlogListItemQuery\n\t\t\t\t...SingleNoteJsonld\n\t\t\t\t...MicroPoss_RSS\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment fetchMicroblogPost_tag on Tag {\n\t\tid\n\t\tname\n\t}\n"): (typeof documents)["\n\tfragment fetchMicroblogPost_tag on Tag {\n\t\tid\n\t\tname\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment authorInFrag_author on Author {\n\t\tid\n\t\tslug\n\t}\n"): (typeof documents)["\n\tfragment authorInFrag_author on Author {\n\t\tid\n\t\tslug\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment AuthorQueryFrag on Author {\n\t\t...authorInFrag_author\n\t\tname\n\t\tid\n\t}\n"): (typeof documents)["\n\tfragment AuthorQueryFrag on Author {\n\t\t...authorInFrag_author\n\t\tname\n\t\tid\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery authorInFrag($authorSlugIn: [String!]!, $locale: LocaleInputType!) {\n\t\tAuthors(where: {slug: {in: $authorSlugIn}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...AuthorQueryFrag\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery authorInFrag($authorSlugIn: [String!]!, $locale: LocaleInputType!) {\n\t\tAuthors(where: {slug: {in: $authorSlugIn}}, locale: $locale) {\n\t\t\tdocs {\n\t\t\t\t...AuthorQueryFrag\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment Blog_getMicropostHref on Micro_post {\n\t\tid\n\t\tslug\n\t}\n"): (typeof documents)["\n\tfragment Blog_getMicropostHref on Micro_post {\n\t\tid\n\t\tslug\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MicroBlogTag on Tag {\n\t\tname\n\t\ttitle\n\t\tid\n\t}\n"): (typeof documents)["\n\tfragment MicroBlogTag on Tag {\n\t\tname\n\t\ttitle\n\t\tid\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SearchItem on Search_Doc_Relationship {\n\t\tvalue {\n\t\t\t__typename\n\t\t\t... on Author {\n\t\t\t\tid\n\t\t\t\tauthorSlug: slug\n\t\t\t\ttitle: name\n\t\t\t\tbio\n\t\t\t\tavatar {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t}\n\t\t\t... on Micro_post {\n\t\t\t\tid\n\t\t\t\tmicropostSlug: slug\n\t\t\t\ttitle\n\t\t\t\tcontent\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...ContentfulImage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tattachment {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t\t...MicroBlogListItem_toReactTranslate\n\t\t\t}\n\t\t\t... on Tag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\ttagName: name\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment SearchItem on Search_Doc_Relationship {\n\t\tvalue {\n\t\t\t__typename\n\t\t\t... on Author {\n\t\t\t\tid\n\t\t\t\tauthorSlug: slug\n\t\t\t\ttitle: name\n\t\t\t\tbio\n\t\t\t\tavatar {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t}\n\t\t\t... on Micro_post {\n\t\t\t\tid\n\t\t\t\tmicropostSlug: slug\n\t\t\t\ttitle\n\t\t\t\tcontent\n\t\t\t\tmeta {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...ContentfulImage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tattachment {\n\t\t\t\t\t...ContentfulImage\n\t\t\t\t}\n\t\t\t\t...MicroBlogListItem_toReactTranslate\n\t\t\t}\n\t\t\t... on Tag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\ttagName: name\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SearchQueryDoc on Search {\n\t\tid\n\t\ttitle\n\t\tdoc {\n\t\t\t...SearchItem\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment SearchQueryDoc on Search {\n\t\tid\n\t\ttitle\n\t\tdoc {\n\t\t\t...SearchItem\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery SearchQuery($query: String!, $locale: LocaleInputType!) {\n\t\tSearches(\n\t\t\tlocale: $locale\n\t\t\tlimit: 10\n\t\t\twhere: {\n\t\t\t\tOR: [{excerpt: {like: $query}}, {excerpt: {contains: $query}}]\n\t\t\t}\n\t\t) {\n\t\t\tdocs {\n\t\t\t\t...SearchQueryDoc\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery SearchQuery($query: String!, $locale: LocaleInputType!) {\n\t\tSearches(\n\t\t\tlocale: $locale\n\t\t\tlimit: 10\n\t\t\twhere: {\n\t\t\t\tOR: [{excerpt: {like: $query}}, {excerpt: {contains: $query}}]\n\t\t\t}\n\t\t) {\n\t\t\tdocs {\n\t\t\t\t...SearchQueryDoc\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment Util_getImageThumb on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t}\n"): (typeof documents)["\n\tfragment Util_getImageThumb on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment SEO_getOGImage on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t\talt\n\t}\n"): (typeof documents)["\n\tfragment SEO_getOGImage on Media {\n\t\tid\n\t\turl\n\t\twidth\n\t\theight\n\t\talt\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;