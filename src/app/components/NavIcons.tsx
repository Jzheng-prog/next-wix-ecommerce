'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CartModal from './CartModal'
import { useWixClient } from '@/hooks/useWixClient'
import Cookies from 'js-cookie'
import { useCartStore } from '@/hooks/useCartStore'

function NavIcons() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn();

  if(isLoggedIn){
    router.push('/')
  }

  const handleProfile = ()=>{
    if(!isLoggedIn){
      router.push('/login')
    }else{
      setIsProfileOpen(!isProfileOpen)
    }
  }

  const handleLogout = async ()=>{
    setIsLoading(true)
    Cookies.remove('refreshToken')
    const {logoutUrl} = await wixClient.auth.logout(window.location.href)
    setIsLoading(false)
    setIsProfileOpen(false)
    router.push(logoutUrl)

  }


  const {cart,counter, getCart} = useCartStore()
  
  useEffect(()=>{
      getCart(wixClient)
  },[wixClient, getCart])
    
  return (
    <div className='flex gap-4 xl:gap-6 items-center relative'>
      <Image src='/profile.png' alt='' width={22} height={22} className='cursor-pointer' onClick={handleProfile}/>
      {
        isProfileOpen && (
          <div className='absolute p-4 top-12 left-0 text-sm z-50 shadow-lg rounded-md bg-white'>
            <Link href='/profile'>Profile</Link>
            <div onClick={handleLogout}>{isLoading ? 'Logging out' : 'Logout'}</div>
          </div>
        )
      }
      <Image src='/notification.png' alt='' width={22} height={22} className='cursor-pointer'/>

      <div className='relative' onClick={()=>setIsCartOpen(!isCartOpen)}>
        <Image src='/cart.png' alt='' width={22} height={22} className='cursor-pointer'/>

        <div className='absolute -top-4 -right-4 h-6 w-6 bg-red-400 text-white rounded-full items-center justify-center flex'>{counter}</div>
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
