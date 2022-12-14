import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import avatarImg from '../../assets/images/icons/avatar.png'
import useAdmin from '../../hooks/useAdmin';
import Loading from '../shared/Loading';

const Dashboard = () => {


    const [user] = useAuthState(auth);
    const [isAdmin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(adminLoading){
        return <Loading></Loading>
    }

    return (
        <div className='bg-accent'>
            <div className='py-4 bg-secondary flex px-8'>
            <div className='w-1/2'>
                    <h3 className='text-xs text-white'>home / dashboard</h3>
                    <h3 className='text-lg lg:text-xl text-white font-bold mt-1'>Dashboard</h3>
                </div>
                <div className='w-1/2 '>
                    <h3 className='text-lg md:text-xl lg:text-3xl text-white font-bold my-1'>Welcome to your Dashboard</h3>
                </div>
            </div>
            <div className="drawer drawer-mobile lg:p-8 gap-x-5 ">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-white rounded-md">
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <div className="overflow-y-auto w-64  bg-white text-base-content rounded">
                        <div className='mx-auto mt-8 mb-4 p-2 flex justify-center '>
                            {
                                user?.photoURL
                                    ?
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                            <img src={user.photoURL} alt="user" />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                            <img src={avatarImg} alt='user name' />
                                        </div>
                                    </div>
                            }
                        </div>
                        <h3 className='text-center font-semibold'>{user?.displayName}</h3>
                        <h3 className='text-center text-xs py-2'>{user?.email}</h3>
                        <div className="divider mb-0"></div>
                        <ul className='dashboard-links'>
                            <li><Link to='/dashboard' className='hover:text-primary active:text-primary focus:text-primary px-1'>My Appointments</Link></li>
                            <li><Link to='/dashboard/history' className='hover:text-primary active:text-primary focus:text-primary px-1'>My History</Link></li>
                            <li><Link to='/dashboard/review' className='hover:text-primary active:text-primary focus:text-primary px-1'>My Review</Link></li>
                                {
                                    isAdmin && <>
                                    <li><Link to='/dashboard/users' className='hover:text-primary active:text-primary focus:text-primary px-1 '>All users</Link></li>
                                    <li><Link to='/dashboard/adddoctor' className='hover:text-primary active:text-primary focus:text-primary px-1'>Add a Doctor</Link></li>
                                    <li><Link to='/dashboard/managedoctors' className='hover:text-primary active:text-primary focus:text-primary px-1 '>Manage Doctors</Link></li>
                                    </> 
                                }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;