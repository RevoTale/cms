// collections/Tags.js
import { CollectionConfig } from 'payload';

const Tags: CollectionConfig = {
  slug: 'tags',
  labels: {
    singular: 'Tag',
    plural: 'Tags',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tag Name',
    },
  ],
};

export default Tags;
