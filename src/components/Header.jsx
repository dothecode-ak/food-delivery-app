import React from 'react'
import { imgPath } from '../data';
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="fixed w-screen z-50 bg-slate-300 p-2 text-white px-18 " >
            {/* desktop */}
            <div className='hidden md:flex w-full h-full p-2'>
                <div className='flex items-center gap-2'>
                    <img src={imgPath.logo} alt="Logo" className='w-10 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>SS Food App</p>
                </div>
                <div className='flex items-center gap-8 ml-auto'>
                    <ul className='flex items-center gap-8 '>
                        <li className='text-headingColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer'><Link to="/">Home</Link></li>
                        <li className='text-headingColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer'><Link to="/about">About</Link></li>
                        <li className='text-headingColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer'><Link to="/menu">Menu</Link></li>
                        <li className='text-headingColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer'><Link to="/contact">Contact</Link></li>
                        <li className='text-headingColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer'><Link to="/location">Location</Link></li>
                    </ul>


                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor ml-8 text-2xl' />
                        <div className='w-5 h-5 absolute -top-3 -right-3 rounded-full bg-cartNumBg items-center justify-center flex'>
                            <p className='text-sm text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <img className='w-6 h-6 shadow-2x1 cursor-pointer' src={imgPath.userIcon} alt="" srcset="" />
                </div>
            </div>


            {/* mobile */}
            <div className='flex md:hidden w-full h-full'>

            </div>
        </header>
    )
}

export default Header