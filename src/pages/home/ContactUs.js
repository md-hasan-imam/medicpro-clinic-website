import React from 'react';

const ContactUs = () => {
    return (
        <section id='contact' className='mt-7'>
            <div className="card w-full max-w-lg  mx-auto  lg:py-12">
                <div className='max-w-xl text-center'>
                    <h3 className="text-sm lg:text-md lg:text-xl font-semibold mt-5 text-primary">Contact Us</h3>
                    <h3 className=" lg:text-2xl text-white font-semibold mt-3 mb-3">Stay Connected With Us</h3>
                </div>
                <div className="card-body ">
                    <div className="form-control">
                        <input type="text" placeholder="Email address" className="input input-bordered" />
                    </div>
                    <div className="form-control my-4">
                        <input type="text" placeholder="Subjects" className="input input-bordered" />
                    </div>
                    <textarea className="textarea textarea-bordered h-32" placeholder="Your Message" ></textarea>
                    <div className="form-control mt-7">
                        <button className="btn btn-primary w-1/2 mx-auto text-white ">Submit</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;