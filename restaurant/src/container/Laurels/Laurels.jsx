import React from 'react';


import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';


const AwardCard = ({awards: {imgUrl, title, subtitle}}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt='award-image' />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: "#DCCA87"}}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award, index) => <AwardCard awards={award} key={index} />)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="Laurels" />
    </div>
  </div>
);

export default Laurels;
