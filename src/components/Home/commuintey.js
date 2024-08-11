import React from 'react';
import './commuintey.css';
import icon1 from '../../components/assets/icons/community/Icon-1.png';
import icon2 from '../../components/assets/icons/community/Icon-2.png';
import icon3 from '../../components/assets/icons/community/Icon-3.png';

const Commuintey = () => {
    const data = [
        {   
            img: icon1,
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments."
        },
        {
            img: icon2,
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments."
        },
        {
            img: icon3,
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments."
        }
    ];

    return (
        <div>
            <div className='commuintey-text center'>
                <h1>Manage your entire community <br/> in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>

            <div className='commuintey-card'>
                {data.map((item, index) => (
                    <div key={index} className='Card'>
                        <div className='card-img'>
                            <img src={item.img} alt={item.title} />
                            <h1>{item.title}</h1>

                        </div>
                        <div className='card-text'>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Commuintey;
