import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OptionMenu from '../components/OptionMenu';
import Categories from '../components/Categories';

const Home = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='xl:flex'>
            <Sidebar active={active} setActive={setActive} />
            <div className='xl:w-[70%] py-4 px-5 overflow-scroll h-screen no-scrollbar'>
                <Header active={active} setActive={setActive} />
                <Categories />
            </div>
            <div className='xl:w-[30%]'>
                <OptionMenu />
            </div>
        </div>
    )
}

export default Home
