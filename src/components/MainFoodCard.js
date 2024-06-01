import React, { useEffect, useState } from 'react'
import { getRandomOrderNumber, getRandomPrice, getRandomRating } from '../utils/random'
import { fetchInstance } from '../utils/instance'

const MainFoodCard = ({ name, image }) => {

    const [details, setDetails] = useState({});

    console.log("details", details)

    const getFoodDetailsByName = async () => {
        const response = await fetchInstance.getData(`/search.php?s=Arrabiata`)
        setDetails(response.meals[0])
    }

    useEffect(() => {
        getFoodDetailsByName()
    }, [])

    return (
        <div>
            <img src={image} alt="" className='h-20' />
            <p>{name}</p>
            <p>{getRandomPrice()}</p>
            <div>
                <p>{getRandomRating()} <span>{getRandomOrderNumber()}</span> </p>
            </div>
            <p>{details.strTags}</p>
            <p>{details.strInstructions}</p>
        </div>
    )
}

export default MainFoodCard
