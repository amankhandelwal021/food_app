import React, { useEffect } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Sidebar = ({ active, setActive }) => {

  const sidebarTabs = [
    {
      text: "Home",
      icon: <MdDashboard />,
      route: "/",
      type: "primary"
    },
    {
      text: "Order",
      icon: <FaBowlFood />,
      route: "/order",
      type: "primary"
    },
    {
      text: "Cart",
      icon: <FaCartShopping />,
      route: "/cart",
      type: "primary"
    },
    {
      text: "My Order",
      icon: <FaClipboardList />,
      route: "/my-order",
      type: "secondary"
    },
    {
      text: "About us",
      icon: <MdInfo />,
      route: "/about",
      type: "secondary"
    },
  ]

  return (
    <div className={`w-3/4 md:w-1/2 lg:w-[25%] h-screen p-5 space-y-8 fixed ${active ? "left-0" : "-left-[700px]"} duration-300 z-50 bg-white border-[1px] border-r-gray-200`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MdFastfood className='text-red-600 text-3xl' />
          <p className='text-xl font-medium'>App<span className='text-red-600 font-bold'>Logo</span></p>
        </div>
        {active && (
          <RxCross1
            className='text-black font-semibold text-xl hover:cursor-pointer hover:opacity-45 duration-300'
            onClick={() => setActive(!active)}
          />
        )}
      </div>

      <div>
        {sidebarTabs.map((tab, index) => {
          if (tab.type === "primary") {
            return (
              <Link
                key={index}
                to={tab.route}
                className='flex items-center space-x-3 p-4 hover:bg-[#FEC93F] duration-300 rounded-2xl text-lg hover:cursor-pointer text-black'
                onClick={() => setActive(!active)}
              >
                {tab.icon}
                <p>{tab.text}</p>
              </Link>
            );
          }
        })}
      </div>
      <div>
        <p className='text-gray-400 font-medium pb-4'>Others</p>
        {sidebarTabs.map((tab, index) => {
          if (tab.type === "secondary") {
            return (
              <Link
                key={index}
                to={tab.route}
                className='flex items-center space-x-3 p-4 hover:bg-[#FEC93F] duration-300 rounded-2xl text-lg hover:cursor-pointer text-black'
                onClick={() => setActive(!active)}
              >
                {tab.icon}
                <p>{tab.text}</p>
              </Link>
            );
          }
        })}
      </div>

      <div className='flex flex-col items-center justify-center text-center space-y-4'>
        <div className='flex flex-col items-center'>
          <FaUserCircle className='text-6xl' />
          <p className='text-xl font-semibold'>Aman Khandelwal</p>
          <p className='text-gray-400'>aman.khandelwal1205@gmail.com</p>
        </div>
        <button className='bg-gray-100 rounded-2xl px-10 py-3 w-full font-semibold hover:opacity-45 duration-300'>Open Profile</button>
      </div>
    </div>
  )
}

export default Sidebar

