import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';


const AvailableAppointments = ({ date }) => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    console.log(services)

    return (
        <section id='reviews' className='px-5 md:px-10 lg:px-16 py-10'>
            <div className='max-w-full text-center'>
                <h3 className="text-md lg:text-md lg:text-xl font-semibold mt-5 text-primary">Available Services on {format(date, 'PP')}</h3>
                <h3 className="text-lg font-semibold mt-3 mb-3 md:mb-12">Please select a service</h3>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 lg:px-16 mx-auto'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }

            </div>
        </section>
    );
};

export default AvailableAppointments;