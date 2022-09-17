import React from 'react';
import bgImg from '../../assets/images/why chose us.jpg';



const WhyChoseUs = () => {
    return (
        <section id='whyChoseUs' className='mt-20'>
            <div className='max-w-full bg-primary whychoseusbg' >
                <div className='text-white bg-secondary lg:w-1/2  p-5 md:p-10 lg:p-14' >
                    <h3 className="text-3xl font-semibold mt-3 mb-3 md:mb-3">Why Chose Us</h3>
                    <p className="py-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip lobortis nisl ut aliquip lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum.</p>
                    <p>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Lorem ipsum, or lipsum as it is sometimes known.</p>
                    <ul className='experience-list mt-8  font-medium pl-0 pb-16'>
                        <li>Eating Disorders</li>
                        <li>Family Therapy for Child</li>
                        <li>Feeding Disorders</li>
                        <li>Hyperactivity Disorder</li>
                        <li>Attention Deficit</li>
                        <li>Diagnosis and Evaluation</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyChoseUs;