import React from 'react';

const InfoCard = ({icon, title, details,bgColor}) => {
    return (
        <div className={`card lg:card-side  shadow-xl text-white p-4 ${bgColor}`} >
            <figure><img src={icon} alt="Album" className='sm:16 lg:w-14' /></figure>
            <div className="card-body">
                <h2 className="card-title ">{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;