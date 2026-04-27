import 'server-only'
import { rootWebsiteUrl } from '../../../config/siteUrls'

const getDomain = (): string => {
	return rootWebsiteUrl.origin
}

export default getDomain
