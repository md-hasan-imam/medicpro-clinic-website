import React from 'react';
import { useNavigate } from 'react-router-dom';

const MakeAppointmentForm = () => {

    const navigate = useNavigate();

    const navigateToAppointment = (e) => {
        e.preventDefault();
        navigate('/appointment')
    }

    return (
        <section className='bg-accent pt-10 pb-10 lg:pt-44 lg:-mt-20  px-5 md:px-10 lg:px-16 mx-auto'>
            <h3 className='card-title font-semibold text-primary'>Make an appointment</h3>
            <h3 className='text-3xl my-5 '>Get the Right Pediatician book your doctor</h3>

            <form action="" onSubmit={navigateToAppointment} className='grid lg:grid-cols-2 gap-5 lg:text-xl'>
                <input type="text" placeholder="Your name" name='name' className="input input-bordered  max-w-full focus:outline-none" />
                <input type="date" placeholder="Date" name='date' className="input input-bordered  max-w-full focus:outline-none" />
                <select className="select select-bordered  max-w-full focus:outline-none " name='service' placeholder='Select service' >
                    <option disabled selected>Select service</option>
                    <option>Vaccinations/Immunizations</option>
                    <option>Nutrition Treatment</option>
                </select>
                <input type="text" placeholder="Phone number" name='phone' className="input input-bordered  max-w-full focus:outline-none"/>
                <input type="submit" value="Make Appointment" className='btn btn-primary text-white font-normal text-lg px-8 my-12 md:w-1/2 lg:w-1/3 lg:col-span-2 justify-self-center' />
            </form>
        </section>
    );
};

export default MakeAppointmentForm;