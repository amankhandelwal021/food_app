import React from 'react'

const AddCartButton = () => {
    return (
        <div className='flex items-center space-x-5 border-[1px] border-gray-300 w-fit px-5 py-1 rounded-md text-xl bg-white'>
            <span className='hover:cursor-pointer'>-</span>
            <span className=''>0</span>
            <span className='hover:cursor-pointer'>+</span>
        </div>
    )
}

export default AddCartButton
