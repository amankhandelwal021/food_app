import React from 'react'

const Offer = () => {
    return (
        <div className="flex items-center space-x-3 mb-5 overflow-scroll no-scrollbar">
            <div className='bg-[#FECy93F] bg-opacity-20 flex items-center justify-between text-base px-4 py-3 rounded-xl whitespace-nowrap space-x-4 '>
                <p className=''>You have 3 Coupons</p>
                <button className='px-3 py-2 bg-[#FEC93F] rounded-lg hover:cursor-pointer hover:opacity-60 duration-300'>Use now</button>
            </div>
            <div className='bg-[#FEC93F] bg-opacity-20 flex items-center justify-between text-base px-4 py-3 rounded-xl whitespace-nowrap space-x-4'>
                <p className=''>5 Card Discounts</p>
                <button className='px-3 py-2 bg-[#FEC93F] rounded-lg hover:cursor-pointer hover:opacity-60 duration-300'>Avail now</button>
            </div>
            <div className='bg-[#FEC93F] bg-opacity-20 flex items-center justify-between text-base px-4 py-3 rounded-xl whitespace-nowrap space-x-4 '>
                <p className=''>5 Bank Discounts</p>
                <button className='px-3 py-2 bg-[#FEC93F] rounded-lg hover:cursor-pointer hover:opacity-60 duration-300'>Avail now</button>
            </div>
        </div>
    )
}

export default Offer
