import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserAppointments = () => {

    const [user] = useAuthState(auth);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?patient=${user?.email}`;
        if (user) {
            fetch(url)
                .then(res => res.json())
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
                            appointments.map((appointment, index)=><tr className='hover'>
                            <th>{index + 1}</th>
                            <td>{appointment.treatment}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                        </tr> )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserAppointments;