'use server'

import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import { sql, and, eq, or, isNull } from '@payloadcms/db-postgres/drizzle'
import { micro_posts, micro_posts_locales } from '../../payload-generated-schema'
import { locales, defaultLocale } from '../../i18n-config'
export type CountResponse =
  | {
      count: number
      error: undefined
    }
  | {
      error: string
      count: null
    }
const getCountOfNonTranslatedPosts = async (): Promise<CountResponse> => {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })
  if (!user) {
    return {
      error: 'User not authenticated',
      count: null,
    }
  }
  try {
    // Count posts that do NOT have a non-empty es-ES translation
    // Equivalent intent: missing row for es-ES OR content = ''
    const rows = await payload.db.drizzle
      .select({ count: sql<number>`cast(count(*) as int)` })
      .from(micro_posts)
      .leftJoin(
        micro_posts_locales,
        and(
          eq(micro_posts_locales._parentID, micro_posts.id),
          eq(micro_posts_locales._locale, 'es-ES'),
        ),
      )
      .where(or(isNull(micro_posts_locales._parentID), eq(micro_posts_locales.content, '')))

    return {
      count: rows?.[0]?.count ?? 0,
      error: undefined,
    }
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
      count: null,
    }
  }
}

export default getCountOfNonTranslatedPosts

// New: count missing/empty translations for each locale
export type CountsByLocaleResponse =
  | { counts: Array<{ locale: string; count: number }>; error: undefined }
  | { error: string; counts: null }

export const getCountsOfNonTranslatedPostsByLocale = async (): Promise<CountsByLocaleResponse> => {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })
  if (!user) {
    return { error: 'User not authenticated', counts: null }
  }

  try {
    const db = payload.db.drizzle

    // Base condition: post has non-empty default-locale content
    const hasDefaultContent = sql`exists (
      select 1 from ${micro_posts_locales}
      where ${micro_posts_locales._parentID} = ${micro_posts.id}
        and ${micro_posts_locales._locale} = ${defaultLocale}
        and nullif(${micro_posts_locales.content}, '') is not null
    )`

    const results = await Promise.all(
      locales.map(async (loc) => {
        if (loc === defaultLocale) {
          return { locale: loc, count: 0 }
        }
        const missingOrEmptyTarget = sql`not exists (
          select 1 from ${micro_posts_locales}
          where ${micro_posts_locales._parentID} = ${micro_posts.id}
            and ${micro_posts_locales._locale} = ${loc}
            and nullif(${micro_posts_locales.content}, '') is not null
        )`

        const rows = await db
          .select({ count: sql<number>`cast(count(*) as int)` })
          .from(micro_posts)
          .where(and(hasDefaultContent, missingOrEmptyTarget))

        return { locale: loc, count: rows?.[0]?.count ?? 0 }
      }),
    )

    return { counts: results, error: undefined }
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
      counts: null,
    }
  }
}
