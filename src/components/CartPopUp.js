import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
const CartPopUp = ({ length }) => {
    return (
        <div className=" w-full flex-col flex text-center justify-center items-center bg-[#f9c84f] font-semibold py-2 px-10 text-base rounded-full duration-300">

            <p> {length} items selected</p>
            <p className='flex justify-start items-center space-x-2 text-xl'>Your cart total <span className='text-4xl'> <IoIosArrowRoundForward /></span></p>

        </div>
    )
}

export default CartPopUp
