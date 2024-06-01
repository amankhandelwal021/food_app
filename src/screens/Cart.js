import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OptionMenu from '../components/OptionMenu';
import Breadcrumb from '../components/Breadcrumb';
import Offer from '../components/Offer';
import CartItem from '../components/CartItem';
import { selectCartItems } from '../redux/slice/cartSlice';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [active, setActive] = useState(false);

  const items = useSelector((state) => selectCartItems(state))
  console.log("items", items);

  return (
    <div className='flex'>
      <div className='w-[70%] py-4 px-8 overflow-scroll h-screen no-scrollbar'>
        <Sidebar active={active} setActive={setActive} />
        <Header active={active} setActive={setActive} />
        <div className="m-10 space-y-5">
          <Breadcrumb />
          <Offer />
          {
            items.map((item, index) => (
              <CartItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />))
          }
        </div>
      </div>
      <div className='w-[30%]'>
        <OptionMenu />
      </div>
    </div>
  )
}

export default Cart
