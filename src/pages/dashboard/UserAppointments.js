import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
                    if (res.status === 401 || res.status === 403) {
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
                            <th className='text-lg'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- map over single row  --> */}
                        {
                            appointments.map((appointment, index) => <tr className='hover'
                                key={index}>
                                <th>{index + 1}</th>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>
                                    {
                                        !appointment.paid ?
                                            <Link to={`appointment/${appointment._id}`} className='btn btn-primary btn-sm px-5 text-white'>Pay</Link>
                                            :
                                            <>
                                                <button className='btn btn-success btn-sm mb-4 px-5'>Paid</button>
                                                <div className="tooltip block tooltip-left" data-tip={appointment.transactionId}>
                                                    <button className="btn-secondary block capitalize px-5 py-1  text-white rounded text-sm ml-5">Transaction Id</button>
                                                </div>
                                            </>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserAppointments;