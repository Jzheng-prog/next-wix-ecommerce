import React from 'react'

function CustomizeProducts() {
  return (
    <div className='border border-red-500 flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a Color</h4>
      <ul className='border flex items-center gap-3'>
        <li className='w-8 h-8 ring-1 rounded-full ring-gray-300 cursor-pointer relative bg-red-500'>
            <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </li>
        <li className='w-8 h-8 ring-1 rounded-full ring-gray-300 cursor-pointer relative bg-blue-500'/>
        <li className='w-8 h-8 ring-1 rounded-full ring-gray-300 cursor-not-allowed relative bg-green-500'>
            <div className='absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>

        </li>
      </ul>

      <h4 className='font-medium'>Choose a Size</h4>

      <ul className='border border-blue-600 flex items-center gap-3'>
        <li className='ring-1 bg-red-400 text-white rounded-md text-sm cursor-pointer py-1 px-4'>small</li>
        <li className='ring-1 bg-white-400 text-red-400 ring-red-400 rounded-md text-sm cursor-pointer py-1 px-4'>medium</li>
        <li className='ring-1 bg-blue-400 text-white rounded-md text-sm cursor-not-allowed py-1 px-4'>large</li>
      </ul>

    </div>
  )
}

export default CustomizeProducts
