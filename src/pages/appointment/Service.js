import React from 'react';

const Service = ({ service }) => {

    const { name, slots } = service;

    return (
        <div className='card  shadow-xl p-4 bg-white' >
            <div className="card-body text-center">
                <h2 className="text-base lg:text-xl text-secondary font-semibold">{name}</h2>
                <p>
                    {slots.length ?
                        <span className='text-xs'>{slots[0]}</span>
                        : <span className='text-error text-xs'>Try another date</span>
                    }
                </p>
                <p className='text-center'>{service.slots.length} {slots.length > 1 ? ' spaces' : ' space'} Available
                </p>
                <button className="btn btn-primary lg:w-4/5 btn-sm text-white text-xs md:text-sm font-semibold mt-4 mx-auto">Book Appointment</button>
            </div>
        </div>
    );
};

export default Service;