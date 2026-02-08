import type { FunctionComponent } from 'react'
import { defaultLocale } from '@/i18n/config'
import SingleMicroBlogPostPageData from '../../../../../src/content/Microblog/SingleMicroPostPageData'

const Loading: FunctionComponent = () => {
	return <SingleMicroBlogPostPageData post={null} locale={defaultLocale} />
}
export default Loading
