'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'

function NavIcons() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = ()=>{
    if(!isLoggedIn){
      router.push('/login')
    }
    setIsProfileOpen(!isProfileOpen)
  }
  return (
    <div className='border flex gap-4 xl:gap-6 items-center relative'>
      <Image src='/profile.png' alt='' width={22} height={22} className='cursor-pointer' onClick={handleProfile}/>
      {
        isProfileOpen && (
          <div className=' absolute p-4 top-12 left-0 text-sm z-50 shadow-lg rounded-md'>
            <Link href='/'>Profile</Link>
            <div>Logout</div>
          </div>
        )
      }
      <Image src='/notification.png' alt='' width={22} height={22} className='cursor-pointer'/>

      <div className='border relative' onClick={()=>setIsCartOpen(!isCartOpen)}>
        <Image src='/cart.png' alt='' width={22} height={22} className='cursor-pointer'/>

        <div className='absolute -top-4 -right-4 h-6 w-6 bg-red-400 text-white rounded-full items-center justify-center flex'>2</div>
      </div>
      {
        isCartOpen && (
          <CartModal/>
        )
      }
    </div>
  )
}

export default NavIcons
