// collections/Tags.js
import { CollectionConfig } from 'payload';
import {anyone} from "../../access/anyone";
import {authenticated} from "../../access/authenticated";
import {slugField} from "../../fields/slug";

const Authors: CollectionConfig = {
  slug: 'authors',
  labels: {
    singular: 'Author',
    plural: 'Authors',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Author Name',
      maxLength:32
    },
    slugField('name',{
      unique:true,
      required:true
    }),
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
