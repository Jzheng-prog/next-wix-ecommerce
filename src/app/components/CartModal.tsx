'use client'

import Image from 'next/image';
import React from 'react'

function CartModal() {

    const cartItem = true;
  return (
    <div className='w-max border p-4 bg-white top-12 right-0 flex flex-col absolute shadow-md rounded-md z-50'>
      {
        !cartItem? (
            <div>Cart is empty</div>
        ):
            <div className='flex flex-col gap-8 border'>
                <h1 className='text-lg font-bold'>Shopping Cart</h1>
                <div className='border flex gap-4'>
                    <Image 
                        alt='image'
                        className='object-cover rounded-md'
                        width={72}
                        height={96}
                        src='https://images.pexels.com/photos/27964624/pexels-photo-27964624/free-photo-of-a-woman-in-a-white-shirt-and-white-pants-holding-a-brown-purse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    />

                    <div className='border flex flex-col justify-between w-full'>
                        <div>
                            <div className='border flex items-center justify-between gap-8'>
                                <h3 className='font-semibold'>ProductName</h3>
                                <p className='p-1 bg-gray-50 rounded-sm'>$49</p>
                            </div>

                            <div className='text-sm text-gray-500'>Avalib desc</div>
                        </div>

                        <div className='border flex justify-between text-sm'>
                            <span className='text-gray-500'>quantity 2</span>
                            <span className='text-blue-500'>remove</span>

                        </div>
                    </div>

                </div>


                <div className='border'>
                    <div className='border flex items-center justify-between font-semibold'>
                        <span>Subtotal</span>
                        <span>$49</span>
                    </div>
                    <p className='text-gray-500 text-sm mt-2 mb-4 border'>Shipping and taxes calculated at checkout.</p>
                    <div className='flex justify-between text-sm'>
                        <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View cart</button>
                        <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
                    </div>
                </div>

            </div>
            
      }
    </div>
  )
}

export default CartModal
