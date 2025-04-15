'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function ProductImages({items}:{items:any}) {

  const [index, seIndex] = useState(0)

  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image src={items[index].image?.url} fill className='object-cover rounded-md' sizes='50vw' alt=''/>
      </div>
      <div className='flex justify-center gap-4 mt-8'>
        {items.map((item:any,i:number)=>(
          <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={item._id} onClick={()=>seIndex(i)}>
            <Image src={item.image?.url} fill className='object-cover rounded-md' sizes='30vw' alt=''/>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
