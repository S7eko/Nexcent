import React from 'react';
import './unlock.css';
import unlock2 from '../../components/assets/illustrations/user smart phone.png';

const Unlock2 = () => {
  return (
    <div>
        <div className='unlock container'>
            <div className='unlock-img'>
                <img src={unlock2} alt="unlock" />
            </div>
            <div className='unlock-text'>
                <h1>The unseen of spending three years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio. </p>

                <button type="button" className="btn btn-success">Learn More</button>
            </div>
        </div>
    </div>
  )
}


export default Unlock2;

