'use client'

import { useWixClient } from '@/hooks/useWixClient';
import { currentCart } from "@wix/ecom";

import Image from 'next/image';
import React, { useEffect } from 'react'
import { useCartStore } from '@/hooks/useCartStore';
import {media as wixMedia} from '@wix/sdk'
import Link from 'next/link';

function CartModal() {

    const wixClient = useWixClient()

    const {cart, isLoading, removeItem} = useCartStore()

    const handleCheckOut = async () => {
        try {
            const checkout = await wixClient.currentCart.createCheckoutFromCurrentCart({
                channelType:currentCart.ChannelType.WEB
            })
            const {redirectSession} = await wixClient.redirects.createRedirectSession({
                ecomCheckout:{checkoutId:checkout.checkoutId},
                callbacks:{
                    postFlowUrl:window.location.origin,
                    thankYouPageUrl:`${window.location.origin}/success`
                }
            })

            if(redirectSession?.fullUrl){
                window.location.href = redirectSession.fullUrl
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-max p-4 bg-white top-12 right-0 flex flex-col absolute shadow-md rounded-md z-50'>
      { 
        !cart?.lineItems || !cart?.lineItems.length ? (
            <div>Cart is empty</div>
        ):
            <div className='flex flex-col gap-8'>
                <h1 className='text-lg font-bold'>Shopping Cart</h1>

                {
                    cart.lineItems.map((item)=>(
                        <div className='flex gap-4' key={item._id}>

                            {item.image && (
                                <Image 
                                    alt='image'
                                    className='object-cover rounded-md'
                                    width={72}
                                    height={96}
                                    src={wixMedia.getScaledToFillImageUrl(item.image,72,96,{})}
                                />
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
                


                <div className=''>
                    <div className='flex items-center justify-between font-semibold'>
                        <span>Subtotal</span>
                        <span>${cart.subtotal?.amount}</span>
                    </div>
                    <p className='text-gray-500 text-sm mt-2 mb-4'>Shipping and taxes calculated at checkout.</p>
                    <div className='flex justify-between text-sm'>
                        <Link href={'/cart'} className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View cart</Link>
                        <button 
                            className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75' 
                            disabled={isLoading}
                            onClick={handleCheckOut}
                        >
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
            
      }
    </div>
  )
}

export default CartModal
