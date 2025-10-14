import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation/preloader.json';
import './Preloader.css'

const Preloader = () => {

  const clonedAnimation = JSON.parse(JSON.stringify(animationData));

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
