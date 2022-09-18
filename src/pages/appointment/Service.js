import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, setSelectedTreatment }) => {

    const { name, slots } = service;


    return (
        <section>
            <div className='card  shadow-xl p-4 bg-white' >
                <div className="card-body text-center">
                    <h2 className="text-base lg:text-lg text-secondary font-semibold">{name}</h2>
                    {/* <p>
                        {slots.length ?
                            <span className='text-xs'>{slots[0]}</span>
                            : <span className='text-error text-xs'>Try another date</span>
                        }
                    </p> */}
                    {
                        slots.length ?  <p className='text-center'>{service.slots.length} {slots.length > 1 ? ' spaces' : ' space'} Available
                        </p>
                        :
                        <span className='text-error text-xs'>Try another date</span>
                    }
                   
                    <a href='#slots' >
                        <button onClick={() => setSelectedTreatment(service)} disabled={slots.length === 0} className="btn btn-primary capitalize lg:w-4/5 btn-sm text-white text-xs md:text-sm font-semibold mt-4 mx-auto">Select Treatment</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Service;