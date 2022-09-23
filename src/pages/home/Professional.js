import React from 'react';

const Professional = ({doctor}) => {
    return (
        <div className="treatment-item text-center relative overflow-hidden rounded">
            <img src={doctor.img} alt="treatment 1" className='w-full' />
            <div className="overlay text-black w-full h-full rounded">
                <h4 className="text-md lg:text-2xl font-semibold text-white">{doctor.name}</h4>
                <h3 className='md:text-md text-white my-2 md:px-4'>{doctor.designation}</h3>
            </div>
        </div>
    );
};

export default Professional;