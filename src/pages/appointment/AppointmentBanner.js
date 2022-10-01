import React from 'react';
import appointmentBanner from '../../assets/images/hspital (2).jpg'
import { DayPicker } from 'react-day-picker';
import bannerBg from '../../assets/images/bg.png'

import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <section  >
            <div className="hero bg-cover bg-center bg-no-repeat mt-12 pt-12 mb-16 pb-12 "style={{background:`url(${bannerBg})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-x-28">
                    <img src={appointmentBanner} className="max-w-md rounded-lg shadow-2xl" alt='doctor and patient' />
                    <div className=''>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AppointmentBanner;