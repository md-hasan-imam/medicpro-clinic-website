import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointmentForm from './MakeAppointmentForm';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <MakeAppointmentForm></MakeAppointmentForm>
        </div>
    );
};

export default Home;