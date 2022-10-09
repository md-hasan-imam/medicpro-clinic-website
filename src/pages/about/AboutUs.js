import React from 'react';
import aboutUsbgImg from '../../assets/images/aboutusBanner.png';
import Testimonials from '../home/Testimonials';
import Footer from '../shared/Footer';
import AboutCard from './AboutCard';
import ClinicsEqquipment from './ClinicsEqquipment';


const AboutUs = () => {
    return (
        <section className='mb-8'>
            <div className='py-4 bg-secondary flex px-8'>
                <div className='w-1/2'>
                    <h3 className='text-xs text-white'>home / About Us</h3>
                    <h3 className='text-lg lg:text-xl text-white font-bold mt-1'>About Us</h3>
                </div>
            </div>
            <div className="hero  max-w-full place-items-start items-center  py-12 lg:pt-40 lg:pb-48 px-0 sm:px-8 lg:px-20" style={{ backgroundImage: `url(${aboutUsbgImg})` }}>
                <div className="hero-content text-left text-neutral-content bg-white lg:bg-transparent rounded">
                    <div className="max-w-lg tracking-wide">
                        <h3 className='text-2xl font-semibold text-secondary'> Certified Pediatric Specialists </h3>
                        <h1 className="mt-3 mb-5 text-5xl font-bold text-primary">Who We Are</h1>
                        <p className="mb-6 text-secondary font-semibold leading-8 ">The MedicPro Clinic improves the quality of life of children, youth and adults with behavioural, developmental and psychiatric disorders, by providing the best solutions for each individual. We have built a multidisciplinary team who can collaborate together to identify client needs, and develop appropriate treatment plans for the best outcome.</p>
                    </div>
                </div>
            </div>
            <section className='grid lg:grid-cols-3 gap-8  px-5 md:px-10 lg:px-16 lg:-mt-28'>
                <AboutCard title='Specialist Doctors' details='We hire best specialists to deliver top-notch diagnostic services and develop appropriate treatment plans.' bgColor='bg-gradient-to-b from-primary to-secondary' ></AboutCard>
                <AboutCard title='Certified Pharmacy' details='We provide the a wide range of medical services, so every person could have the opportunity.' bgColor='bg-gradient-to-b from-primary to-secondary'></AboutCard>
                <AboutCard title='Modern Lab' details='We use the first-className medical equipment for timely diagnostics of various diseases.' bgColor='bg-gradient-to-b from-primary to-secondary'></AboutCard>
            </section>
            <ClinicsEqquipment></ClinicsEqquipment>
            <div className='mt-12'>
                <Testimonials></Testimonials>
            </div>
            <Footer></Footer>

        </section>
    );
};

export default AboutUs;