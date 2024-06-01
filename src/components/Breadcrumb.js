import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ cuisine }) => {
    return (
            <div className='flex items-center space-x-1'>
                <Link to={`/`} className='text-gray-500 hover:cursor-pointer'>Home</Link>
                <span>/</span>
                <span className='font-semibold text-gray-700'>{cuisine}</span>
                <span>/</span>
                <span className='font-semibold text-gray-700'>Cart</span>
            </div>
    )
}

export default Breadcrumb
