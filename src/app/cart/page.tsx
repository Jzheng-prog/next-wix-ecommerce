'use client'

import { useWixClient } from '@/hooks/useWixClient';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useCartStore } from '@/hooks/useCartStore';
import {media as wixMedia} from '@wix/sdk'
import Link from 'next/link';

function CartPage() {

    const wixClient = useWixClient()

    const {cart, isLoading, removeItem} = useCartStore()

  return (
    <div className='flex w-full items-center justify-center'>
        <div className='w-1/2 mt-12'>
            {
                !cart?.lineItems || !cart?.lineItems.length ? (
                    <div>
                        <h1 className='text-lg font-bold'>Shopping Cart</h1>
                        <p className='mt-12'>Your Cart is Empty</p>

                        <div className='mt-10'>
                            <div className='flex items-center justify-end font-semibold'>
                                <span className='mr-4'>Subtotal:</span>
                                <span>$0</span>
                            </div>
                            <p className='text-gray-500 text-sm mt-2 mb-4'>Shipping and taxes calculated at checkout.</p>
                            <div className='flex justify-end text-sm'>
                                <button 
                                    className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75' 
                                    disabled={isLoading}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                ):
                <div className='flex flex-col gap-8'>
                    <h1 className='text-2xl font-bold'>Shopping Cart</h1>
    
                    {
                        cart.lineItems.map((item)=>(
                            <div 
                                className='border p-3 flex gap-4' 
                                key={item._id}
                            >
                                {item.image && item.url ? (

                                    <Link
                                        href={item.url.substring(item?.url.lastIndexOf('/')+1)}
                                    >
                                        <Image 
                                            alt='image'
                                            className='object-cover rounded-md'
                                            width={72}
                                            height={96}
                                            src={wixMedia.getScaledToFillImageUrl(item.image,72,96,{})}
                                        />
                                    </Link>
                                    
                                ):(
                                    <div className="w-18 h-24 bg-gray-200 rounded-md">No image</div>
                                )}
    
                                <div className='flex flex-col justify-between w-full'>
                                    <div>
                                        <div className='flex items-center justify-between gap-8'>
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
    
                                    <div className='flex justify-between text-sm'>
                                        <span className='text-gray-500'>quantity {item.quantity}</span>
                                        <span 
                                            style={{cursor: isLoading ? 'not-allowed':'pointer'}}
                                            className={`text-blue-500 hover:underline aria-labels ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                                            onClick={()=>removeItem(wixClient, item._id!)}
                                        >
                                            remove
                                        </span>
    
                                    </div>
                                </div>
    
                            </div>
                        ))
    
                    }
                    
                    <div>
                        <div className='flex items-center justify-end font-semibold'>
                            <span className='mr-4'>Subtotal:</span>
                            <span>${cart.subtotal?.amount}</span>
                        </div>
                        <p className='text-gray-500 text-sm mt-2 mb-4'>Shipping and taxes calculated at checkout.</p>
                        <div className='flex justify-end text-sm'>
                            <button 
                                className='aria-labels rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75' 
                                disabled={isLoading}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                
                </div>
            }
      </div>
    </div>
  )
}

export default CartPage
