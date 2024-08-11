import React from 'react';

import './header.css';
import logo from '../../components/assets/nexcent-logo-black.png';
import logo1 from '../../components/assets/nexcent-logo-white.png';

const Header = ({ darkMode,  }) => {
    return (
        <div>
            <nav id="navbar" className={`navbar fixed-top navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-light'} border-bottom border-body`} data-bs-theme={darkMode ? 'dark' : 'light'}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={darkMode ? logo1 : logo} width="100%" height="24" className="d-inline-block align-text-top" alt="Nexcent Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-center w-100">
                            <li className="nav-item">
                                <a href='#Home' className="nav-link active" aria-current="page">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a  href='#Client' className="nav-link active">Features</a>
                            </li>
                            <li className="nav-item">
                                <a  href='#Total' className="nav-link active">Product</a>
                            </li>
                            <li className="nav-item">
                                <a  href='#Footer' className="nav-link active">Testimonial</a>
                            </li>

                            <li className="nav-item">
                                <a  href='#Footer' className="nav-link active">Blog</a>

                            </li>
                            <li className="nav-item">
                                <a  href='#Footer' className="nav-link active">Contact</a>
                            </li>
                        </ul>
                        <div className='login d-flex'>
                        
                            <button type="button" className="btn btn-success m-2">Login</button>
                            <button type="button" className="btn btn-success m-2">Regester</button>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
