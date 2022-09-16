import React from 'react';

const MakeAppointmentForm = () => {
    return (
        <section className='bg-accent pt-20 lg:pt-52 lg:-mt-24  px-5 md:px-10 lg:px-16 mx-auto'>
            <h3 className='card-title font-semibold text-primary'>Make an appointment</h3>
            <h3 className='text-3xl my-5 '>Get the Right Pediatician book your doctor</h3>

                <form action="" className='grid  lg:grid-cols-2 gap-5 lg:text-xl'>
                    <input type="text" placeholder="Your name" className="input input-bordered  max-w-full focus:outline-none" />
                    <input type="date" placeholder="Date" className="input input-bordered  max-w-full focus:outline-none" />
                    <select className="select select-bordered  max-w-full focus:outline-none " placeholder='Select service'>
                        <option disabled selected>Select service</option>
                        <option>Vaccinations/Immunizations</option>
                        <option>Nutrition Services</option>
                    </select>
                    <input type="text" placeholder="Phone number" className="input input-bordered  max-w-full focus:outline-none" />
                    <input type="submit" value="Make Appointment" className='btn btn-primary text-white font-normal text-lg px-8 my-7 self-center'/>
                </form>
        </section>
    );
};

export default MakeAppointmentForm;