import React from 'react';
import BookingModal from './BookingModal';

const Slot = ({slot, name, date}) => {

    return (
        <div className='max-w-full rounded-lg shadow-xl p-7 bg-white' >
            <div className=" text-center">
                {/* <h2 className=" lg:text-sm text-secondary font-semibold">{name}</h2> */}
                <p className='text-base mt-5'>{slot}</p>


                <label htmlFor="booking-modal" className="btn btn-primary lg:w-4/5 btn-sm text-white text-xs  font-semibold mt-5 mb-3 mx-auto">Book Appointment</label>

                <BookingModal name={name} slot={slot} date={date}></BookingModal>
            </div>
        </div>
    );
};

export default Slot;