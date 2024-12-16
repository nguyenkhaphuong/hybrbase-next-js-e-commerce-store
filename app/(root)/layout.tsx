import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
