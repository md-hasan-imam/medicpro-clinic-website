import React from 'react';
import ConfirmationModal from '../shared/ConfirmationModal';

const DoctorsRow = ({ doctor, index }) => {
    const { img, name, designation, specialty, email } = doctor;

    const handleDeleteDoctor = (email) => {



    }


    return (
        <tr className='hover' key={index}>
            <th>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </th>
            <td>
                <h3 className='font-semibold'>{name}</h3>
                <h5 className='text-xs mt-2'>{designation}</h5>
            </td>
            <td>{specialty}</td>
            <td>
                <label htmlFor="delete-doctor-modal" onClick={() => handleDeleteDoctor(email)} className="btn btn-primary text-white">Remove</label>
            </td>
        </tr>
    );
};

export default DoctorsRow;