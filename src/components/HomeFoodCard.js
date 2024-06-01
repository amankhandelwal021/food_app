import React, { useEffect, useState } from 'react'
import { getRandomOrderNumber, getRandomPrice, getRandomRating } from '../utils/random'
import AddCartButton from './AddCartButton';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HomeFoodCard = ({ id, name, image }) => {
    return (
        <div className="flex-col items-center bg-white  hover:scale-105 duration-300 rounded-lg w-60">
            <div> 
                <img src={image} alt="" className='h-36 w-full rounded-t-xl' />
            </div>
            <div className='space-y-2 p-3'>
                <Link to={"/cart"}>
                <p className='font-semibold text-xl'>{name}</p>
                </Link>
                <div className='text-xs flex justify-between items-center space-x-10 text-green-600'>
                    <p className='font-semibold text-lg '>{getRandomPrice()}</p>
                    <p className='flex justify-start items-center space-x-2'><FaStar />
                        <span className='font-semibold text-green-700'>{getRandomRating()} <span className='font-normal text-black'>({getRandomOrderNumber()})</span> </span>
                    </p> </div>

                <AddCartButton id={id} name={name} price={getRandomPrice()} image={image} />
            </div>

        </div>
    )
}

export default HomeFoodCard
