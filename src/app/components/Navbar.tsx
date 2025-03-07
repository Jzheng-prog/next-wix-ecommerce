import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

function Navbar() {
  return (
    <div className='border border-black h-20 px-4 md:px-8 lg:px-16 xl:32 2xl: relative'>
      {/* mobile */}
      <div className='border flex items-center justify-between h-full md:hidden'>
        <Link href='/'>
          <div className='text-2xl tracking-wide'>LAMA</div>
        </Link>
        <Menu/>
      </div>

      {/* Bigger screen */}
      <div className='border hidden md:flex items-center justify-between gap-8 h-full'>
        <div className='border border-blue-700 w-1/3 xl:w-1/2 flex items-center justify-between gap-3'>
          <Link href='/' className='flex items-center gap-3'>
            <Image src='/logo.png' alt='logo' width={24} height={24}/>
            <div className='text-2xl tracking-wide'>LAMA</div>
          </Link>
          <div className='hidden xl:flex gap-4 border'>
              <Link href='/'>Home</Link>
              <Link href='/'>Shop</Link>
              <Link href='/'>Deals</Link>
              <Link href='/'>About</Link>
              <Link href='/'>Contact</Link>
              <Link href='/'>Login</Link>
              <Link href='/'>Cart(1)</Link>
          </div>
        </div>

        <div className='border-red-700 border w-2/3 flex items-center justify-between gap-8'>
          <SearchBar/>
          <NavIcons/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
