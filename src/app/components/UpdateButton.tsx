import React from 'react'
import { useFormStatus } from 'react-dom'

function UpdateButton() {
    const {pending} = useFormStatus();
  return (
    <button 
        disabled={pending}
        className='bg-red-400 cursor-pointer text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed max-w-96'>
        {pending? 'updating...' : 'Update'}
    </button>
  )
}

export default UpdateButton
