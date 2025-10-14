import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/animation/preloader.json';
import './Preloader.css'

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
