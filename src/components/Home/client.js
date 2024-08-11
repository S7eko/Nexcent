import React from 'react';
import './client.css';
import logo1 from '../../components/assets/brand logos/Logo-1.png';
import logo2 from '../../components/assets/brand logos/Logo-2.png';
import logo3 from '../../components/assets/brand logos/Logo-3.png';
import logo4 from '../../components/assets/brand logos/Logo-4.png';
import logo5 from '../../components/assets/brand logos/Logo-5.png';
import logo6 from '../../components/assets/brand logos/Logo-6.png';
import Commuintey from './commuintey';

const Client = () => {
    const images = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6
    ];

    return (
        <div id="Client">
            <div className='client-line'>
            <div className='client-text'>
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>

            <div className='client-icon'>
                <div className='row'>
                    {images.map((imgSrc, index) => (
                        <div key={index} className='col'>
                            <img src={imgSrc} alt={`Client logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Commuintey />
        </div>
    );
}

export default Client;
