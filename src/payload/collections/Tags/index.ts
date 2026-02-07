// collections/Tags.js
import type { CollectionConfig, TextField } from 'payload'
import { AutoTranslate } from 'src/payload/fields/autoTranslate'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
const nameField: TextField = {
  name: 'name',
  type: 'text',
  required: true,
  unique: true,
  label: 'Tag Name',
  localized: false,
  validate: (value) => {
    const re = /^\w+$/
    if (!re.test(value ?? '')) {
      return 'This field is required'
    }
    return true
  },
}
const Tags: CollectionConfig = {
  slug: 'tags',
  labels: {
    singular: 'Tag',
    plural: 'Tags',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    AutoTranslate,
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
      required: true,
    },
    {
  name: 'micro_posts',        // virtual field on Tag
  type: 'join',
  collection: 'micro_posts',  // join into Posts
  on: 'tags',           // the field on Posts that points to Tags
  hasMany: true,        // because posts.tags is hasMany
},
    nameField,
  ],
}

export default Tags
