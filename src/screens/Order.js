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
    <div className  ='flex'>
      <div className='w-[70%] py-4 px-8 overflow-scroll h-screen no-scrollbar'>
        <Sidebar active={active} setActive={setActive} />
        <Header active={active} setActive={setActive} />
        <div className="m-10 space-y-5">
          <Breadcrumb cuisine={searchParams.get("cuisines")} />
          <Offer />
          <p className='font-semibold text-xl'>Recommended ({foodItems.length})</p>
          {foodItems.map((item, index) => (
            <MainFoodCard name={item.strMeal} image={item.strMealThumb} />
          ))}
        </div>
      </div>
      <div className='w-[30%]'>
        <OptionMenu />
      </div>
    </div>
  )
}

export default Order
