import React from 'react';
import contactusBanner from '../../assets/images/contact-us-page.png';
import { toast } from 'react-toastify';
import Footer from '../shared/Footer';
import email from '../../assets/images/icons/icons8-email-64.png'
import marker from '../../assets/images/icons/marker.svg'
import phone from '../../assets/images/icons/phone.svg'
const ContactUs = () => {
    return (

        <div className='mt-3 '>
            <div className="hero  max-w-full place-items-start items-center  py-8 lg:pt-20 lg:pb-20 px-3 sm:px-8 lg:px-20" style={{ backgroundImage: `url(${contactusBanner})` }}>
                <div className="hero-content w-full md:w-1/2 lg:w-1/3 text-left text-neutral-content bg-gradient-to-r from-white to-transparent rounded p-5 ">
                    <div className="w-full tracking-wide ">
                        <h3 className='text-xl font-semibold text-secondary mt-2'>Your Queries </h3>
                        <h1 className="mt-1 text-2xl lg:text-3xl font-bold text-primary">Contact Us</h1>
                        <div className="divider"></div>
                        {/* form card starts here */}
                        <div className="card-body p-0 pl-0 text-secondary">
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
                                <button onClick={() => toast.success('Sent message successfully')} className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >





            {/* cards here */}
            <div className='bg-[#eef6fd] py-24'>
                <div className="max-w-3xl text-center tracking-wide mx-auto">
                    <h3 className='mb-5 text-3xl font-bold text-secondary'> Contact Us </h3>
                    <p className="mb-6 text-secondary font-semibold leading-8 "> Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>

                <div className='grid lg:grid-cols-3 gap-16 lg:gap-5 px-5 md:px-10 lg:px-16 lg:20 mt-24'>
                    <div className='relative'  >
                        <div className='card rounded-xl text-center bg-white p-8 ' >
                            <div className="min-h-[6rem] mt-12">
                                <h2 className="font-semibold mb-3">Phone</h2>
                                <p className='text-xl  font-semibold text-center text-secondary'>+090 98763456</p>
                            </div>
                        </div>
                        <div className='absolute top-[-60px] right-0  left-0  mx-auto  w-28 h-28 flex justify-center items-center shadow-xl rounded-full bg-primary'>
                            <figure><img src={phone} alt="Album" className=' lg:w-14' /></figure>
                        </div>
                    </div>
                    <div className='relative '  >
                        <div className='card rounded-xl text-center bg-white p-8 ' >
                            <div className="min-h-[6rem] mt-12">
                                <h2 className="font-semibold mb-3">Email</h2>
                                <p className='text-xl  font-semibold text-center text-secondary'>contact@example.com</p>
                            </div>
                        </div>
                        <div className='absolute top-[-60px] right-0  left-0  mx-auto  w-28 h-28 flex justify-center items-center shadow-xl rounded-full bg-[#0DE0FE]'>
                            <figure><img src={email} alt="Album" className=' lg:w-14 text-white' /></figure>
                        </div>
                    </div>
                    <div className='relative '  >
                        <div className='card rounded-xl text-center bg-white p-8 ' >
                            <div className="min-h-[6rem] mt-12">
                                <h2 className="font-semibold mb-3">Location</h2>
                                <p className='text-xl  font-semibold text-center text-secondary'>C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
                            </div>
                        </div>
                        <div className='absolute top-[-60px] right-0  left-0  mx-auto  w-28 h-28 flex justify-center items-center shadow-xl rounded-full bg-primary'>
                            <figure><img src={marker} alt="Album" className=' lg:w-8' /></figure>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div >
    );
};

export default ContactUs;