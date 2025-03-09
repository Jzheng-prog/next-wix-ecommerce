import Image from 'next/image'
import React from 'react'
import Filter from '../components/Filter'

function ListPage() {
  return (
    <div className='border border-black spx-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className='bg-pink-50 px-4 hidden md:flex justify-between h-64'>
        <div className='border border-red-600 w-2/3 flex flex-col items-center justify-center gap-8'>
          <h1>Grab up to 50% off on <br />Selected Products</h1>
          <button>Buy Now</button>
        </div>
        <div className='relative w-1/3'>
          <Image src='/woman.png' alt='' fill className='object-contain'/>
        </div>
      </div>

      <Filter/>
      
      
    </div>
  )
}

export default ListPage
