import type { Field } from 'payload'

export const AutoTranslate: Field = {
  name: 'auto_translate',
  label: 'Auto Translate',
  type: 'ui',
  admin: {
    position: 'sidebar',
    components: {
      Field: '@/components/AutoTranslation/AutoTranslateButton#default',
    },
  },
}
