import { primaryButtonColor, primaryButtonTextColor } from '@/app/constants'
import { client } from '@/sanity/lib/client'
import { PRODUCT_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'
import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const product = await client.fetch(PRODUCT_QUERY, { id })

  if (!product) {
    return (
      <h1 className='hero-heading text-5xl font-bold text-center max-md:text-3xl'>
        Product Not Found
      </h1>
    )
  }

  const { name, description, image, price } = product

  return (
    <div className='px-6 max-md:px-4 pb-8 flex flex-col gap-y-6'>
      <h1 className='hero-heading text-5xl font-bold text-center max-md:text-3xl'>
        Details
      </h1>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>
        <img className='max-md:w-full' src={image} alt={name || 'N/A'} />
        <div className='product-detail flex flex-col gap-y-2'>
          <h4 className='text-2xl font-bold'>{name}</h4>
          <p>{description}</p>
          <p className='text-2xl font-semibold'>${price}</p>
          <Link
            className={`${primaryButtonColor} ${primaryButtonTextColor} w-fit hover:bg-blue-900 font-medium rounded-xl px-6 py-4 mt-4`}
            href='../../cart'>
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
