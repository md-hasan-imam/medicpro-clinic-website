import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51L3N4CAP0RVLOhaUcfFxnLdzjZT3CtmOBHaDZAvb6TzF7LezzFcdxBeGMvd4yXPp5EteeaIj96z9PqRQ7xP5zgzI00U4XPzB3z');

const Payment = () => {
    const params = useParams();
    const id = params.id;

    const { data: appointment, isLoading } = useQuery('apppayment', () => fetch(`http://localhost:5000/appointment/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='h-screen flex justify-center items-center'>
            <div className='w-full md:w-4/5 lg:w-3/5 m-5'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="mb-3 text-2xl font-semibold text-center">Pay for <span className='text-primary'>{appointment.treatment}</span></h2>
                    <p className='mb-2'>Appointment on<span className='font-semibold'> {appointment.date}</span> at <span className='font-semibold'>{appointment.slot}</span></p>
                    <p>Please Pay: <span className='font-semibold '> ${appointment.price}</span></p>
                </div>
            </div>
            <div class="card shadow-2xl bg-base-100 mt-12">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>

        </section>
    );
};

export default Payment;