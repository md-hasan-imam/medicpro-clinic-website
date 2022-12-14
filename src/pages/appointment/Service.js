import React, { useState } from 'react';


const Service = ({ service, setSelectedTreatment }) => {

    const { name, slots, price } = service;


    return (
        <section>
            <div className='card  shadow-xl p-4 bg-white' >
                <div className="card-body text-center">
                    <h2 className="text-lg lg:text-lg text-secondary font-semibold">{name}</h2>
                    {/* <p>
                        {slots.length ?
                            <span className='text-xs'>{slots[0]}</span>
                            : <span className='text-error text-xs'>Try another date</span>
                        }
                    </p> */}
                    <h3 className='text-base font-medium '>$ {price}</h3>
                    {
                        slots.length ?  <p className='text-center text-sm'>{service.slots.length} {slots.length > 1 ? ' spaces' : ' space'} Available
                        </p>
                        :
                        <span className='text-error text-xs'>Try another date</span>
                    }
                    
                   
                    <a href='#slots' >
                        <button onClick={() => setSelectedTreatment(service)} disabled={slots.length === 0} className="btn btn-primary capitalize lg:w-4/5 btn-sm text-white text-xs md:text-sm font-semibold mx-auto mt-2">Select Treatment</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Service;