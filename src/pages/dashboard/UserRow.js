import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {

    const handleMakingAdmin = () => {
        fetch(`https://medicpro.onrender.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            });
    }
    const handleDeleteUser= ()=>{
        fetch(`https://medicpro.onrender.com/user/${user.email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0 ) {
                    refetch();
                    toast.success('User removed successfully ');
                }
            });
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            {/* <td>{user.displayName}</td> */}
            <td><p className='text-sm'>{user.email}</p></td>
            <td>
                {user.role === 'admin' ? <button className="btn btn-sm text-white capitalize font-normal bg-primary border-none shadow-lg px-6 hover:bg-primary  cursor-not-allowed">Admin</button>
                :
                <button onClick={handleMakingAdmin} className="btn btn-sm text-white capitalize font-normal">Make Admin</button>}
            </td>
            <td><button onClick={handleDeleteUser} className="btn btn-sm text-white capitalize font-normal">Remove User</button></td>
        </tr>
    );
};

export default UserRow;