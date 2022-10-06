import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading';


const AddDoctor = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { data: services, isLoading } = useQuery('services', () =>
        fetch(`https://medicpro.onrender.com/services`)
            .then(res => res.json())
    )

    const onSubmit = async data => {
        console.log(data.specialty);
        

        const imgStorageKey = 'b6d9158d1387a045b5c6583fb2820a50';

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        designation: data.designation,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    console.log(doctor);
                    // sending to database
                    fetch(`https://medicpro.onrender.com/doctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully');
                                reset();
                            } else {
                                toast.error('Failed to add doctor');
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="card-title text-2xl text-primary justify-center mt-20  mb-10">Add A Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className="form-control w-full max-w-md  mx-auto">
                    <input
                        type="text"
                        placeholder="Full name"
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
                        type="text"
                        placeholder="Designation"
                        className="input input-bordered w-full max-w-full focus:outline-none mb-4"
                        {...register("designation")}
                    />

                    <input
                        type="email"
                        placeholder="Email"
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

                    <label className="label pt-0">
                        <span className="label-text text-xs">Specialty</span>
                    </label>
                    <select className="select select-bordered  max-w-full focus:outline-none"
                        placeholder="Specialization"
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: "Specialty is required"
                            }
                        })}>
                        {
                            services.map(service => <option
                            value={service.name}
                                key={service._id}
                            >{service.name}</option>)
                        }
                    </select>
                    <label className="label">
                        {errors.Specialty?.type === 'required' && <span className='text-xs text-error'>{errors.Specialty.message}</span>}
                    </label>
                    {/* image here */}
                    <label className="label pt-0">
                        <span className="label-text text-xs">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Upload image"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className='text-xs text-error'>{errors.image.message}</span>}
                    </label>

                    <input type="submit" className='btn btn-primary w-1/2 mx-auto mt-3 text-white' value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;