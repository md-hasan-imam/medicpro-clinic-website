
import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({name, slot, date}) => {
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary mb-5">Booking for: {name}</h3>
                    <h3 className="font-normal text-left text-secondary">Booking slot: {slot}</h3>
                    <h3 className="font-normal text-left text-secondary">Booking on :{format(date, 'PP')}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;