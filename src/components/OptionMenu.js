import React, { useEffect, useState } from "react";
import Offer from "./Offer";
import { getRandomPrice } from "../utils/random";
import AddCartButton from "./AddCartButton";
import { fetchInstance } from "../utils/instance";

const OptionMenu = ({ cuisine }) => {
  const [foodItems, setFoodItems] = useState([]);

  const getCuisinesByArea = async () => {
    try {
      const response = await fetchInstance.getData(`/filter.php?a=${cuisine}`);
      setFoodItems(response.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCuisinesByArea();
  }, [cuisine]);

  return (
    <div className="bg-white h-screen py-4 px-8 font-semibold text-xl overflow-scroll no-scrollbar sticky top-0">
      <p className="mb-5">Our Top Recommondation</p>
      {cuisine && cuisine.length > 0 && (
        <div className="space-y-3 max-h-[450px] h-[400px] overflow-scroll no-scrollbar mb-6">
          {foodItems && foodItems.length > 0 && foodItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 w-full">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="h-20 w-40 object-cover rounded-lg"
              />
              <div className="flex flex-col items-start w-full space-y-2">
                <div className="flex items-center justify-between text-base w-full">
                  <p>
                    {item.strMeal.length > 20
                      ? `${item.strMeal.slice(0, 20)}...`
                      : item.strMeal}
                  </p>
                  <p>{getRandomPrice()}</p>
                </div>
                <AddCartButton />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="overflow-scroll no-scrollbar">
        <Offer />
      </div>
      <div className="border-t-[1px] border-b-[1px] border-t-gray-400 border-b-gray-400 text-sm space-y-2 p-3 mb-5">
        <div className="flex items-center justify-between font-semibold">
          <p>Sub Total</p>
          <p>$259.30</p>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <p>Delivery Fee</p>
          <p>$9.00</p>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <p>Taxes</p>
          <p>$39.20</p>
        </div>
      </div>
      <div className="flex items-center justify-between font-semibold text-xl">
        <p>Total</p>
        <p>$395.40</p>
      </div>
    </div>
  );
};

export default OptionMenu;
