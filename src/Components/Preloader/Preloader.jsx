import React from 'react';
import Lottie from 'lottie-react';
import './Preloader.css'

const animationData = require('../../assets/animation/preloader.json');

const Preloader = () => {
  return (
    <div className="lottie-container">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
      />
    </div>
  );
};

export default Preloader;
