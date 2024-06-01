import React from 'react'

const AddCartButton = () => {
    return (
        <div className='flex items-center space-x-5 border bg-[#f9c84f] w-fit px-5 py-1 rounded-md text-xl'>
            <span className='hover:cursor-pointer'>-</span>
            <span className='text-sm'>0</span>
            <span className='hover:cursor-pointer'>+</span>
        </div>
    )
}

export default AddCartButton
