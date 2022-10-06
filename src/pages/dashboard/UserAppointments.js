import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const UserAppointments = () => {

    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://medicpro.onrender.com/appointments?patient=${user?.email}`;
        if (user) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403 ) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setAppointments(data));
        }
    }, [user])

    return (
        <div className=''>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-lg'>Treatment</th>
                            <th className='text-lg'>Date</th>
                            <th className='text-lg'>Time</th>
                            {/* <th>Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- map over single row  --> */}
                        {
                            appointments.map((appointment, index) => <tr className='hover' key={index}>
                                <th>{index + 1}</th>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserAppointments;