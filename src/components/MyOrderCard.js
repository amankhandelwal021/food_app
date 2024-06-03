import React from 'react'

const MyOrderCard = ({ items, orderTime, orderValue }) => {
  return (
    <div className="bg-white p-5 rounded-lg drop-shadow-xl hover:scale-110 duration-300 hover:cursor-pointer">
      <img src={items && items.length > 0 ? items[0].image : ""} alt="" className='h-28 w-44 object-cover rounded-lg' />
      <div className="space-y-2 mt-3">
        <div className="">
          {items.map((item, index) => (
            <p className='font-semibold'>{item.quantity} x <span>{item.name}</span></p>
          ))}
        </div>
        <div className='font-semibold text-sm md:flex md:space-x-5 whitespace-nowrap'>
          <p>Order Date: {orderTime}</p>
          <p>Order Value: ${orderValue}</p>
        </div>
      </div>
    </div>
  )
}

export default MyOrderCard
