import type { Post } from '../../payload-types'

export const post1: Partial<Post> = {
  slug: 'digital-horizons',
  _status: 'published',
  authors: ['{{AUTHOR}}'],
  content:"ss",

  meta: {
    description:
      'Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.',
    image: '{{IMAGE_1}}',
    title: 'Digital Horizons: A Glimpse into Tomorrow',
    noindex:false,
    nofollow:false
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Digital Horizons: A Glimpse into Tomorrow',
}
