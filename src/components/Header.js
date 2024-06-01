import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Header = ({ active, setActive }) => {
    return (
        <div className='flex items-center space-x-5'>
            <GiHamburgerMenu
                className="text-4xl hover:cursor-pointer hover:opacity-45 duration-300"
                onClick={() => setActive(!active)}
            />
            <div className='flex items-center font-medium'>
                <p className='whitespace-nowrap'>44/7, U-Block, Sector 24,</p>
                <RiArrowDropDownLine className="text-2xl" />
            </div>

            <div className='flex items-center space-x-3 px-5 py-3 bg-gray-200 rounded-2xl w-full'>
                <IoSearch className='text-lg text-gray-400'/>
                <input type="text" placeholder="what would you like to eat today?" className='flex-1 bg-transparent border-none outline-none rounded-2xl' />
            </div>
        </div>
    )
}

export default Header
