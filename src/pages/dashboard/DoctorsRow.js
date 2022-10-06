import React from 'react';

const DoctorsRow = ({ doctor, index, setDeletingDoctor }) => {
    const { img, name, designation, specialty } = doctor;

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
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-sm btn-primary">Delete</label>
            </td>
        </tr >
    );
};

export default DoctorsRow;