import React from 'react';
import { useQuery } from 'react-query';

import Loading from '../shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users',()=>fetch(`https://medicpro.onrender.com/users`).then(res => res.json()));

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
                                {/* <th className='text-lg'>Name</th> */}
                                <th className='text-lg'>Email</th>
                                <th className='text-lg'>User Staus</th>
                                <th className='text-lg'>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- map over single row  --> */}
                            {
                                users.map((user, index) =>
                                    <UserRow
                                        key={index}
                                        user={user}
                                        index={index}
                                        refetch=
                                        {refetch}
                                    >
                                    </UserRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;