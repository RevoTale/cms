import type { FragmentType } from '@blog/gql'
import { type Locale, useTranslations } from 'next-intl'
import type { FunctionComponent } from 'react'
import type { Blog, WithContext } from 'schema-dts'
import formatUrl from '../../linking/formatUrl'
import LdJsonScript from './LdJsonScript'
import { getNoteJsonLD, type noteJsonldFragment } from './NoteJsonLD'
import { getOrganizationJsonLD } from './OrganizationJsonLd'

interface Props {
	locale: Locale

	items: Array<FragmentType<typeof noteJsonldFragment>>
	href: string
	rootUrl: string
}
const NotesBlogJsonLd: FunctionComponent<Props> = ({ locale, items, href, rootUrl }) => {
	const t = useTranslations('Notes')
	const [publisher, blogPost] = [
		getOrganizationJsonLD(rootUrl),
		items.map(item => getNoteJsonLD(item, rootUrl, locale)),
	]
	const jsonLd: WithContext<Blog> = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: t('json_ld.name'),
		url: formatUrl(rootUrl, href, locale).toString(),
		description: t('json_ld.description'),
		inLanguage: locale,
		publisher,
		blogPost,
	}
	return <LdJsonScript data={jsonLd} />
}

export default NotesBlogJsonLd
