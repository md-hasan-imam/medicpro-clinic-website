import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/images/icons/clock.svg'
import marker from '../../assets/images/icons/marker.svg'
import phone from '../../assets/images/icons/phone.svg'

const Info = () => {
    return (
        <section className='grid lg:grid-cols-3 gap-5 px-5 md:px-10 lg:px-16 lg:-mt-32'>
            <InfoCard icon={clock} title='Opening Hours' details='Monday to Friday 09:00am to 05:00pm' bgColor='bg-gradient-to-b from-primary to-secondary' ></InfoCard>
            <InfoCard icon={marker} title='Visit our location' details='Brooklyn, NY 10036, United States' bgColor='bg-gradient-to-b from-primary to-secondary'></InfoCard>
            <InfoCard icon={phone} title='Contact us now' details='+000 123 456789 ' bgColor='bg-gradient-to-b from-primary to-secondary'></InfoCard>
        </section>
    );
};

export default Info;