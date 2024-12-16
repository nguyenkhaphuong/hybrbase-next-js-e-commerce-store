import { secondaryColor } from '@/app/constants'
import React from 'react'

const Cart = () => {
  return (
    <div className='px-6 max-md:px-4 py-8 flex flex-col gap-y-6 h-screen'>
      <h1 className='hero-heading text-5xl font-bold text-center'>Cart</h1>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>
        <div className='cart-items flex flex-col gap-y-4'>
          <div
            className={`cart-item flex gap-x-2 rounded-md ${secondaryColor} p-4`}>
            <img src='' alt='Item' width='80px' />
            <div className='flex flex-col gap-y-2'>
              <p className='text-xl font-semibold'>Name</p>
              <p className='text-lg'>$1999</p>
            </div>
          </div>
          <div
            className={`cart-item flex gap-x-2 rounded-md ${secondaryColor} p-4`}>
            <img src='' alt='Item' width='80px' />
            <div className='flex flex-col gap-y-2'>
              <p className='text-xl font-semibold'>Name</p>
              <p className='text-lg'>$1999</p>
            </div>
          </div>
          <div
            className={`cart-item flex gap-x-2 rounded-md ${secondaryColor} p-4`}>
            <img src='' alt='Item' width='80px' />
            <div className='flex flex-col gap-y-2'>
              <p className='text-xl font-semibold'>Name</p>
              <p className='text-lg'>$1999</p>
            </div>
          </div>
        </div>
        <div
          className={`checkout-container h-3/4 rounded-md ${secondaryColor} p-4`}>
          <p className='text-xl font-semibold'>Checkout</p>
          <div className='mt-4 checkout-detail flex flex-col gap-y-3'>
            <p className='text-md flex justify-between'>
              Total <span className='font-bold'>$1999</span>
            </p>
            <p className='text-md flex justify-between'>
              Discounts <span className='font-bold'>-$20</span>
            </p>
            <hr />
            <p className='text-xl flex justify-between'>
              Final Price <span className='font-bold'>$1979</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
