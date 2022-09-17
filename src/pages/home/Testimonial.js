import React from 'react';
import quote from '../../assets/images/icons/quote.png'



const Testimonial = ({ review }) => {

    const shortReview = review.details.slice(0,130);

    return (
        <section id='reviews'>
            <div className="card max-w-xl bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <div>
                        <p className='text-md'>{shortReview}</p>
                        <div className='flex gap-2 lg:gap-x-7 mt-5'>
                            <div className="avatar">
                                <div className="lg:w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={review.img} alt="reviewer face" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.location}</p>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <img src={quote} alt="" className='lg:h-10 block' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;