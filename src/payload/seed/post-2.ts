import type { Post } from '../../payload-types'

export const post2: Partial<Post> = {
  slug: 'global-gaze',
  _status: 'published',
  authors: ['{{AUTHOR}}'],
  content: '',
  meta: {
    description:
      'Explore the untold and overlooked. A magnified view into the corners of the world, where every story deserves its spotlight.',
    image: '{{IMAGE_1}}',
    title: 'Global Gaze: Beyond the Headlines',
    noindex: false,
    nofollow: false,
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Global Gaze: Beyond the Headlines',
}
