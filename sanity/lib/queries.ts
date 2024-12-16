import { defineQuery } from 'next-sanity'

export const PRODUCTS_QUERY = defineQuery(`*[_type=="product"]{
  _id,
  name,
  description,
  image,
  price
}`)

export const PRODUCT_QUERY = defineQuery(`*[_type=="product" && _id==$id]{
  _id,
  name,
  description,
  image,
  price
}[0]`)
