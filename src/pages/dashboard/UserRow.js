import React from 'react';

const UserRow = ({ user, index, refetch }) => {

    const handleMakingAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            });
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            {/* <td>{user.displayName}</td> */}
            <td><p className='text-sm'>{user.email}</p></td>
            <td>
                {user.role !== 'admin' && <button onClick={handleMakingAdmin} className="btn btn-xs text-white capitalize font-normal">Make Admin</button>}
            </td>
            <td><button className="btn btn-xs text-white capitalize font-normal">Remove User</button></td>
        </tr>
    );
};

export default UserRow;