'use client'
import { useCartStore } from '@/hooks/useCartStore'
import { useWixClient } from '@/hooks/useWixClient'
import React, { useState } from 'react'

interface AddProps {
  stockNum:number,
  productId:string,
  variantId:string
}
function Add({stockNum, productId, variantId}:AddProps) {

    const [quantity, setQuantity] = useState(1)
    const wixClient = useWixClient()

    const handleClick = (action:string)=>{
        if(action ==='minus' && quantity > 1){
            setQuantity(quantity-1)
        }
        if(action ==='add' && quantity < stockNum){
            setQuantity(quantity+1)
        }
    }

    const {addItem, isLoading} = useCartStore()

    // const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   e.preventDefault(); // ← stops any default behavior
    //   console.log("Adding to cart...", { productId, quantity, variantId });
    //   addItem(wixClient, productId, quantity, variantId);
    // };
    

  return (
    <div>
      <h4 className='mb-3'>Choose A Quantity</h4>
      <div className='md:flex justify-between'>
        <div className='flex items-center gap-4'>
            <div className=' bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
                <button className={`text-xl`} onClick={()=>handleClick('minus')}>-</button>
                  {stockNum > 0 ? quantity : 0}
                <button className='text-xl' onClick={()=>handleClick('add')}>+</button>
            </div>
            {stockNum < 1 ? (
              <div className='text-xs font-semibold underline'>
                Product Out of Stock!
              </div>
            ):(
              <div className='text-xs'>
                Only <span className='text-orange-500'>{stockNum} items</span> left! <br />{"Don't"} miss it!
              </div>
            )}
            
        </div>
        <button 
          type="button"
          className='mt-3 md:mt-0 transition ring-1 w-36 rounded-3xl ring-black py-2 px-4 enabled:hover:bg-black enabled:hover:text-white  disabled:cursor-not-allowed disabled:transition-none'
          disabled={isLoading || stockNum === 0 ? true: false}
          onClick={()=>addItem(wixClient, productId, quantity,variantId)}
          // onClick={(e)=>handleAddToCart(e)}
          >
          Add to Cart
        </button>

      </div>
     
    </div>
  )
}

export default Add
