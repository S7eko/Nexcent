import React from 'react';
import './CommunituUpdates.css';
import icon1 from '../../components/assets/istockphoto-1298061433-612x612.jpg';
import icon2 from '../../components/assets/istockphoto-1335838257-612x612.jpg';
import icon3 from '../../components/assets/istockphoto-1387647107-612x612.jpg';

const CommunituUpdates = () => {
  return (
    <div className='community-updates'>
      <div className='community-updates-text'>
        <h1>Caring is the new marketing</h1>
        <p>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
      </div>
      <div className='community-updates-cards'>
        <div className='card-1'>
          <img src={icon1} alt="icon1" className='card-img' />
          <div className='card-content'>
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a href="#" className='read-more'>Readmore <span>→</span></a>
          </div>
        </div>
        <div className='card-1'>
          <img src={icon2} alt="icon2" className='card-img' />
          <div className='card-content'>
            <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
            <a href="#" className='read-more'>Readmore <span>→</span></a>
          </div>
          
        </div>
        <div className='card-1'>
          <img src={icon3} alt="icon3" className='card-img' />
          <div className='card-content'>
            <h3>Revamping the Membership Model with Triathlon Australia</h3>
            <a href="#" className='read-more'>Readmore <span>→</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunituUpdates;
