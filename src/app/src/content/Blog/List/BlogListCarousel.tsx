'use client'
import { Carousel } from '@shadcn/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { type FunctionComponent, type ReactNode, useRef } from 'react'

const BlogListCarousel: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
	const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

	return (
		<Carousel
			className="w-full max-w-4xl"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
			opts={{
				align: 'center',
				loop: false,
			}}
			plugins={[plugin.current]}
		>
			{children}
		</Carousel>
	)
}
export default BlogListCarousel
