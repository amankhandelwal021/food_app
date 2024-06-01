import React, { useEffect } from 'react'
import Offer from './Offer';
import { getRandomPrice } from '../utils/random';
import AddCartButton from './AddCartButton';

const OptionMenu = () => {

    const randomItems = [
        {
            "idMeal": "52963",
            "strMeal": "Shakshuka",
            "strCategory": "Vegetarian",
            "imageMeal": "/meal.webp",
            "priceMeal": getRandomPrice()
        },
        {
            "idMeal": "52993",
            "strMeal": "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
            "strCategory": "Chicken",
            "imageMeal": "/meal.webp",
            "priceMeal": getRandomPrice()
        },
        {
            "idMeal": "53028",
            "strMeal": "Shawarma",
            "strCategory": "Chicken",
            "imageMeal": "/meal.webp",
            "priceMeal": getRandomPrice()
        },
        {
            "idMeal": "52770",
            "strMeal": "Spaghetti Bolognese",
            "strCategory": "Beef",
            "imageMeal": "/meal.webp",
            "priceMeal": getRandomPrice()
        },
        {
            "idMeal": "52947",
            "strMeal": "Ma Po Tofu",
            "strCategory": "Beef",
            "imageMeal": "/meal.webp",
            "priceMeal": getRandomPrice()
        },
        {
            "idMeal": "52941",
            "strMeal": "Red Peas Soup",
            "strCategory": "Beef",
            "imageMeal": "/meal.webp",
            "priceMeal": getRandomPrice()
        }
    ]

    return (
        <div className='bg-white h-screen py-4 px-8 font-semibold text-xl overflow-scroll no-scrollbar sticky top-0'>
            <p className='mb-5'>Our Top Recommondation</p>
            <div className='space-y-3 max-h-[450px] h-[400px] overflow-scroll no-scrollbar mb-6'>
                {randomItems.map((item, index) => (
                    <div className='flex items-center space-x-3 w-full'>
                        <img src={item.imageMeal} alt={item.strMeal} className='h-20 rounded-lg' />
                        <div className='flex flex-col items-start w-full space-y-2'>
                            <div className='flex items-center justify-between text-base w-full'>
                                <p>{item.strMeal.length > 20 ? `${item.strMeal.slice(0, 20)}...` : item.strMeal}</p>
                                <p>{item.priceMeal}</p>
                            </div>
                            <AddCartButton />
                        </div>
                    </div>
                ))}
            </div>
            <div className='overflow-scroll no-scrollbar'>
            <Offer />
            </div>
            <div className='border-t-[1px] border-b-[1px] border-t-gray-400 border-b-gray-400 text-sm space-y-2 p-3 mb-5'>
                <div className='flex items-center justify-between font-semibold'>
                    <p>Sub Total</p>
                    <p>$259.30</p>
                </div>
                <div className='flex items-center justify-between font-semibold'>
                    <p>Delivery Fee</p>
                    <p>$9.00</p>
                </div>
                <div className='flex items-center justify-between font-semibold'>
                    <p>Taxes</p>
                    <p>$39.20</p>
                </div>
            </div>
            <div className='flex items-center justify-between font-semibold text-xl'>
                <p>Total</p>
                <p>$395.40</p>
            </div>
        </div>
    )
}

export default OptionMenu
