import React from 'react';
import clinicImg1 from '../../assets/images/clinicenvironment1.jpg';
import clinicImg2 from '../../assets/images/clinicenvironment2.jpg';
import clinicImg3 from '../../assets/images/clinicenvironment3.jpg';
import clinicImg4 from '../../assets/images/clinicenvironment4.jpg';
import clinicImg5 from '../../assets/images/clinicenvironment5.jpg';
import clinicImg6 from '../../assets/images/clinicenvironment6.jpg';
import equipmentBg from '../../assets/images/aboutusclinicbg.png';

import ClinicSingleEquipment from './ClinicSingleEquipment';

const ClinicsEqquipment = () => {

    const equipments = [
        {
            _id: 1,
            name: "Operation",
            img: clinicImg1
        },
        {
            _id: 2,
            name: "Medical",
            img: clinicImg2
        },
        {
            _id: 3,
            name: "Patient Ward",
            img: clinicImg3
        },
        {
            _id: 4,
            name: "Test Room",
            img: clinicImg4
        },
        {
            _id: 5,
            name: "ICU",
            img: clinicImg5
        },
        {
            _id: 6,
            name: "Laboratory",
            img: clinicImg6
        }
    ]

    return (
        <section id='reviews' className='px-5 md:px-10 lg:px-16 py-10 md:pb-48 mt-16 bg-bottom bg-no-repeat '  style={{ 'backgroundImage': `url(${equipmentBg})`}}>
            <div className='max-w-2xl text-center mx-auto'>
                <h3 className="text-md lg:text-md lg:text-2xl font-semibold mt-5 text-secondary">Available Features in Our Clinic</h3>
                <h3 className="text-3xl font-semibold mt-3 mb-3 md:mb-4 text-primary">Technologies We Use</h3>
                <p className='text-lg mb-8 text-gray-500'>We offer comprehensive consultations, evaluations and treatment for children with developmental problems.</p>
            </div>
           
            {/* equipment cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9'>

                {
                    equipments.map(equipment =>
                        <ClinicSingleEquipment
                            key={equipment._id}
                            equipment={equipment}
                        ></ClinicSingleEquipment>
                    )
                }
            </div>

        </section>
    );
};

export default ClinicsEqquipment;