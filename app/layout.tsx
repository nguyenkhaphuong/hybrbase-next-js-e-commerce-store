import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HYBRBASE E-commerce App',
  description: 'This is the e-commerce technical assessment project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${interTight} antialiased`}>{children}</body>
    </html>
  )
}
