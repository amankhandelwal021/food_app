import React from "react";
import AddCartButton from "./AddCartButton";
import { getRandomPrice } from "../utils/random";

const CartItem = ({ id, image, name, price }) => {
  return (
    <div className="">
      <div className="flex items-start space-x-3 w-full">
        <img src={image} alt="" className="h-28 w-40 rounded-lg" />
        <div>
          <div>
            <p className="w-fit text-xl font-semibold">{name}</p>
          </div>
          <div className="flex items-start space-x-5 justify-between">
            <div>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit, amet consectetur!
              </p>
              <p className="text-base font-semibold">{price}</p>
            </div>
            <div className="flex text-sm items-start">
              <AddCartButton id={id} name={name} image={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
