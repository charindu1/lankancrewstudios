import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation/preloader.json';
import './Preloader.css'

const Preloader = () => {

  return (
    <div className="lottie-container">
      <Lottie 
        animationData={animationData} 
        loop={false} 
        autoplay={true}
      />
    </div>
  );
};

export default Preloader;
