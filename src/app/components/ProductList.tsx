import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductList() {
  return (
    <div className='border flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='border relative w-full h-80'>
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
        </div>
        <div className='border flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semiboldm'>$39</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-red-400 bg-white text-xs py-2 px-4 hover:bg-red-400 hover:text-white w-max'>Add to Cart</button>
      </Link>
      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='border relative w-full h-80'>
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
        </div>
        <div className='border flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semiboldm'>$39</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-red-400 bg-white text-xs py-2 px-4 hover:bg-red-400 hover:text-white w-max'>Add to Cart</button>
      </Link>
      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='border relative w-full h-80'>
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
        </div>
        <div className='border flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semiboldm'>$39</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-red-400 bg-white text-xs py-2 px-4 hover:bg-red-400 hover:text-white w-max'>Add to Cart</button>
      </Link>
      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='border relative w-full h-80'>
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt='' 
                fill sizes='25vw' 
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
        </div>
        <div className='border flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semiboldm'>$39</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-red-400 bg-white text-xs py-2 px-4 hover:bg-red-400 hover:text-white w-max'>Add to Cart</button>
      </Link>
    </div>
  )
}

export default ProductList
