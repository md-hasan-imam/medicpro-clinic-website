import React from 'react';

const Statistics = () => {
    return (
        <section className='px-5 md:px-10 lg:px-16 lg:-mt-20'>
            <div className=" stats w-full stats-vertical lg:stats-horizontal shadow">
                <div className=" stat justify-items-center py-10">
                    <div className="stat-value font-semibold pb-2">980+</div>
                    <div className="stat-title text-secondary font-semibold">Satisfied Patients</div>
                </div>

                <div className="stat justify-items-center py-10">
                    <div className="stat-value font-semibold pb-2">100+</div>
                    <div className="stat-title text-secondary font-semibold">Professional Doctors</div>
                </div>

                <div className="stat justify-items-center py-10">
                    <div className="stat-value font-semibold pb-2">100%</div>
                    <div className="stat-title text-secondary font-semibold">Quality</div>
                </div>
                <div className="stat justify-items-center py-10">
                    <div className="stat-value font-semibold pb-2">15+</div>
                    <div className="stat-title text-secondary font-semibold">Years Experience</div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;