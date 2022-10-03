import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contactus'>Contact</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
    </>

    return (
        <header>
            <div className=' bg-secondary text-xs md:text-sm  font-semibold px-3 sm:px-10 py-4'>
                <h4 className=' text-white inline-block mr-5 sm:mr-10'>Contact Number: 090 98763456</h4>
                <h3 className=' text-white inline-block '>Location : 22, South Wales, New York</h3>
            </div>
            <nav className='my-2'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                                {menuItems}
                            </ul>
                        </div>
                        <a href='/'>
                            <img src={logo} alt="" className='w-52 ml-3' />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-lg font-semibold">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end lg:w-64 lg:mr-4">
                        {user ? <button onClick={logout} className="btn btn-outline ">Logout</button> : <Link to='/login' className="btn btn-outline ">Login</Link>
                        }
                        {/* dashboard sidebar for small device */}

                        <label tabIndex="2" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;