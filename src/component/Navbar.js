import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <div>
            <nav className="bg-gray-300 shadow-md h-1/4">
                <div className="flex p-3">
                    <h1 className="flex title-font font-medium  text-gray-900 mb-4 md:mb-0" href='/'>
                        <span className=" text-xl">Crud Operation</span>
                    </h1>
                </div>
                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link flex justify-center flex-wrap pb-3 "}>
                    <Link to="/" className="ml-6 cursor-pointer font-semibold text-lg" >Home</Link>
                    <Link to="/register" className="ml-6 cursor-pointer font-semibold text-lg" >Add Information</Link>
                    
                </div>
                <div className='manu absolute right-5 top-7'>
                    <span className='font-bold text-lg' onClick={() => setShowMediaIcons(!showMediaIcons)} >
                        <GiHamburgerMenu />
                    </span>
                </div> 
            </nav>
        </div>

    )
}

export default Navbar;