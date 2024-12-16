import {
  primaryButtonColor,
  primaryButtonTextColor,
  secondaryColor,
} from '@/app/constants'
import { Product } from '@/sanity.types'
import { client } from '@/sanity/lib/client'
import { PRODUCTS_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'
import React from 'react'

const Shop = async () => {
  const products = await client.fetch(PRODUCTS_QUERY)

  return (
    <div className='px-6 max-md:px-4 py-8 flex flex-col items-center gap-y-6'>
      <div className='hero-section flex flex-col gap-y-6 items-center'>
        <h1 className='hero-heading text-5xl font-bold'>Shop</h1>
        <div className='hero-subtitle max-md:w-full w-3/4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          exercitationem distinctio? Asperiores unde magnam facilis maxime iusto
          tempora. Vero, iusto.
        </div>
      </div>
      <div className='shop-section mt-8'>
        <div className='product-cards grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6'>
          {products?.length > 0 ? (
            products.map((product: Product) => (
              <div
                key={product._id}
                className={`product-card p-4 rounded-xl ${secondaryColor} flex flex-col justify-between gap-y-2`}>
                <img src={product.image || ''} alt={product.name || 'N/A'} />
                <div className='flex flex-col gap-3'>
                  <p className='text-lg truncate'>{product.name || 'N/A'}</p>
                  <p className='text-md'>
                    Price:
                    <span className='font-semibold ml-0.5'>
                      {product.price || 'N/A'}
                    </span>
                  </p>
                  <Link
                    className={`${primaryButtonColor} ${primaryButtonTextColor} hover:bg-blue-900 font-medium rounded-xl px-4 py-2`}
                    href={`./shop/${product._id}`}>
                    Buy Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h2>No Products Found</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
