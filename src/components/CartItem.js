import React from "react";
import AddCartButton from "./AddCartButton";

const CartItem = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-3">
        <img src={"/meal.webp"} alt="" className="h-28 rounded-lg" />
        <div>
          <div>
            <p className="border-b-[1px] border-gray-400 w-fit text-xl font-semibold">Sandwitch</p>
            <p>0 Item</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <div>
              <p className="text-base font-medium">
                Lorem ipsum dolor sit, amet consectetur!
              </p>
              <p className="font-semibold text-gray-400 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex text-sm items-center space-x-5">
              <div>
                <AddCartButton />
              </div>
              <p className="text-lg font-semibold">$392.02</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
