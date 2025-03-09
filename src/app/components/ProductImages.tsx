'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
  {
    id:1,
    url: 'https://images.pexels.com/photos/30135207/pexels-photo-30135207/free-photo-of-urban-streetview-of-classic-new-york-architecture.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
  },
  {
    id:2,
    url: 'https://images.pexels.com/photos/30888208/pexels-photo-30888208/free-photo-of-cozy-morning-with-latte-art-and-newspaper.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
  },
  {
    id:3,
    url: 'https://images.pexels.com/photos/17555909/pexels-photo-17555909/free-photo-of-cup-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
  }
]
function ProductImages() {

  const [index, seIndex] = useState(0)
  return (
    <div className='border border-orange-500'>
      <div className='h-[500px] relative'>
        <Image src={images[index].url} fill className='object-cover rounded-md' sizes='50vw' alt=''/>
      </div>
      <div className='border border-blue-800 flex justify-between gap-4 mt-8'>
        {images.map((item, index)=>(
          <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={item.id} onClick={()=>seIndex(index)}>
            <Image src={item.url} fill className='object-cover rounded-md' sizes='30vw' alt=''/>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
