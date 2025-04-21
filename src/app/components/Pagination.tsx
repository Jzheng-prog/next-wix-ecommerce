'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface PaginationProps {
    currentPage:number,
    hasNext: boolean,
    hasPrev: boolean
}
function Pagination({currentPage, hasNext, hasPrev}:PaginationProps) {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const createPageUrl = (pageNumber:number)=>{
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString())
        replace(`${pathName}?${params.toString()}`)
    }
    
  return (
    <div className='w-full mt-12 flex justify-between'>
        <button className='rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disbled:bg-pink-200' disabled={!hasPrev}
            onClick={()=>createPageUrl(currentPage-1)}
        >
            Previous
        </button>
        <button className='rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disbled:bg-pink-200' disabled={!hasNext}
            onClick={()=>createPageUrl(currentPage+1)}
        >
            Next
        </button>
    </div>
  )
}

export default Pagination
