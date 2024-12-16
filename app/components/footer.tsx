import React from 'react'
import { secondaryColor } from '../constants'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div
      className={`${secondaryColor} p-6 footer flex justify-center items-center`}>
      Copyright &copy; {year} Nguyen Kha Phuong
    </div>
  )
}

export default Footer
