import React from 'react'

function Filter() {
  return (
    <div className='border border-blue-500 mt-12 flex justify-between'>
        <div className='border border-black flex gap-6 flex-wraps'>
            <select name="" id="" className='border border-black py-2 px-4 rounded-2xl text-sm font-medium bg-gray-100'>
                <option value="">Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name="min" id="" placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <input type="text" name="max" id="" placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <select name="cat" className='border border-black py-2 px-4 rounded-2xl text-sm font-medium bg-gray-100'>
                <option value="">Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
            <select
                name=""
                id=""
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
                >
                <option>All Filters</option>
            </select>
        </div>


        <div className="">
            <select
            name="sort"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
            >
            <option>Sort By</option>
            <option value="asc price">Price (low to high)</option>
            <option value="desc price">Price (high to low)</option>
            <option value="asc lastUpdated">Newest</option>
            <option value="desc lastUpdated">Oldest</option>
            </select>
        </div>

    </div>
  )
}

export default Filter
