import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className=' bg-gray-100 text-sm mt-24 py-24 px-4 lg:px-16 xl:px-32 2xl:px-64 '>
      {/* top */}
      <div className='flex flex-col gap-24 md:flex-row'>
        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href='/'>
            <div className='text-2xl tracking-wide'>SneakerVerse</div>          
          </Link>
          <p>DC, Maryland, Virginia, United States</p>
          <span className='font-semibold'>SneakerVerse@SneakerVerse.com</span>
          <span className='font-semibold'> 1 234 567 8900</span>
          <div className='flex gap-6'>
            <Image src='/facebook.png' width={16} height={16} alt=''/>
            <Image src='/youtube.png' width={16} height={16} alt=''/>
            <Image src='/x.png' width={16} height={16} alt=''/>
            <Image src='/pinterest.png' width={16} height={16} alt=''/>
          </div>
        </div>

        {/* center */}
        <div className='hidden lg:flex  justify-between w-1/2'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Company</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/about'>About Us</Link>
              <Link href='/comingSoon'>Careers</Link>
              <Link href='/comingSoon'>Affiliates</Link>
              <Link href='/comingSoon'>Blog</Link>
              <Link href='/comingSoon'>Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Shop</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/comingSoon'>New Arrival</Link>
              <Link href='/list?cat=accesories'>Accessories</Link>
              <Link href='/comingSoon'>Men</Link>
              <Link href='/comingSoon'>Women</Link>
              <Link href='/list'>All Products</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Help</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/comingSoon'>Customer Service</Link>
              <Link href='/profile'>My Account</Link>
              <Link href='/comingSoon'>Find A Stores</Link>
              <Link href='/privacy-policy'>Legal & Privacy</Link>
              <Link href='/comingSoon'>Gift Card</Link>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          {/* <h1 className='font-medium text-lg'>Subscribe</h1>
          <p>Be first to get the latest news about trends, promotions, and much more!</p>
          <div className='flex'>
            <input type="text" placeholder='Email address' className='p-4 w-3/4' />
            <button className='w-1/4 bg-red-400 text-white'>Join</button>
          </div> */}
          <h1 className='font-medium text-lg'>Secure Payment</h1>
          <div className='flex justify-between'>
            <Image src='/discover.png' alt='' width={40} height={20}/>
            <Image src='/skrill.png' alt='' width={40} height={20}/>
            <Image src='/paypal.png' alt='' width={40} height={20}/>
            <Image src='/mastercard.png' alt='' width={40} height={20}/>
            <Image src='/visa.png' alt='' width={40} height={20}/>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div>2024 SneakerVerse Shop</div>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className=''>
            <span className='text-gray-500 mr-4'>Languange</span>
            <span className='font-medium'>United States | English</span>
          </div>
          <div className=''>
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$USD</span>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Footer

