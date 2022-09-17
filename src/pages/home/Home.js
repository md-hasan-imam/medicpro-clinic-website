import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Experience from './Experience';
import Info from './Info';
import MakeAppointmentForm from './MakeAppointmentForm';
import Professionals from './Professionals';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import Treatments from './Treatments';
import WhyChoseUs from './WhyChoseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <MakeAppointmentForm></MakeAppointmentForm>
            <Experience></Experience>
            <Treatments></Treatments>
            <WhyChoseUs></WhyChoseUs>
            <Statistics></Statistics>
            <Professionals></Professionals>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;