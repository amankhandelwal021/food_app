import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import { useSelector } from 'react-redux';
import MyOrderCard from '../components/MyOrderCard';
import { selectOrderItems } from '../redux/slice/myOrderSlice';

const MyOrder = () => {
  const [active, setActive] = useState(false);

    const items = useSelector((state) => selectOrderItems(state));
    console.log("items", items)

  return (
    <div className='flex lg:w-[60%] mx-auto'>
        <Sidebar active={active} setActive={setActive} />
      <div className='w-full py-4 px-5 overflow-scroll h-screen no-scrollbar'>
        <Header active={active} setActive={setActive} />
        <div className="mt-5 md:m-10 space-y-5">
          <Breadcrumb />
          <div className="py-5 space-y-5">
            {items && items.length > 0 ? items.map((item, index) => (
              <MyOrderCard key={index} items={item.items} orderTime={item.orderTime} orderValue={item.orderValue} />
            )) : (
              <p className='whitespace-nowrap'>No items in the my order...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder
