
import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ name, slot, date, setOpenModal }) => {


    const handleBooking = e => {
        e.preventDefault();

        const patientName = e.target.name.value;
        const treatment = name;
        const phone = e.target.phone.value;

        const booking = {
            patientName,
            treatment,
            slot,
            date,
            phone,
        }
        console.log(booking);


        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Successfully appointment done:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        setOpenModal(false);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg  mt-5 mb-7">Booking for: <span className='text-primary'>{name}</span> </h3>

                    <form onSubmit={handleBooking} action="" className='flex flex-col max-w-xs gap-3 justify-center mx-auto'>

                        <input type="text" name='date' disabled value={format(date, 'PP')} placeholder="Type here" className="input input-bordered input-md w-full max-w-lg focus:outline-none" />
                        <input type="text" name='slot' disabled value={slot} placeholder="Type here" className="input input-bordered input-md w-full max-w-lg focus:outline-none" />
                        <input type="text" name='name' placeholder="Full name" className="input input-bordered input-md  w-full max-w-lg focus:outline-none" required/>
                        <input type="tel" name='phone' placeholder="Mobile number" className="input input-bordered input-md  w-full max-w-lg focus:outline-none" required/>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered input-md  w-full max-w-lg focus:outline-none" required/>

                        <div class="modal-action">
                            <input className=' btn btn-primary capitalize lg:w-4/5 btn-sm text-white text-xs md:text-sm font-semibold mt-4 mb-3 mx-auto' type="submit" value="Book" />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;