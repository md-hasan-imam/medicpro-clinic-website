import React, { useState } from 'react';
import BookingModal from './BookingModal';

const Slot = ({slot, name, date}) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='max-w-full rounded-lg shadow-xl px-2 py-5 bg-white' >
            <div className=" text-center">
                {/* <h2 className=" lg:text-sm text-secondary font-semibold">{name}</h2> */}
                <p className='text-base mt-5 '>{slot}</p>


                <label htmlFor="booking-modal" onClick={()=>setOpenModal(true)} className="btn btn-primary  btn-sm text-white text-xs  font-semibold mt-5 mb-3 mx-auto">Book Appointment</label>


{
    openModal && <BookingModal name={name} slot={slot} setOpenModal={setOpenModal} date={date}></BookingModal>
}

                {/* <BookingModal name={name} slot={slot} date={date}></BookingModal> */}
            </div>
        </div>
    );
};

export default Slot;