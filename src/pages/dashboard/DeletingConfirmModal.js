import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, designation, email } = deletingDoctor;
    const handleDelete = () => {
        fetch(`https://medicpro.onrender.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted.`)
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 className="text-base font-bold text-center mb-7">Do you really want to delete?</h3>
                    <h2 className='text-primary lg:text-2xl font-bold '>{name}</h2>
                    <p className="py-4 text-base pt-2">{designation}</p>
                    <div className="modal-action mt-0">
                        <div class="modal-action">
                            <button onClick={() => handleDelete()} class="btn btn-sm btn-primary">Delete</button>
                            <label for="delete-confirm-modal" class="btn btn-sm">Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;