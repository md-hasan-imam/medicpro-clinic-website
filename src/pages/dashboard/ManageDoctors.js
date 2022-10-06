import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ConfirmationModal from '../shared/ConfirmationModal';
import Loading from '../shared/Loading';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const [openModal, setOpenModal] =useState(false);


    const {data: doctors, isLoading} = useQuery('doctors',()=> fetch('https://medicpro.onrender.com/doctor',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className=''>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-lg'>Name</th>
                            <th className='text-lg'>Specialty</th>
                            <th className='text-lg'>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- map over single row  --> */}
                        {
                            doctors.map((doctor, index) => <DoctorsRow
                            doctor={doctor}
                            index={index}
                            key={index}
                            ></DoctorsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
        { openModal && <ConfirmationModal></ConfirmationModal>}
        </div>
    );
};

export default ManageDoctors;