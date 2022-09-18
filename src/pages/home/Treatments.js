import React from 'react';
import serviceimg1 from '../../assets/images/treatment 1.jpg'
import serviceimg2 from '../../assets/images/treatment2.jpg'
import serviceimg3 from '../../assets/images/treatment3.jpg'
import serviceimg4 from '../../assets/images/treatment4.jpg'
import serviceimg5 from '../../assets/images/treatment5.jpg'
import serviceimg6 from '../../assets/images/treatment6.jpg'
import Treatment from './Treatment';

const Treatments = () => {

    const treatments = [
        {
            _id: 1,
            name: "Parenatal/Newborn",
            description: "Pregnant women can also access micronutrient. provide HIV testing and medications to prevent mother-to-child transmission of HIV.",
            img: serviceimg1
        },
        {
            _id: 2,
            name: "Vaccinations/Immunizations",
            description: "Pregnant women can also access micronutrient. provide HIV testing and medications to prevent mother-to-child transmission of HIV.",
            img: serviceimg2
        },
        {
            _id: 3,
            name: "Nutrition Services",
            description: "Pregnant women can also access micronutrient. provide HIV testing and medications to prevent mother-to-child transmission of HIV.",
            img: serviceimg3
        },
        {
            _id: 4,
            name: "Development Delay",
            description: "Pregnant women can also access micronutrient. provide HIV testing and medications to prevent mother-to-child transmission of HIV.",
            img: serviceimg4
        },
        {
            _id: 5,
            name: "Allergy Testing",
            description: "Pregnant women can also access micronutrient. provide HIV testing and medications to prevent mother-to-child transmission of HIV.",
            img: serviceimg5
        },
        {
            _id: 6,
            name: "Weight Loss",
            description: "Pregnant women can also access micronutrient. provide HIV testing and medications to prevent mother-to-child transmission of HIV.",
            img: serviceimg6
        }
    ]

    return (
        <section className='px-5 md:px-10 lg:px-16 py-10 md:py-20'>
            <div className='max-w-xl'>
                <h3 className="text-md lg:text-md lg:text-2xl font-semibold mt-5 text-primary">Wide Range of Treatments</h3>
                <h3 className="text-3xl font-semibold mt-3 mb-3 md:mb-8">Bunch of Latest Technologies</h3>
            </div>
            {/* treatments cards starts */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 '>

                {
                    treatments.map(treatment =>
                    <Treatment
                    key={treatment._id}
                    treatment={treatment}
                    ></Treatment>
                    )
                }
            </div>

        </section>
    );
};

export default Treatments;