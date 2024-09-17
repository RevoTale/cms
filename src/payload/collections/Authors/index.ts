// collections/Tags.js
import { CollectionConfig } from 'payload';
import {slugField} from "../../fields/slug";

const Authors: CollectionConfig = {
  slug: 'authors',
  labels: {
    singular: 'Author',
    plural: 'Authors',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tag Name',
      maxLength:32
    },
    slugField(),
    {
      name:'bio',
      type:'text'
    },
    {
      name:'avatar',
      required:false,
      type:'upload',
      relationTo:'media'
    },
    {
      name:'user',
      type:'relationship',
      relationTo:'users',
      required:true
    }
  ],
};

export default Authors;
