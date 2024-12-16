import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
