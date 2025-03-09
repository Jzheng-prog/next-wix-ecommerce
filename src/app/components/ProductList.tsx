import { wixClientSever } from '@/lib/wixClientServer'
import { products } from '@wix/stores'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DOMPurify from 'isomorphic-dompurify'
interface ProductListProps {
  categoryId?: string
  limit?: number
  searchParams?: any
}
async function ProductList({categoryId,limit,searchParams}:ProductListProps) {

  const wixClient = await wixClientSever()

  const res = await wixClient.products.queryProducts().eq("collectionIds",categoryId).limit(limit || 20).find()

  return (
    <div className='border flex gap-x-8 gap-y-16 justify-between flex-wrap'>

      {res.items.map((product:products.Product)=>(
        <Link href={'/'+product.slug} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' key={product._id}>
          <div className='border relative w-full h-80'>
              <Image 
                  src={product.media?.mainMedia?.image?.url || '/product.png'}
                  alt='' 
                  fill sizes='25vw' 
                  className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
              />
              {
                product.media?.items && (
                  <Image 
                    src={product.media?.items[1]?.image?.url || '/product.png'}
                    alt='' 
                    fill sizes='25vw' 
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 p-10'
                  />
                )
              }
             
          </div>
          <div className='border flex justify-between'>
            <span className='font-medium'>{product.name}</span>
            <span className='font-semiboldm'>${product.price?.price}</span>
          </div>
          {
            product.additionalInfoSections && (
              <div className='text-sm text-gray-500' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(product.additionalInfoSections?.find((section:any)=>section.title==='shortDesc')?.description || '')}}/>
            )
          }
  
          <button className='rounded-2xl ring-1 ring-red-400 bg-white text-xs py-2 px-4 hover:bg-red-400 hover:text-white w-max'>Add to Cart</button>
        </Link>

      ))}

      
    </div>
  )
}

export default ProductList
