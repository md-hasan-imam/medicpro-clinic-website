import React from 'react';
import reviewer1 from '../../assets/images/people1.png';
import reviewer2 from '../../assets/images/people2.png';
import reviewer3 from '../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: "Jerman Delong",
            details: "Doctors Care made me feel that I was in safe hands. · Extended hours are great! · Coming here is like dealing with trusted family.",
            img: reviewer1,
            location:'California'
        },
        {
            _id: 2,
            name: "Neel Akins",
            details: "Doctors Care made me feel that I was in safe hands. · Extended hours are great! · Coming here is like dealing with trusted family.",
            img: reviewer2,
            location:'Colorado'
        },
        {
            _id: 3,
            name: "Dr. McKenna Slone",
            details: "Doctors Care made me feel that I was in safe hands. Extended hours are great! · Coming here is like dealing with trusted family.",
            img: reviewer3,
            location:'Alaska'
        },
        // {
        //     _id: 4,
        //     name: "Dr. Lydah Sutton",
        //     details: "Doctors Care made me feel that I was in safe hands. · Extended hours are great! · Coming here is like dealing with trusted family.",
        //     img: reviewer1,
        // location:'Florida'
        // },
    ]

    return (
        <section id='reviews' className='px-5 md:px-10 lg:px-16 py-10 md:pb-20'>
            <div className='max-w-full text-center'>
                <h3 className="text-md lg:text-md lg:text-2xl font-semibold mt-5 text-primary">Feedback from our patients</h3>
                <h3 className="text-3xl font-semibold mt-3 mb-3 md:mb-12">TESTIMONIALS</h3>
            </div>
            {/* treatments cards starts */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 '>
                {
                    reviews.map(review =>
                    <Testimonial
                    key={review._id}
                    review={review}
                    ></Testimonial>
                    )
                }
            </div>

        </section>
    );
};

export default Testimonials;