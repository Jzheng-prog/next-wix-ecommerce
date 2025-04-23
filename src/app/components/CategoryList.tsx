import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function CategoryList() {

    const wixClient = await wixClientServer()
    
    const category = await wixClient.collections.queryCollections().find()

  return (
    <div className='px-4'>
      <div className='flex gap-4 md:gap-8 items-center justify-center'>

        {category.items.map((item)=>(
            <Link href={`/list?cat=${item.slug}`} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 hover:scale-105 transition hover:underline' key={item._id}>
                <div className='relative w-full h-96'>
                    <Image 
                        src={item.media?.mainMedia?.image?.url || '/cat.png'}
                        alt={item.name || 'Category image'}
                        fill 
                        sizes='20vw' 
                        className='object-cover'
                    />
                </div>
                <h1 className='mt-8 font-light text-xl tracking-wide'>{item.name}</h1>
            </Link>
        ))}
      </div>
    </div>
  )
}
