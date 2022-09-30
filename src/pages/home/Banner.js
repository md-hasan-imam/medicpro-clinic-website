import React from 'react';
import banner from '../../assets/images/banner.png'
import AppointmentButton from '../shared/AppointmentButton';

const Banner = () => {
    return (
        <section className='mb-8'>
            <div className="hero  max-w-full place-items-start items-center  py-12 lg:pt-40 lg:pb-48 px-0 sm:px-8 lg:px-20" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-xl text-white tracking-wide">
                        <h3 className='text-2xl'>We specialize in Pediatric Care</h3>
                        <h1 className="mt-4 mb-5 text-5xl font-bold">A SAFE CARE FOR YOUR CHILDREN's HEALTH</h1>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum.</p>
                        <AppointmentButton>Make Appointment</AppointmentButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;