// collections/Tags.js
import { CollectionConfig } from 'payload';
import {anyone} from "../../access/anyone";
import {authenticated} from "../../access/authenticated";

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
  admin:{
    useAsTitle:'name'
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
