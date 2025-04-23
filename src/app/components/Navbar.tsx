import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'

const NavIcons = dynamic(()=>import('./NavIcons'), {ssr:false})

function Navbar() {

  return (
    <div className=' h-20 px-4 md:px-8 lg:px-16 xl:32 2xl: relative border-b'>
      {/* mobile */}
      <div className='flex items-center justify-between h-full md:hidden'>
        <Link href='/'>
          <div className='text-2xl tracking-wide'>SneakerVerse</div>
        </Link>
        <Menu/>
      </div>

      {/* Bigger screen */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        <div className='w-1/3 xl:w-1/2 flex items-center justify-between gap-3'>
          <Link href='/' className='flex items-center gap-3'>
            {/* <Image src='/logo.png' alt='logo' width={24} height={24}/> */}
            <div className='text-2xl tracking-wide'>SneakerVerse</div>
          </Link>
          <div className='hidden xl:flex gap-4'>
              <Link href='/'>Home</Link>
              <Link href='/list'>Shop</Link>
              <Link href='/#features'>Popular</Link>
              <Link href='/about'>About</Link>
              <Link href='/contact'>Contact</Link>
              <Link href='/cart'>Cart</Link>
          </div>
        </div>

        <div className='w-2/3 flex items-center justify-between gap-8'>
          <SearchBar/>
          <NavIcons/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
