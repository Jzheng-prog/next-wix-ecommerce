'use client'

import { useWixClient } from '@/hooks/useWixClient';
import { currentCart } from "@wix/ecom";

import Image from 'next/image';
import React, { useEffect } from 'react'
import { useCartStore } from '@/hooks/useCartStore';
import {media as wixMedia} from '@wix/sdk'

function CartModal() {

    const wixClient = useWixClient()

    const {cart, isLoading, removeItem} = useCartStore()

    console.log(cart)
  return (
    <div className='w-max border p-4 bg-white top-12 right-0 flex flex-col absolute shadow-md rounded-md z-50'>
      { 
        !cart?.lineItems ? (
            <div>Cart is empty</div>
        ):
            <div className='flex flex-col gap-8 border'>
                <h1 className='text-lg font-bold'>Shopping Cart</h1>

                {
                    cart.lineItems.map((item)=>(
                        <div className='border flex gap-4' key={item._id}>

                            {item.image && (
                                <Image 
                                    alt='image'
                                    className='object-cover rounded-md'
                                    width={72}
                                    height={96}
                                    src={wixMedia.getScaledToFillImageUrl(item.image,72,96,{})}
                                />
                            )}

                            <div className='border flex flex-col justify-between w-full'>
                                <div>
                                    <div className='border flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>{item.productName?.original}</h3>
                                        <p className='p-1 bg-gray-50 rounded-sm flex'>
                                            {
                                                item.quantity && item.quantity > 1 &&
                                                <div className='text-sm text-green-400 flex items-center mx-2'>{item.quantity} x </div>
                                            }
                                            ${item.price?.amount}
                                        </p>
                                    </div>

                                    <div className='text-sm text-gray-500'>{item.availability?.status}</div>
                                </div>

                                <div className='border flex justify-between text-sm'>
                                    <span className='text-gray-500'>quantity {item.quantity}</span>
                                    <span 
                                        style={{cursor: isLoading ? 'not-allowed':'pointer'}}
                                        className='text-blue-500' 
                                        onClick={()=>removeItem(wixClient, item._id!)}
                                    >
                                        remove
                                    </span>

                                </div>
                            </div>

                        </div>
                    ))

                }
                


                <div className='border'>
                    <div className='border flex items-center justify-between font-semibold'>
                        <span>Subtotal</span>
                        <span>${cart.subtotal?.amount}</span>
                    </div>
                    <p className='text-gray-500 text-sm mt-2 mb-4 border'>Shipping and taxes calculated at checkout.</p>
                    <div className='flex justify-between text-sm'>
                        <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View cart</button>
                        <button className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75' disabled={isLoading}>Checkout</button>
                    </div>
                </div>

            </div>
            
      }
    </div>
  )
}

export default CartModal
