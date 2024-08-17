import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className='w-[95%] mx-auto'>
            {/* Navbar  */}
                <Navbar />
            {/* Outlet  */}
                <Outlet></Outlet>
            {/* Footer  */}
                <Footer></Footer>
        </div>
    );
};

export default Main;