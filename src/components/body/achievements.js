// import React from 'react';
// import './Achievements.css';
// import member1 from '../../components/assets/icons/achivements/Icon-memebers.png';
// import member2 from '../../components/assets/icons/achivements/Icon-clubs.png';
// import member3 from '../../components/assets/icons/achivements/Icon-event-bookings.png';
// import member4 from '../../components/assets/icons/achivements/Icon-payments.png';

// const data = [
//   {
//     img: member1,
//     count: "2,245,341",
//     description: "Members"
//   },
//   {
//     img: member2,
//     count: "46,328",
//     description: "Clubs"
//   },
//   {
//     img: member3,
//     count: "828,867",
//     description: "Event Bookings"
//   },
//   {
//     img: member4,
//     count: "1,926,436",
//     description: "Payments"
//   }
// ];

// const AchievementItem = ({ img, count, description }) => (
//   <div className='achievement-item'>
//     <img src={img} alt={description} />
//     <div className='achievement-text'>
//       <h1>{count}</h1>
//       <p>{description}</p>
//     </div>
//   </div>
// );

// const Achievements = () => (
//   <div className='achievements ' >
//     <div className='achievements-text'>
//       <h1>
//         Helping a local <br /> <span>business reinvent itself</span>
//       </h1>
//       <p>We reached here with our hard work and dedication</p>
//     </div>
//     <div className='Counts'>
//       <div className='row'>
//         {data.slice(0, 2).map((item, index) => (
//           <AchievementItem
//             key={index}
//             img={item.img}
//             count={item.count}
//             description={item.description}
//           />
//         ))}
//       </div>
//       <div className='row'>
//         {data.slice(2).map((item, index) => (
//           <AchievementItem
//             key={index}
//             img={item.img}
//             count={item.count}
//             description={item.description}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default Achievements;
import React from 'react';
import CountUp from 'react-countup'; // استيراد CountUp
import './Achievements.css';
import member1 from '../../components/assets/icons/achivements/Icon-memebers.png';
import member2 from '../../components/assets/icons/achivements/Icon-clubs.png';
import member3 from '../../components/assets/icons/achivements/Icon-event-bookings.png';
import member4 from '../../components/assets/icons/achivements/Icon-payments.png';

const data = [
  {
    img: member1,
    count: "2,245,341",
    description: "Members"
  },
  {
    img: member2,
    count: "46,328",
    description: "Clubs"
  },
  {
    img: member3,
    count: "828,867",
    description: "Event Bookings"
  },
  {
    img: member4,
    count: "1,926,436",
    description: "Payments"
  }
];

const AchievementItem = ({ img, count, description }) => (
  <div className='achievement-item'>
    <img src={img} alt={description} />
    <div className='achievement-text'>
      <h1>
        <CountUp end={parseInt(count.replace(/,/g, ''))} separator="," />
      </h1>
      <p>{description}</p>
    </div>
  </div>
);

const Achievements = () => (
  <div className='achievements container'>
    <div className='achievements-text'>
      <h1>
        Helping a local <br /> <span>business reinvent itself</span>
      </h1>
      <p>We reached here with our hard work and dedication</p>
    </div>
    <div className='Counts'>
      <div className='row'>
        {data.slice(0, 2).map((item, index) => (
          <AchievementItem
            key={index}
            img={item.img}
            count={item.count}
            description={item.description}
          />
        ))}
      </div>
      <div className='row'>
        {data.slice(2).map((item, index) => (
          <AchievementItem
            key={index}
            img={item.img}
            count={item.count}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Achievements;
