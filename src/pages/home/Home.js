import React from 'react';
import Banner from './Banner';
import Experience from './Experience';
import Info from './Info';
import MakeAppointmentForm from './MakeAppointmentForm';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <MakeAppointmentForm></MakeAppointmentForm>
            <Experience></Experience>
        </div>
    );
};

export default Home;