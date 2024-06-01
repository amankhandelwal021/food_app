import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OptionMenu from '../components/OptionMenu';
import Breadcrumb from '../components/Breadcrumb';
import Offer from '../components/Offer';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='flex'>
      <div className='w-[70%] py-4 px-8 overflow-scroll h-screen no-scrollbar'>
        <Sidebar active={active} setActive={setActive} />
        <Header active={active} setActive={setActive} />
        <div className="m-10 space-y-5">
          <Breadcrumb />
          <Offer />
          <CartItem />
        </div>
      </div>
      <div className='w-[30%]'>
        <OptionMenu />
      </div>
    </div>
  )
}

export default Cart
