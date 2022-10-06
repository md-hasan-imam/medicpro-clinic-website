import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import AvailableSlots from './AvailableSlots';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';


const AvailableAppointments = ({ date }) => {

    const [selectedTreatment, setSelectedTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, error, refetch } = useQuery(['available',formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section id='reviews' className='px-5 md:px-10 lg:px-16 '>
            <div>
                <div className='max-w-full text-center'>
                    <h3 className="text-base md:text-xl lg:text-2xl font-semibold mt-5 ">Available Treatments on <span className='text-primary'>{formattedDate}</span> </h3>
                    <h3 className="text-lg font-semibold mt-5 mb-3 md:mb-12">Please select a treatment</h3>
                </div>
            </div>
            <div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                    {
                        services.map(service =>
                            <Service
                                service={service}
                                setSelectedTreatment={setSelectedTreatment}
                                key={service._id}
                            ></Service>)
                    }
                </div>
            </div>
            <div>
                <div>
                    {
                        selectedTreatment && <AvailableSlots
                            selectedTreatment={selectedTreatment}
                            refetch={refetch}
                            date={date}></AvailableSlots>
                    }
                </div>
            </div>



        </section>
    );
};

export default AvailableAppointments;