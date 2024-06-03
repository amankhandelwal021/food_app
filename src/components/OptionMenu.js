import React, { useEffect, useState } from "react";
import Offer from "./Offer";
import { getRandomPrice } from "../utils/random";
import AddCartButton from "./AddCartButton";
import { fetchInstance } from "../utils/instance";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, selectCartTotal, selectUniqueCartItems } from "../redux/slice/cartSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectCuisineItem } from "../redux/slice/cuisineSlice";
import { addToOrder, selectOrderItems } from "../redux/slice/myOrderSlice";
import { formatDateTime } from "../utils/formatDate";

const OptionMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartPrice = useSelector((state) => selectCartTotal(state));
    const items = useSelector((state) => selectUniqueCartItems(state));
    const randomCuisine = useSelector((state) => selectCuisineItem(state));


    const [foodItems, setFoodItems] = useState([]);

    const getCuisinesByArea = async () => {
        try {
            const response = await fetchInstance.getData(`/filter.php?a=${randomCuisine}`);
            setFoodItems(response.meals);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        getCuisinesByArea();
    }, [randomCuisine]);


    const placeOrder = () => {
        if (location.pathname === "/cart") {
            if (items.length > 0) {
                dispatch(addToOrder({ items: items, orderValue: (cartPrice + 30).toFixed(2), orderTime: formatDateTime(new Date()) }));
                alert("Order Placed Successfully.");
                dispatch(emptyCart())
                navigate(`/my-order`)
            } else {
                alert("Please add something in the cart to place an order.")
            }
        } else {
            navigate(`/cart`)
        }
    }

    return (
        <div className="bg-white h-screen py-4 px-8 font-semibold text-xl overflow-scroll no-scrollbar sticky top-0">
            <p className="mb-5">Our Top Recommondation</p>
            {randomCuisine && randomCuisine.length > 0 && (
                <div className={`space-y-3 ${items.length > 0 && "h-[269px] overflow-scroll no-scrollbar"} mb-6`}>
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
                                <AddCartButton id={item.idMeal} name={item.strMeal} price={getRandomPrice()} image={item.strMealThumb} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {items.length > 0 && (
                <>
                    <div className="overflow-scroll no-scrollbar">
                        <Offer />
                    </div>
                    <div className="border-t-[1px] border-b-[1px] border-t-gray-400 border-b-gray-400 text-sm space-y-2 p-3 mb-5">
                        <div className="flex items-center justify-between font-semibold">
                            <p>Sub Total</p>
                            <p>${cartPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between font-semibold">
                            <p>Delivery Fee</p>
                            <p>$9.00</p>
                        </div>
                        <div className="flex items-center justify-between font-semibold">
                            <p>Taxes</p>
                            <p>$21.00</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-xl">
                        <p>Total</p>
                        <p>${(cartPrice + 30).toFixed(2)}</p>
                    </div>
                    <div
                        onClick={() => placeOrder()}
                    >
                        <button className="w-full bg-[#f9c84f] font-semibold py-3 text-base rounded-lg my-5 hover:opacity-75 duration-300"
                        >
                            {location.pathname === "/cart" ? "Order Now" : "Checkout"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default OptionMenu;
