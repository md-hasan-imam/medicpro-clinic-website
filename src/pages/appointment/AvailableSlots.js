import React from 'react';
import Slot from './Slot';

const AvailableSlots = ({selectedTreatment, date, refetch}) => {

    const {name, slots}= selectedTreatment;

    return (
        <section id='slots' className='my-20 pt-10'>
            <div className='max-w-full text-center'>
                <h3 className="text-md lg:text-md lg:text-2xl font-semibold my-5 ">Available slots for <span className='text-primary'>{name}</span></h3>
                <h3 className="text-lg font-semibold mt-3 mb-3 md:mb-12">Please select a treatment</h3>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 '>
                {
                    slots.map((slot, index) => <Slot key={index} slot={slot} name={name} date={date} refetch={refetch}></Slot>)
                }
            </div>
            
        </section>
    );
};

export default AvailableSlots;