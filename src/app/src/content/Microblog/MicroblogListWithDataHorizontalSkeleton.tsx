import type { FunctionComponent } from 'react'
import { routing } from '@/i18n/routing'
import MicroblogListItem from './MicroblogListItem'

interface Props {
	className?: string
}
const MicroblogListWithDataHorizontalSkeleton: FunctionComponent<Props> = ({ className }) => {
	return (
		<div className="px-12 w-full flex justify-center items-start">
			<div className="relative w-full max-w-4xl">
				<div className="overflow-hidden">
					<div className="flex -ml-4">
						{Array.from({ length: 6 }).map((_, index) => (
							<div className="min-w-0 shrink-0 grow-0 pl-4 basis-64 max-w-full justify-center flex w-full" key={index}>
								<MicroblogListItem
									locale={routing.defaultLocale}
									translationKeys={null}
									post={null}
									className={className}
									imageSizes="16rem"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default MicroblogListWithDataHorizontalSkeleton
