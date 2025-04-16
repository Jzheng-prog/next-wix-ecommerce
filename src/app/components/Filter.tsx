'use client'

import { usePathname, useSearchParams, useRouter} from "next/navigation"

function Filter() {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=>{
        const {name,value} = e.target;

        const params = new URLSearchParams(searchParams)
        params.set(name,value);
        replace(`${pathName}?${params.toString()}`)
    }
  return (
    <div className='my-12 flex justify-between'>
        <div className='flex gap-6 flex-wraps'>
            {/* <select name="type" id="" className='py-2 px-4 rounded-2xl text-sm font-medium bg-gray-100' onChange={handleFilterChange}>
                <option value="">Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select> */}
            <input type="text" name="min" id="" placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' onChange={handleFilterChange} />
            <input type="text" name="max" id="" placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' onChange={handleFilterChange}/>
            <select name="cat" className='py-2 px-4 rounded-2xl text-sm font-medium bg-gray-100' onChange={handleFilterChange}>
                <option value="">Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
            {/* <select
                name=""
                id=""
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
                >
                <option>All Filters</option>
            </select> */}
        </div>


        <div className="">
            <select
                name="sort"
                id=""
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
                onChange={handleFilterChange}
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
