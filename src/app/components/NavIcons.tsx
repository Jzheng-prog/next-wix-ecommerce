'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import CartModal from './CartModal'
import { useWixClient } from '@/hooks/useWixClient'
import Cookies from 'js-cookie'
import { useCartStore } from '@/hooks/useCartStore'
import { IoLogOutOutline } from "react-icons/io5";


function NavIcons() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn();

  const {counter, getCart} = useCartStore()
  const profileRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null)

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
  useEffect(()=>{
    getCart(wixClient)
  },[wixClient, getCart])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    function handleClickOutsideCart(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutsideCart);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCart);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn && window.location.pathname === '/login') {
      router.push('/');
    }
  }, [isLoggedIn]);
    
  return (
    <div className='flex gap-4 xl:gap-6 items-center relative'>
      <Image src='/profile.png' alt='Profile Icon' width={22} height={22} className='cursor-pointer' onClick={handleProfile}/>
      {isProfileOpen && (
        <div ref={profileRef} className="absolute top-12 left-0 z-50 w-40 rounded-md bg-white p-4 shadow-lg border">
          <Link
            href="/profile"
            className="block px-2 py-2 text-sm hover:bg-gray-100 rounded"
          >
            Profile
          </Link>
          <div
            className="flex  justify-between items-center px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 rounded"
            onClick={handleLogout}
          >
            <p>{isLoading ? "Logging out..." : "Logout"}</p>
            <IoLogOutOutline />

          </div>
        </div>
      )}
      <Image src='/notification.png' alt='Notifications' width={22} height={22} className='cursor-pointer'/>

      <div className='relative' onClick={()=>setIsCartOpen(!isCartOpen)}>
        <Image src='/cart.png' alt='Shopping Cart' width={22} height={22} className='cursor-pointer'/>

        <div className='absolute -top-4 -right-4 h-6 w-6 bg-black text-white rounded-full items-center justify-center flex'>{counter}</div>
      </div>
      {isCartOpen && (
        <div ref={cartRef} className="absolute -right-14 top-0 z-50">
          <CartModal />
        </div>
      )}
    </div>
  )
}

export default NavIcons
