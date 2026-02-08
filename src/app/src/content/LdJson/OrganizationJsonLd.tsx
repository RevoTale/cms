import type { FunctionComponent } from 'react'
import type { Organization, WithContext } from 'schema-dts'
import formatUrl from '../../linking/formatUrl'
import LdJsonScript from './LdJsonScript'
export const getOrganizationJsonLD = (rootUrl: string): WithContext<Organization> => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		brand: 'RevoTale',
		name: 'RevoTale',
		logo: formatUrl(rootUrl, '/apple-touch-icon.png', null).toString(),
		url: formatUrl(rootUrl, '', null).toString(),
		sameAs: [
			'https://twitter.com/RevoTale',
			'https://github.com/RevoTale',
			'https://www.npmjs.com/~grisaia',
			'https://packagist.org/users/grisaia/',
		],
	}
}
const WebsiteJSONLD: FunctionComponent<{ rootUrl: string }> = ({ rootUrl }) => {
	return <LdJsonScript data={getOrganizationJsonLD(rootUrl)} />
}
export default WebsiteJSONLD
