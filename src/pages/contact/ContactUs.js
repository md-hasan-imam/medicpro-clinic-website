import React from 'react';
import contactusBanner from '../../assets/images/contact-us-page.png';

const ContactUs = () => {
    return (

        <div className='mt-3 '>
            <div className="hero  max-w-full place-items-start items-center  py-8 lg:pt-20 lg:pb-20 px-3 sm:px-8 lg:px-20" style={{ backgroundImage: `url(${contactusBanner})` }}>
                <div className="hero-content w-full md:w-1/2 lg:w-1/3 text-left text-neutral-content bg-gradient-to-r from-white to-transparent rounded p-5">
                    <div className="w-full tracking-wide ">
                        <h3 className='text-xl font-semibold text-secondary mt-2'>Your Queries </h3>
                        <h1 className="mt-1 text-2xl lg:text-3xl font-bold text-primary">Contact Us</h1>

                        <div className="divider"></div>

                        <div className="card-body p-0 pl-0 text-secondary ">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-full pl-2 focus:outline-none rounded mt-3"

                                />
                                <div className='flex justify-between gap-x-2'>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="input input-bordered w-full max-w-full  pl-2 focus:outline-none mt-6  rounded"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your phone"
                                        className="input input-bordered w-full max-w-full  pl-2 focus:outline-none mt-6  rounded"
                                    />
                                </div>

                                <textarea
                                    type="textarea"
                                    rows="8"
                                    placeholder="Your Query"
                                    className="input input-bordered h-20 w-full max-w-full pl-2  focus:outline-none mt-6  rounded ::placeholder-shown:text-secondary"
                                />
                            </div>
                            <div className="form-control mt-5">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    );
};

export default ContactUs;