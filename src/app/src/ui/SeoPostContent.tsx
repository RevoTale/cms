import SeoPostContentFetcher from '@revotale/ui/SeoPostContentFetcher'
import {clsx} from 'clsx'
import {type FunctionComponent, Suspense} from 'react'
import PostMarkdownSkeleton from '../content/Blog/Post/PostMarkdownSkeleton'

const SeoPostContent: FunctionComponent<{
	slug: string
	className?: string
}> = ({slug, className}) => (
	<article className={clsx(className)}>
		<Suspense fallback={<PostMarkdownSkeleton />}>
			<SeoPostContentFetcher slug={slug} />
		</Suspense>
	</article>
)
export default SeoPostContent
