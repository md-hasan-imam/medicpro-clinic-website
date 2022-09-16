import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contactus'>Contact</Link></li>
    </>

    return (
        <header className='my-4'>
            <nav>
                <div class="navbar bg-base-100 ">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <a href='/'>
                            <img src={logo} alt="" className='w-52 ml-3' />
                        </a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0 text-xl">
                            {menuItems}
                        </ul>
                    </div>
                    <div class="navbar-end lg:w-64 lg:mr-4">
                        <a href='/login' class="btn">Login</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;