import React from 'react'
import ProductImages from '../components/ProductImages'
import CustomizeProducts from '../components/CustomizeProducts'
import Add from '../components/Add'

function SinglePage() {
  return (
    <div className='border border-black spx-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      <div className='border border-black w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages/>
      </div>

      <div className='border border-green-500 w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Product name</h1>
        <p className='text-gray-500'>Upgrade your kitchen with the SmartBlend Electric Kettle, designed for speed, safety, and style. Featuring a 1.7L capacity, this sleek stainless steel kettle boils water in under 5 minutes, making it perfect for coffee, tea, and instant meals.</p>

        <div className='h-[2px] bg-gray-100'/>

        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-500 line-through'>$59</h3>
          <h2 className='text-2xl font-medium'>$49</h2>
        </div>

        <div className='h-[2px] bg-gray-100'/>
        <CustomizeProducts/>
        <Add/>

        <div className='h-[2px] bg-gray-100'/>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Upgrade your kitchen with the SmartBlend Electric Kettle, designed for speed, safety, and style. Featuring a 1.7L capacity, this sleek stainless steel kettle boils water in under 5 minutes, making it perfect for coffee, tea, and instant meals.</p>
        </div>

        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Upgrade your kitchen with the SmartBlend Electric Kettle, designed for speed, safety, and style. Featuring a 1.7L capacity, this sleek stainless steel kettle boils water in under 5 minutes, making it perfect for coffee, tea, and instant meals.</p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Upgrade your kitchen with the SmartBlend Electric Kettle, designed for speed, safety, and style. Featuring a 1.7L capacity, this sleek stainless steel kettle boils water in under 5 minutes, making it perfect for coffee, tea, and instant meals.</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
