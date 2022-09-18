import React from 'react';
import appointmentBanner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <section>
            <div className="hero mt-16  mb-20 bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-x-24">
                    <img src={appointmentBanner} className="max-w-sm rounded-lg shadow-2xl" alt='doctor and patient' />
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