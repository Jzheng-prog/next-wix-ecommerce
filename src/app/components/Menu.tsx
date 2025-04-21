'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState}from 'react'

function Menu() {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Image 
      src='/menu.png' 
      alt='menu-image' 
      width={28} 
      height={28} 
      className='cursor-pointer'
      onClick={()=>setOpen(!open)}/>
      {
        open && (
            <div className='z-50 absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl'>
                <Link href='/' onClick={()=>{setOpen(false)}}>Home</Link>
                <Link href='/list' onClick={()=>{setOpen(false)}}>Shop</Link>
                <Link href='/comingSoon' onClick={()=>{setOpen(false)}}>Deals</Link>
                <Link href='/comingSoon' onClick={()=>{setOpen(false)}}>About</Link>
                <Link href='/comingSoon' onClick={()=>{setOpen(false)}}>Contact</Link>
                <Link href='/login' onClick={()=>{setOpen(false)}}>Login</Link>
                <Link href='/cart' onClick={()=>{setOpen(false)}}>Cart</Link>
            </div>
        )
      }
    </div>
  )
}

export default Menu
