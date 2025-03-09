import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='border bg-gray-100 text-sm mt-24 py-24 px-4 lg:px-16 xl:px-32 2xl:px-64 '>
      {/* top */}
      <div className='border border-blue-700 flex flex-col gap-24 md:flex-row'>
        {/* left */}
        <div className='border w-full md:w-1/2 lg:w-1/4 border-green-500 gap-8'>
          <Link href='/'>
            <div className='text-2xl tracking-wide'>Lama</div>          
          </Link>
          <p>101010 Winkoll Street, Chillville, New York 90923, United States</p>
          <span className='font-semibold'>lamadec@.com</span>
          <span className='font-semibold'> 1 234 567 8900</span>
          <div className='border border-black flex gap-6'>
            <Image src='/facebook.png' width={16} height={16} alt=''/>
            <Image src='/youtube.png' width={16} height={16} alt=''/>
            <Image src='/x.png' width={16} height={16} alt=''/>
            <Image src='/pinterest.png' width={16} height={16} alt=''/>
          </div>
        </div>

        {/* center */}
        <div className='hidden lg:flex  justify-between w-1/2 border-pink-950'>
          <div className='border border-fuchsia-500 flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Company</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>About Us</Link>
              <Link href=''>Careers</Link>
              <Link href=''>Affiliates</Link>
              <Link href=''>Blog</Link>
              <Link href=''>Contact Us</Link>
            </div>
          </div>

          <div className='border border-fuchsia-500 flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Shop</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>New Arrival</Link>
              <Link href=''>Accessories</Link>
              <Link href=''>Men</Link>
              <Link href=''>Women</Link>
              <Link href=''>All Products</Link>
            </div>
          </div>

          <div className='border border-fuchsia-500 flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Help</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>Customer Service</Link>
              <Link href=''>My Account</Link>
              <Link href=''>Find A Stores</Link>
              <Link href=''>Legal & Privacy</Link>
              <Link href=''>Gift Card</Link>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='border border-red-700 w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>Subscribe</h1>
          <p>Be first to get the latest news about trends, promotions, and much more!</p>
          <div className='flex'>
            <input type="text" placeholder='Email address' className='p-4 w-3/4' />
            <button className='w-1/4 bg-red-400 text-white'>Join</button>
          </div>
          <span className='font-semibold'>secure Payment</span>
          <div className='border border-black flex justify-between'>
            <Image src='/discover.png' alt='' width={40} height={20}/>
            <Image src='/skrill.png' alt='' width={40} height={20}/>
            <Image src='/paypal.png' alt='' width={40} height={20}/>
            <Image src='/mastercard.png' alt='' width={40} height={20}/>
            <Image src='/visa.png' alt='' width={40} height={20}/>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className='border border-black flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div>2024 Lama Shop</div>
        <div className='border flex flex-col gap-8 md:flex-row'>
          <div className='border'>
            <span className='text-gray-500 mr-4'>Languange</span>
            <span className='font-medium'>United States | English</span>
          </div>
          <div className='border'>
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$USD</span>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Footer

