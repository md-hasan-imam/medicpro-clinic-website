import React, { useEffect, useState } from 'react';
import loginimg from '../../assets/images/login.jpg'
import { useForm } from "react-hook-form";
import googleIcon from '../../assets/images/icons/icons8-google.svg'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../shared/Loading';
import { useLocation } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (loading || gLoading || sending) {
        return <Loading></Loading>;
    }

    let signInError;
    if (error || gError) {
        signInError = <p className='text-error ml-1 mb-1 text-2xs'>{error?.message || gError?.message}</p>
            ;
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    }

    return (
        <section className='max-h-screen flex  justify-around items-center'>
            <div className="card items-center card-side gap-x-10 flex-col lg:flex-row p-10">
                <figure className='max-w-md'><img src={loginimg} alt="Movie" className='w-full' /></figure>
                <div className="card-body p-3 lg:p-8 w-64 sm:w-full lg:w-96 shadow-xl rounded-2xl">

                    <h2 className="card-title text-2xl justify-center mb-5">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full max-w-md">

                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-full focus:outline-none"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='text-xs text-error'>{errors.email.message}</span>}
                            </label>

                            <input
                                type='password'
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-full focus:outline-none"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label pb-0">
                                {errors.password?.type === 'required' && <span className='text-2xs text-error'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-2xs text-error'>{errors.password.message}</span>}

                            </label>

                            {/* password reset handling */}
                            <label className="label justify-end pt-0">
                                <Link onClick={async () => {
                                    await sendPasswordResetEmail(watch("email"));
                                    alert('Check your email');
                                }} className='text-2xs'>Forget Password?</Link>
                            </label>

                            {signInError}

                            <input type="submit" className='btn btn-primary' value="Login" />

                            <label className="label justify-center mt-2">
                                <h3 className='text-xs'>New to Medicpro? <Link to='/signup' className='text-primary ml-1'>Create an account</Link> </h3>
                            </label>

                        </div>
                    </form>

                    <div className="divider mt-2 text-sm font-semibold">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline capitalize">
                        <img src={googleIcon} className='w-6 mr-2 ' alt="" />
                        Continue with Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;