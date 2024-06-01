import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItems, selectCartItemsWithId } from '../redux/slice/cartSlice';

const AddCartButton = ({ id, name, price, image }) => {
    const dispatch = useDispatch();
    const AddToCart = () => {
        dispatch(addToCart({ id, name, price, image }))
    }
    const items = useSelector((state) => selectCartItemsWithId(state, id))

    const RemoveFromCart = () => {
        if (!items?.length > 0) return;
        dispatch(removeFromCart({ id }))
    }
    return (
        <div className='flex items-center space-x-5 border bg-[#f9c84f] w-fit px-5 py-1 rounded-md text-xl'>
            <span className='hover:cursor-pointer' onClick={() => { RemoveFromCart() }}>-</span>
            <span className='text-sm'>{items.length}</span>
            <span className='hover:cursor-pointer' onClick={() => { AddToCart() }}>+</span>
        </div>
    )
}

export default AddCartButton
