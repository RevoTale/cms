import type { CollectionBeforeChangeHook, DataFromCollectionSlug, TypedLocale } from 'payload'

import { locales } from 'src/i18n-config'

type MicroPostData = DataFromCollectionSlug<'micro_posts'>

type CronLocale =
  | TypedLocale
  | {
      value: TypedLocale
    }
  | null
  | undefined

const localeSet = new Set<TypedLocale>(locales)

const isTypedLocale = (value: unknown): value is TypedLocale =>
  typeof value === 'string' && localeSet.has(value as TypedLocale)

const isSelectOption = (value: CronLocale): value is { value: TypedLocale } => {
  if (!value || typeof value !== 'object' || !('value' in value)) {
    return false
  }

  const locale = (value as { value: unknown }).value

  return isTypedLocale(locale)
}

const dedupeCronTranslationLocalesQueuedHook: CollectionBeforeChangeHook<MicroPostData> = ({
  data,
}) => {
  if (!data || !Array.isArray(data.cronTranslationLocalesQueued)) {
    return data
  }

  const seen = new Set<TypedLocale>()
  const normalized: TypedLocale[] = []

  for (const entry of data.cronTranslationLocalesQueued as CronLocale[]) {
    const locale =
      typeof entry === 'string'
        ? isTypedLocale(entry)
          ? entry
          : null
        : isSelectOption(entry)
          ? entry.value
          : null

    if (!locale || seen.has(locale)) {
      continue
    }

    seen.add(locale)
    normalized.push(locale)
  }

  return {
    ...data,
    cronTranslationLocalesQueued: normalized,
  }
}

export default dedupeCronTranslationLocalesQueuedHook
