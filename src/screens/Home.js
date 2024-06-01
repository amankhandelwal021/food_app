import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OptionMenu from '../components/OptionMenu';
import Categories from '../components/Categories';

const Home = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='flex'>
            <div className='w-[70%] py-4 px-8 overflow-scroll h-screen no-scrollbar'>
                <Sidebar active={active} setActive={setActive} />
                <Header active={active} setActive={setActive} />
                <Categories />
            </div>
            <div className='w-[30%]'>
                <OptionMenu />
            </div>
        </div>
    )
}

export default Home
