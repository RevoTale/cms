import { promises as fs } from 'node:fs'

export const getPostBySlug = async (slug: string): Promise<string> =>
	await fs.readFile(`${process.cwd()}/public/posts/${slug}.md`, 'utf8')
