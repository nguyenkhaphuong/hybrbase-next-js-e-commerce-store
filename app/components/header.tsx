'use client'

import React from 'react'
import {
  backgroundColor,
  primaryButtonColor,
  primaryButtonTextColor,
  primaryColor,
} from '../constants'
import Link from 'next/link'

const Header = () => {
  return (
    <div
      className={`px-8 max-md:px-4 py-4 flex justify-between items-center ${backgroundColor}`}>
      <div className='nav-left-wrapper flex gap-8'>
        <div className='nav-logo'>
          <a href='/' className='font-bold'>
            Ecommerce
          </a>
        </div>
      </div>
      <div className='nav-links flex gap-6'>
        <div className='nav-link'>
          <Link href='/shop'>Shop</Link>
        </div>
        <div className='nav-link'>
          <Link href='/cart'>Cart</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
