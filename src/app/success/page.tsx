'use client'
import { useSearchParams,useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
function SuccessPage() {

  // const searchParams = useSearchParams()
  // const router = useRouter()

  // const orderId = searchParams.get('orderId')

  // useEffect(()=>{

  //   if(!orderId) return

  //   const timer = setTimeout(() => {
  //     router.push('/orders/'+orderId)
  //   }, 500000);

  //   return ()=> clearTimeout(timer)
  // },[orderId, router])
  return (
    <div className='flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]'>
      <Confetti width={2000} height={1000}/>
      <h1 className='text-6xl text-green-700'>Successfull</h1>
      <h2 className='text-xl font-medium'>We sent the invoice to your email!</h2>
      <h3>You are being redirected to the order page...</h3>
    </div>
  )
}

export default SuccessPage
