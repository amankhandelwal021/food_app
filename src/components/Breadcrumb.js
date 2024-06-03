import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { selectRouteItem } from '../redux/slice/routeSlice';

const Breadcrumb = () => {
    const currentRoute = useSelector((state) => selectRouteItem(state));

    const location = useLocation()

    return (
        <div className='flex items-center space-x-1'>
            <Link to={`/`} className='text-gray-500 hover:cursor-pointer'>Home</Link>
            <span>/</span>
            {location.pathname === "/my-order" ?
                (
                    <span className='font-semibold text-gray-700'>My Order</span>
                ) : location.pathname === "/order" ? (
                    <span className='font-semibold text-gray-700'>{currentRoute}</span>
                ) : (
                    <span className='font-semibold text-gray-700'>Cart</span>
                )}
        </div>
    )
}

export default Breadcrumb
