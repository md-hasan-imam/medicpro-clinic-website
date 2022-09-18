import React from 'react';
import appointmentBanner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {

    return (
        <section>
            <div className="hero min-h-screen bg-white">
                <div>
                    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
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
            </div>

        </section>
    );
};

export default AppointmentBanner;