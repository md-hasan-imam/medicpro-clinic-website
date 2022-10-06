import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteConfirmModal from './DeletingConfirmModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
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
                                <th className='text-lg'>Identity</th>
                                <th className='text-lg'>Specialty</th>
                                <th className='text-lg'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- map over single row  --> */}
                            {
                                doctors.map((doctor, index) => <DoctorsRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                                ></DoctorsRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>


            {deletingDoctor && <DeleteConfirmModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;