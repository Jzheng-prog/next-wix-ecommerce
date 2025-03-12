'use client'
import React, { useState } from 'react'

interface AddProps {
  stockNum:number,
  productId:string,
  variantId:string
}
function Add({stockNum, productId, variantId}:AddProps) {

    const [quantity, setQuantity] = useState(1)

    const handleClick = (action:string)=>{

        if(action ==='minus' && quantity > 1){
            setQuantity(quantity-1)
        }
        if(action ==='add' && quantity < stockNum){
            setQuantity(quantity+1)
        }
    }
  return (
    <div>
      <h4>Choose A Quantity</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
            <div className='border bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
                <button className='text-xl' onClick={()=>handleClick('minus')}>-</button>
                {quantity}
                <button className='text-xl' onClick={()=>handleClick('add')}>+</button>
            </div>
            {stockNum < 1 ? (
              <div className='text-xs'>
                Product Out of Stock!
              </div>
            ):(
              <div className='text-xs'>
                Only <span className='text-orange-500'>{stockNum} items</span> left! <br />{"Don't"} miss it!
              </div>
            )}
            
        </div>
        <button className='ring-1 w-36 rounded-3xl ring-red-400 py-2 px-4 hover:bg-red-400 hover:text-white'>Add to Cart</button>

      </div>
     
    </div>
  )
}

export default Add
