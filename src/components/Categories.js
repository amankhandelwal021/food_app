import React, { useEffect, useState } from 'react'
import { fetchInstance } from "../utils/instance";
import { Link, useNavigate } from 'react-router-dom';
import HomeFoodCard from './HomeFoodCard';
import { getRandomElement } from '../utils/random';
import { useDispatch } from 'react-redux';
import { memoizeCuisine } from '../redux/slice/cuisineSlice';
import { memoizeRoute, selectRouteItem } from '../redux/slice/routeSlice';

const Categories = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [foodCategory, setFoodCategory] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState("Chinese")
  const [foodItems, setFoodItems] = useState([]);

  const getCategory = async () => {
    try {
      const response = await fetchInstance.getData("/categories.php");
      setFoodCategory(response.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getCuisines = async () => {
    try {
      const response = await fetchInstance.getData(`/list.php?a=list`);
      setCuisines(response.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getCuisinesByArea = async () => {
    try {
      const response = await fetchInstance.getData(`/filter.php?a=${selectedCuisines}`);
      setFoodItems(response.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
    getCuisines();
  }, []);

  useEffect(() => {
    getCuisinesByArea()
  }, [selectedCuisines])

  useEffect(() => {
    const result = getRandomElement(cuisines);
    if (result) {
      dispatch(memoizeCuisine(result.strArea));
    }
  }, [cuisines]);

  const handleClick = (category) => {
    dispatch(memoizeRoute(category));
    navigate(`/order?cuisines=${category}`);
  };

  return (
    <div className="my-5">
      <div>
        <p className='font-semibold text-xl'>Choose from popular categories</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-5 my-7">
          {foodCategory && foodCategory.length > 0 ? foodCategory.map((food, index) => (
            <div className='flex flex-col items-center justify-center'
              onClick={() => handleClick(food.strCategory)}
            >
              <img src={food.strCategoryThumb} alt="" srcset="" className={`h-[70px] hover:cursor-pointer hover:opacity-85 duration-300 hover:scale-110 rounded-full`} />
              <p className='font-medium'>{food.strCategory}</p>
            </div>
          )) : (
            <p className='whitespace-nowrap'>Fetching Categories...</p>
          )}
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <p className='font-semibold text-lg whitespace-nowrap'>Popular Cuisines</p>
        <div className='flex items-center space-x-3 overflow-scroll no-scrollbar'>
          {cuisines && cuisines.length > 0 ? cuisines.map((cuisine, index) => (
            <button className={`px-4 py-1  rounded-lg ${selectedCuisines === cuisine.strArea ? "hover:opacity-80 font-medium bg-[#FEC93F] " : " border border-[#f9c84f] "} duration-300`}
              onClick={() => setSelectedCuisines(cuisine.strArea)}
            >{cuisine.strArea}</button>
          )) : (
            <p className='whitespace-nowrap'>Fetching Categories...</p>
          )}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 my-7 overflow-scroll no-scrollbar">
          {foodItems && foodItems.length > 0 ? foodItems.map((food, index) => (
            <HomeFoodCard id={food.idMeal} name={food.strMeal.slice(0, 15)} image={food.strMealThumb} />
          )) : (
            <p className='whitespace-nowrap'>Fetching Food Items...</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Categories
