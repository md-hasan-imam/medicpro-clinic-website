import React from 'react';
import loginimg from '../../assets/images/login.jpg'
import { useForm } from "react-hook-form";
import googleIcon from '../../assets/images/icons/icons8-google.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';


const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();

      if (loading || gLoading || updating) {
        return <Loading></Loading>;
      }

      let signInError;
      if (error || gError || updateError) {
        signInError = <p className='text-xs text-error mb-1 ml-1'>{error?.message || gError?.message}</p>
        ;
      }

    if(user || gUser){
        console.log(user || gUser);
    }
    
    const onSubmit =async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/appointment');
    }

    return (
        <section className='max-h-screen flex  justify-around items-center '>
            <div className="card items-center card-side gap-x-10 flex-col lg:flex-row p-10">
                <figure className='max-w-md'><img src={loginimg} alt="Movie" className='w-full' /></figure>
                <div className="card-body p-3 lg:p-8 w-64 sm:w-full lg:w-96 shadow-xl rounded-2xl">

                    <h2 className="card-title text-2xl justify-center mb-5">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full max-w-md">

                            <input
                                type="text"
                                placeholder="Your full name"
                                className="input input-bordered w-full max-w-full focus:outline-none"
                                {...register("name", { 
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.name?.type === 'required' && <span className='text-xs text-error'>{errors.name.message}</span>}
                            </label>

                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-full focus:outline-none"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
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
                                        message: "* Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors?.password?.type === 'required' && <span className='text-xs text-error'>{errors.password.message}</span>}
                                {errors?.password?.type === 'minLength' && <span className='text-xs text-error'>{errors.password.message}</span>}
                            </label>

                            {signInError}

                            <input type="submit" className='btn btn-primary' value="Sign Up" />

                            <label className="label justify-center mt-2">
                                <h3 className='text-xs'>Already have an account? <Link to='/login' className='text-primary ml-1'>Login</Link> </h3>
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

export default SignUp;