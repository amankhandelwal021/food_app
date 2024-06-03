import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OptionMenu from '../components/OptionMenu';
import Breadcrumb from '../components/Breadcrumb';
import { useSearchParams, useNavigate, useLocation, Link } from "react-router-dom";
import Offer from '../components/Offer';
import { fetchInstance } from '../utils/instance';
import MainFoodCard from '../components/MainFoodCard';

const Order = () => {
  const [active, setActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [foodItems, setFoodItems] = useState([])

  const getFoodItemsByCategory = async () => {
    const response = await fetchInstance.getData(`/filter.php?c=${searchParams.get("cuisines")}`)
    setFoodItems(response.meals)
  }

  useEffect(() => {
    getFoodItemsByCategory()
  }, []);

  return (
    <div className='xl:flex'>
      <Sidebar active={active} setActive={setActive} />
      <div className='xl:w-[70%] py-4 px-8 overflow-scroll h-screen no-scrollbar'>
        <Header active={active} setActive={setActive} />
        <div className="mt-5 md:m-10 space-y-5">
          <Breadcrumb />
          <Offer />
          {foodItems && foodItems.length > 0 && (
            <p className='font-semibold text-xl'>Recommended ({foodItems.length})</p>
          )}
          {foodItems && foodItems.length > 0 ? foodItems.map((item, index) => (
            <MainFoodCard key={index} id={item.idMeal} name={item.strMeal} image={item.strMealThumb} />
          )): (
            <p className='whitespace-nowrap'>No items in the order...</p>
          )}
        </div>
      </div>
      <div className='xl:w-[30%]'>
        <OptionMenu />
      </div>
    </div>
  )
}

export default Order
