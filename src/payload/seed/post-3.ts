import type { Post } from '../../payload-types'

export const post3: Partial<Post> = {
  slug: 'dollar-and-sense-the-financial-forecast',
  _status: 'published',
  authors: ['{{AUTHOR}}'],
  content: '',
  meta: {
    description: `Money isn't just currency; it's a language. Dive deep into its nuances, where strategy meets intuition in the vast sea of finance.`,
    image: '{{IMAGE_1}}',
    title: 'Dollar and Sense: The Financial Forecast',
    noindex: false,
    nofollow: false,
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Dollar and Sense: The Financial Forecast',
}
