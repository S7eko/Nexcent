import React from 'react';
import illestroter from '../../components/assets/illustrations/Illustrationhero-page-person-standing.png';
import './slider.css';

const Slider = () => {
    return (
        <div id='Home' >
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-text">
                        <h1>Lessons and insights<br />
                            <span>from 8 years</span>
                        </h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                        <button type="button" className="btn btn-success">Register</button>
                    </div>
                    <div className="image">
                        <img src={illestroter} alt="Illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
