import { wixClientServer } from '@/lib/wixClientServer'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function OrderPage({params}:{params:{id:string}}) {

  const id = params.id
  const wixClient = await wixClientServer()

  let order;

  try {
    order = await wixClient.orders.getOrder(id)
  } catch (error) {
    return notFound()
  }
  return (
    <div className='flex flex-col h-[calc(100vh-180px)] items-center justify-center'>
      <h1 className='text-xl'>Order Details</h1>

      <div className='mt-12 flex flex-col gap-6'>
        <div className=''>
          <span className='font-medium'>Order Id:</span>
          <span>{order._id}</span>
        </div>
        <div className=''>
          <span className='font-medium'>Reciever name:</span>
          <span>
            {order.billingInfo?.contactDetails?.firstName}+' '+ {order.billingInfo?.contactDetails?.lastName}
          </span>
        </div>

        <div className=''>
          <span className='font-medium'>Reciever email:</span>
          <span>
            {order.buyerInfo?.email}
          </span>
        </div>

        <div className=''>
          <span className='font-medium'>Price:</span>
          <span>
            {order.priceSummary?.subtotal?.amount}
          </span>
        </div>

        <div className=''>
          <span className='font-medium'>Payment Status:</span>
          <span>
            {order.paymentStatus}
          </span>
        </div>
        <div className=''>
          <span className='font-medium'>Delievery Address:</span>
          <span>
            {order.billingInfo?.address?.addressLine1} + " "{order.billingInfo?.address?.city}
          </span>
        </div>
        <Link href={'/'} className='underline mt-6'>Have a problem? Contact us</Link>
      </div>
      
    </div>
  )
}
