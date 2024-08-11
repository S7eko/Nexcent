import React from 'react';
import './unlock.css';
import unlock from '../../components/assets/illustrations/login-mobile.png';

const Unlock = () => {
  return (
    <div>
        <div className='unlock container'>
            <div className='unlock-img'>
                <img src={unlock} alt="unlock" />
            </div>
            <div className='unlock-text'>
                <h1>How to design your site footer like we did</h1>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button type="button" className="btn btn-success">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Unlock;
