import React from 'react';
import experienceImg from '../../assets/images/we care section.jpg'

const Experience = () => {
    return (
        <section className='mt-10'>
            <div className="hero bg-base-100 py-5">
                <div className="hero-content flex-col lg:flex-row gap-x-10">
                    <div className='experience-image relative '>
                        <img src={experienceImg} className="max-w-full rounded-lg shadow-2xl" alt='baby holding hand' />
                        {/* <div>
                            <h2>15+ Years</h2>
                            <p>Experience</p>
                        </div> */}
                    </div>

                    <div className='max-w-xl'>
                        <h3 className="text-md lg:text-2xl font-semibold mt-5 text-primary">We Care for you & your Children</h3>
                        <h3 className="text-4xl font-semibold mt-3  md:mb-4">Most Effective Treatment</h3>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip lobortis nisl ut aliquip lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum .</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam .</p>
                        <ul className='experience-list grid  lg:grid-cols-2 gap-3 mt-10  font-medium'>
                            <li>Eating Disorders</li>
                            <li>Family Therapy for Child</li>
                            <li>Feeding Disorders</li>
                            <li>Hyperactivity Disorder</li>
                            <li>Attention Deficit</li>
                            <li>Diagnosis and Evaluation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;