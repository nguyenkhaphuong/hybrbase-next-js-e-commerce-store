import Link from 'next/link'
import { primaryButtonColor, primaryButtonTextColor } from '../constants'

export default function Home() {
  return (
    <div className='hero-section px-6 max-md:px-4 py-8 flex flex-col items-center gap-y-6'>
      <h1 className='hero-heading text-5xl font-bold'>
        Better shopping for the planet
      </h1>
      <div className='hero-subtitle max-md:w-full w-3/4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        voluptatum quibusdam similique minus omnis reiciendis distinctio
        voluptates sint earum alias officiis eius illum modi possimus recusandae
        ea illo, beatae, sequi sunt quidem iusto voluptatem pariatur magnam!
        Similique ex ab molestiae quo, aliquid vitae autem. Nostrum autem
        corporis fugit deleniti omnis.
      </div>
      <div className='hero-cta'>
        <Link
          href='/shop'
          className={`${primaryButtonColor} ${primaryButtonTextColor} text-lg hover:bg-blue-900 font-medium rounded-xl px-6 py-4`}>
          Shop Now
        </Link>
      </div>
      <img
        src='https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Hero Image'
        className='max-md:w-full w-1/2 mt-8'
      />
    </div>
  )
}
