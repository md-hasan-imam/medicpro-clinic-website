import React from 'react';


const Treatment = ({treatment}) => {

    return (
        <div className="treatment-item text-center relative overflow-hidden rounded">
            <img src={treatment.img} alt="treatment 1" className='w-full' />
            <div className="overlay text-black w-full h-full rounded">
                <h4 className="text-md lg:text-2xl font-semibold text-white">{treatment.name}</h4>
                <h3 className='text-xs md:text-lg text-white my-2 md:px-4'>{treatment.description}</h3>
            </div>
        </div>
    );
};

export default Treatment;