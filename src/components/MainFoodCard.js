import React, { useEffect, useState } from 'react'
import { getRandomOrderNumber, getRandomPrice, getRandomRating } from '../utils/random'
import { fetchInstance } from '../utils/instance'
import AddCartButton from './AddCartButton';
import { FaStar } from "react-icons/fa6";

const MainFoodCard = ({ id, name, image }) => {

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
        <div className="sm:flex items-center bg-white p-5 rounded-lg">
            <div className='sm:w-3/4 space-y-2'>
                <div className='flex items-start justify-between'>
                    <div>
                        <p className='font-semibold text-xl'>{name}</p>
                        <p className='font-semibold text-lg'>{getRandomPrice()}</p>
                    </div>
                    <div className="flex sm:hidden flex-col items-center w-1/4 -space-y-2">
                        <img src={image} alt="" className='h-20 sm:h-36 object-contain rounded-xl' />
                    </div>
                </div>
                <div className='text-xs flex justify-start items-center space-x-2 text-green-600'>
                    <p><FaStar /> </p>
                    <span className='font-semibold text-green-700'>{getRandomRating()} <span className='font-normal text-black'>({getRandomOrderNumber()})</span> </span>
                </div>
                <p className=''>
                    {isExpanded ? details?.strInstructions : `${details?.strInstructions?.slice(0, 170)}...`}
                    <span
                        onClick={toggleReadMore}
                        style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                    >
                        {isExpanded ? ' Read Less' : ' Read More'}
                    </span>
                </p>
                <div className='flex items-center space-x-3 overflow-scroll no-scrollbar'>
                    {details.strTags && details.strTags.split(",").map((tag, index) => (
                        <button className='flex items-center space-x-5 border border-[#f9c84f]  w-fit px-5 py-1 rounded-md bg-white'>
                            {tag}
                        </button>
                    ))}
                    <div className='sm:hidden flex'>
                        <AddCartButton id={id} name={name} price={getRandomPrice()} image={image} />
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex flex-col items-center w-1/4 -space-y-2">
                <img src={image} alt="" className='h-36 object-contain rounded-xl' />
                <AddCartButton id={id} name={name} price={getRandomPrice()} image={image} />
            </div>
        </div>
    )
}

export default MainFoodCard
