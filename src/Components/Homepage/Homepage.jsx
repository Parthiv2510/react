import React from 'react';
import background from '../Images/background image.png';
import './Homepage.css'; 

export const Homepage = () => {
  return (
    <div className='Hero'>
      <img src={background} alt="Hero Image" className="hero-image" />
    </div>
  );
};
