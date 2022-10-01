
import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../shared/Loading';
import { toast } from 'react-toastify';


const BookingModal = ({ name, slot, date, setOpenModal, refetch }) => {

    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, 'PP')

    if (loading) {
        return <Loading></Loading>
    }

    const handleBooking = e => {
        e.preventDefault();

        const booking = {
            treatment: name,
            date: formattedDate,
            slot: slot,
            patientName: user?.displayName,
            email: user?.email,
            phone: e.target.phone.value,
            address: e.target.address.value
        }


        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    toast.success(`Appointment is set on ${data.booking?.date} at ${data.booking?.slot}`, { position: toast.POSITION.BOTTOM_LEFT });
                    // refetch();
                }
                else {
                    toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
                        , { position: toast.POSITION.BOTTOM_LEFT })
                }
                refetch();
                setOpenModal(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box mx-3">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
                    <h3 className="font-bold text-md lg:text-xl  mt-5 mb-8">Booking for<br /><span className='text-primary text-lg lg:text-2xl'>{name}</span> </h3>

                    <form onSubmit={handleBooking} action="" className='flex flex-col max-w-xs gap-3 justify-center mx-auto'>

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-md  w-full max-w-lg focus:outline-none" />

                        <input type="text" name='date' disabled value={format(date, 'PP')} placeholder="Type here" className="input input-bordered input-md w-full max-w-lg focus:outline-none" />

                        <input type="text" name='slot' disabled value={slot} placeholder="Type here" className="input input-bordered input-md w-full max-w-lg focus:outline-none" />

                        <input type="tel" name='phone' placeholder="Mobile number" className="input input-bordered input-md  w-full max-w-lg focus:outline-none" required />

                        <input type="text" name='address' placeholder="Address" className="input input-bordered input-md  w-full max-w-lg focus:outline-none" required />


                        <div className="modal-action">
                            <input className=' btn btn-primary capitalize lg:w-4/5 btn-sm text-white text-xs md:text-sm font-semibold mt-2 mb-3 mx-auto' type="submit" value="Book" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;