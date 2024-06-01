import React, { useEffect, useState } from 'react'
import { getRandomOrderNumber, getRandomPrice, getRandomRating } from '../utils/random'
import { fetchInstance } from '../utils/instance'
import AddCartButton from './AddCartButton';
import { FaStar } from "react-icons/fa6";

const MainFoodCard = ({ name, image }) => {

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
        <div className="flex items-center bg-white p-5 rounded-lg">
            <div className='w-3/4 space-y-2'>
                <p className='font-semibold text-xl'>{name}</p>
                <p className='font-semibold text-lg'>{getRandomPrice()}</p>
                <div className='text-xs flex justify-start items-center space-x-2 text-green-600'>
                    <p><FaStar /> </p>
                    <span className='font-semibold text-green-700'>{getRandomRating()} <span className='font-normal text-black'>({getRandomOrderNumber()})</span> </span>
                </div>
                <p>
                    {isExpanded ? details?.strInstructions : `${details?.strInstructions?.slice(0, 170)}...`}
                    <span
                        onClick={toggleReadMore}
                        style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                    >
                        {isExpanded ? ' Read Less' : ' Read More'}
                    </span>
                </p>
                <div className='flex items-center space-x-3'>
                    {details.strTags && details.strTags.split(",").map((tag, index) => (
                        <button className='flex items-center space-x-5 border-[1px] border-gray-300 w-fit px-5 py-1 rounded-md bg-white'>
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center w-1/4 -space-y-2">
                <img src={image} alt="" className='h-36 object-contain rounded-xl' />
                <AddCartButton />
            </div>
        </div>
    )
}

export default MainFoodCard
