// collections/Tags.js
import { CollectionConfig, Field, TextField } from 'payload';
import {anyone} from "../../access/anyone";
import {authenticated} from "../../access/authenticated";
const nameField:TextField = {
  name: 'name',
  type: 'text',
  required: true,
  label: 'Tag Name',
  localized:false,
  validate: (value) => {
    var re = /^\w+$/;
    if (re.test(value??''))  {
      return 'This field is required'
    }
    return true;
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
  admin:{
    useAsTitle:'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized:true,
      required: true,
    },
    nameField
  ],
};

export default Tags;
