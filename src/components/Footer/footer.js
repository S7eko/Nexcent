import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import logo from '../../components/assets/nexcent-logo-white.png';

const Footer = () => {
    return (
        <footer id="Footer" className='footer'>
            <div className='footer-text'>
                <h2>Pellentesque suscipit <br /> fringilla libero eu.</h2>
                <button type="button" className="btn btn-success">
                    Get a Demo <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            <div className='footer-logo '>
                <div className='footer-logo-img'>
                    <img src={logo} alt="Nexcent Logo" />
                    <p>Abdel-Rhman Mohmed © 2024 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                    <div className='footer-logo-icon'>
                        <a href="https://facebook.com" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <div className='footer-logo-text'>
                    <div className='footer-logo-list'>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-logo-list'>
                        <h3>Support</h3>
                        <ul>
                            <li><a href="/help-center">Help Center</a></li>
                            <li><a href="/terms">Terms of Services</a></li>
                            <li><a href="/legal">Legal</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/status">Status</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
