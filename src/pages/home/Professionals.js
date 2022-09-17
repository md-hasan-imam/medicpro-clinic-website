import React from 'react';
import { Link } from 'react-router-dom';
import doctor1 from '../../assets/images/doctors1.jpg'
import doctor2 from '../../assets/images/doctors2.jpg'
import doctor3 from '../../assets/images/doctors3.jpg'
import doctor4 from '../../assets/images/doctors4.jpg'
import Professional from './Professional';

const Professionals = () => {

    const proDoctors = [
        {
            _id: 1,
            name: "Dr. Jerman Delong",
            designation: "Cheif Pediatrician",
            img: doctor1,
            facebook: "www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com/home"
        },
        {
            _id: 2,
            name: "Dr. Neel Akins",
            designation: "Cheif Pediatrician",
            img: doctor2,
            facebook: "www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com/home"
        },
        {
            _id: 3,
            name: "Dr. McKenna Slone",
            designation: "Cheif Pediatrician",
            img: doctor3,
            facebook: "www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com/home"
        },
        {
            _id: 4,
            name: "Dr. Lydah Sutton",
            designation: "Cheif Pediatrician",
            img: doctor4,
            facebook: "www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com/home"
        },
    ]




    return (
        <section className='px-5 md:px-10 lg:px-16 py-10 md:py-20'>
            <div className='h-32 lg:flex justify-between'>
                <div className='max-w-xl'>
                    <h3 className="text-md lg:text-md lg:text-2xl font-semibold mt-5 text-primary">Meet our Professionals</h3>
                    <h3 className="text-3xl font-semibold mt-3 mb-3 md:mb-8">Our Doctors</h3>
                </div>
                <div className='self-center'>
                    <Link to='/doctors' className='font-semibold'>See all members</Link>
                </div>
            </div>

            {/* treatments cards starts */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 '>

                {
                    proDoctors.map(doctor =>
                        <Professional
                            key={doctor._id}
                            doctor={doctor}
                        ></Professional>
                    )
                }
            </div>

        </section>
    );
};

export default Professionals;