import React from 'react';
import aboutIconimg from '../../assets/images/bed.png';

const AboutCard = ({  title, details  }) => {
    return (
        <div className='relative ' style={{'boxShadow':'0px 4px 5px 5px #E5F1FB'}}  >
            <div className='card rounded text-center bg-white p-10 ' >
                <div className="min-h-[12rem]">
                    <h2 className="text-xl  font-semibold text-center text-secondary">{title}</h2>
                    <p className='font-normal mt-3'>{details}</p>
                </div>
            </div>
            <div className='about-card absolute bottom-[-50px] right-0  left-0  mx-auto  w-40 h-40 flex justify-center shadow rounded-full mt-3' style={{'boxShadow':'inset 0px 4px 5px 5px #e5f1fb'}}>
                <figure><img src={aboutIconimg} alt="Album" className=' lg:w-14 mt-12' /></figure>
            </div>
        </div>

    );
};

export default AboutCard;