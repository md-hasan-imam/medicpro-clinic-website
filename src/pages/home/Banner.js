import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <section className='mb-8'>
            <div className="hero  max-w-full place-items-start items-center  py-12 lg:pt-40 lg:pb-48 px-0 sm:px-8 lg:px-20" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-xl text-white tracking-wide">
                        <h3 className='text-2xl'>We specialized in Pediatric Care</h3>
                        <h1 className="mt-4 mb-5 text-5xl font-bold">A SAFE CARE FOR YOUR CHILDREN's HEALTH</h1>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum.</p>
                        <Link to='/appointment' className="btn btn-primary text-white font-normal text-lg px-8">Make Appointment
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;