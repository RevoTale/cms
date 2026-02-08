import {type FragmentType, getFragmentData, graphql} from '@blog/gql'
import type {FunctionComponent} from 'react'
import type {Person, WithContext} from 'schema-dts'
import formatUrl from '../../linking/formatUrl'
import getAuthorHref from '../Blog/getAuthorHref'
import LdJsonScript from './LdJsonScript'
import getImageJsonLd from './getImageJsonLd'

const authorJsonLdFragment = graphql(/* GraphQL */ `
	fragment SingleAuthorJsonLd on Author {
		name
		slug
		avatar {
			...ImageJsonLd
		}
		...GetAuthorURL
		bio
		id
	}
`)
export const getAuthorJsonLD = (
	author: FragmentType<typeof authorJsonLdFragment>,
	rootUrl: string,
	locale: string
): WithContext<Person> => {
	const data = getFragmentData(authorJsonLdFragment, author)
	const {name, avatar} = data
	const jsonLd: WithContext<Person> = {
		'@type': 'Person',
		'@context': 'https://schema.org',
		name: name ?? undefined,
		image:
			avatar !== null && avatar !== undefined
				? (getImageJsonLd(rootUrl, avatar) ?? undefined)
				: undefined,
		url: formatUrl(rootUrl, getAuthorHref(data), locale).toString(),
	}
	return jsonLd
}
interface Props {
	author: FragmentType<typeof authorJsonLdFragment>
	locale: string
	rootUrl: string
}

const AuthorJsonLD: FunctionComponent<Props> = ({author, locale, rootUrl}) => {
	return <LdJsonScript data={getAuthorJsonLD(author, rootUrl, locale)} />
}
export default AuthorJsonLD
