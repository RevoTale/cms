import { visit } from 'unist-util-visit'

// Minimal local node typing to avoid external type dependency
type MaybePromise<T> = T | Promise<T>
interface BaseNode {
  type: string
  // Allow arbitrary props from remark/MDX nodes
  [key: string]: unknown
}
export type Replacer = (url: string) => MaybePromise<string>

// Narrow node types we actually mutate
interface LinkNode extends BaseNode {
  type: 'link'
  url: string
}

interface HTMLLikeNode extends BaseNode {
  type: 'jsx' | 'html'
  value: string
}

/**
 * Default replacer.
 * @param url
 */
const defaultReplacer: Replacer = async (url: string) => url

/**
 * Replace all matches in a string asynchronously.
 * @param str
 * @param regex
 * @param asyncFn
 * @returns {Promise<*>}
 */
export const replaceAsync = async function (
  str: string,
  regex: RegExp,
  asyncFn: (match: string, ...groups: string[]) => Promise<string>,
): Promise<string> {
  // Ensure global flag to iterate all matches
  const flags = regex.flags.includes('g') ? regex.flags : `${regex.flags}g`
  const re = new RegExp(regex.source, flags)

  const matches: Array<{ match: string; groups: string[]; index: number; length: number }> = []
  let m: RegExpExecArray | null
  while ((m = re.exec(str)) !== null) {
    const groups = m.slice(1)
    matches.push({ match: m[0], groups, index: m.index, length: m[0].length })
    // Avoid zero-length match infinite loop
    if (m.index === re.lastIndex) re.lastIndex += 1
  }

  const replacements = await Promise.all(
    matches.map(async (it) => await asyncFn(it.match, ...it.groups)),
  )

  // Build the result string
  let result = ''
  let lastIndex = 0
  let i = 0
  for (const it of matches) {
    result += str.slice(lastIndex, it.index)
    const replacement = replacements[i]
    i += 1
    result += replacement
    lastIndex = it.index + it.length
  }
  result += str.slice(lastIndex)
  return result
}

/**
 * Rewrite the URL in a JSX node.
 * @param value
 * @param replacer
 * @returns {Promise<*>}
 */
export const rewriteJSXURL = async (value: string, replacer: Replacer): Promise<string> =>
  await replaceAsync(value, /href="(.*?)"/gv, async (_: string, url: string) => {
    const newUrl = await replacer(url)
    return `href="${newUrl}"`
  })

function remarkLinkRewrite(options: { replacer?: Replacer } = { replacer: defaultReplacer }) {
  const { replacer = defaultReplacer } = options
  // Wrap untyped visit to satisfy eslint no-unsafe-call
  const safeVisit = visit as unknown as (tree: BaseNode, visitor: (node: BaseNode) => void) => void
  return async (tree: BaseNode): Promise<BaseNode> => {
    const nodes: Array<LinkNode | HTMLLikeNode> = []

    safeVisit(tree, (node: BaseNode) => {
      if (node.type === 'link') {
        nodes.push(node as LinkNode)
      }
      if (node.type === 'jsx' || node.type === 'html') {
        const htmlNode = node as HTMLLikeNode
        if (typeof htmlNode.value === 'string' && /<a.*>/v.test(htmlNode.value)) {
          nodes.push(htmlNode)
        }
      }
    })

    for (const currentNode of nodes) {
      if (currentNode.type === 'link') {
        const rewrittenURL = await replacer(currentNode.url)
        currentNode.url = rewrittenURL
        continue
      }

      const rewrittenValue = await rewriteJSXURL(currentNode.value, replacer)
      currentNode.value = rewrittenValue
    }

    return tree
  }
}

export default remarkLinkRewrite
