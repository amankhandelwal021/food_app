import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OptionMenu from '../components/OptionMenu';
import Breadcrumb from '../components/Breadcrumb';
import Offer from '../components/Offer';
import CartItem from '../components/CartItem';
import { selectCartItems, selectCartTotal, selectUniqueCartItems } from '../redux/slice/cartSlice';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [active, setActive] = useState(false);

  const items = useSelector((state) => selectUniqueCartItems(state));

  return (
    <div className='xl:flex'>
        <Sidebar active={active} setActive={setActive} />
      <div className='xl:w-[70%] py-4 px-5 overflow-scroll h-screen no-scrollbar'>
        <Header active={active} setActive={setActive} />
        <div className="mt-5 md:m-10 space-y-5">
          <Breadcrumb />
          <Offer />
          <div className="py-5 space-y-5">
            {items && items.length > 0 ? items.map((item, index) => (
              <CartItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
            )) : (
              <p className='whitespace-nowrap'>No items in the cart...</p>
            )}
          </div>
        </div>
      </div>
      <div className='xl:w-[30%]'>
        <OptionMenu />
      </div>
    </div>
  )
}

export default Cart
