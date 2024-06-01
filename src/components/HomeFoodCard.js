import React, { useEffect, useState } from 'react'
import { getRandomOrderNumber, getRandomPrice, getRandomRating } from '../utils/random'
import { fetchInstance } from '../utils/instance'
import AddCartButton from './AddCartButton';
import { FaStar } from "react-icons/fa6";

const HomeFoodCard = ({ name, image }) => {
    const [details, setDetails] = useState({});

    const getFoodDetailsByName = async () => {
        const response = await fetchInstance.getData(`/search.php?s=Arrabiata`)
        setDetails(response.meals[0])
    }

    useEffect(() => {
        getFoodDetailsByName()
    }, []);

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="flex-col items-center bg-white  hover:scale-105 duration-300 rounded-lg w-60">
            <div> <img src={image} alt="" className='h-36 w-full rounded-t-xl' /></div>
            <div className='space-y-2 p-3'>
                <p className='font-semibold text-xl'>{name}</p>
                <div className='text-xs flex justify-between items-center space-x-10 text-green-600'>
                    <p className='font-semibold text-lg '>{getRandomPrice()}</p>
                    <p className='flex justify-start items-center space-x-2'><FaStar />
                        <span className='font-semibold text-green-700'>{getRandomRating()} <span className='font-normal text-black'>({getRandomOrderNumber()})</span> </span>
                    </p> </div>

                <AddCartButton />
            </div>
            {/* <div className="flex flex-col items-center w-1/4 -space-y-2">
               
            </div> */}
        </div>
    )
}

export default HomeFoodCard
