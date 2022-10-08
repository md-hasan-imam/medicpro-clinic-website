import React from 'react';

const ClinicSingleEquipment = ({ equipment }) => {
    return (
        <div className="card text-center rounded shadow-xl p-5">
            <img src={equipment.img} alt="treatment 1" className='w-full rounded' />

            <h4 className="text-md lg:text-xl font-semibold text-secondary mt-5 mb-2">{equipment.name}</h4>
        </div>
    );
};

export default ClinicSingleEquipment;