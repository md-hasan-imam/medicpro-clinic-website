import React from 'react';

const ConfirmationModal = () => {
    return (
        <div>
            <input type="checkbox" id="delete-doctor-modal" className="modal-toggle" />
            <label htmlFor="delete-doctor-modal" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </label>
            </label>
        </div >
    );
};

export default ConfirmationModal;