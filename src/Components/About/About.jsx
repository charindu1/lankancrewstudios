import React from 'react'
import './About.css'
import who_we_are from '../../assets/who_we_are.jpg'
import our_mission from '../../assets/our_mission.jpg'
import join_our_journey from '../../assets/join_our_journey.jpg'

const About = () => {
  return (
    <div className='about container'>
       <h2>About Us</h2>
       <div className="about-content">
          <img src={who_we_are} alt="" />
          <div className="about-content-text">
            <h3>Who We Are</h3>
            <p>Welcome to Lankan Crew Studios—your go-to destination for <b>high-quality, entertaining, and uniquely Sri Lankan content!</b> 
            We’re a passionate team of creators dedicated to producing <b>short films and behind-the-scenes stories</b> that capture the essence 
              of hollywood and Sri Lanka’s vibrant culture.
            </p>
          </div>
       </div>
       <div className="about-content reverse">
          <img src={our_mission} alt="" />
          <div className="about-content-text">
            <h3>Our Mission</h3>
            <p>Our goal is to <b>inspire, entertain, and connect with audiences worldwide.</b> Whether we’re showcasing hidden gems in Sri Lanka, 
            reviewing the latest gadgets, or collaborating with fellow creators, we strive to deliver fresh, creative, and relatable content 
            that keeps you coming back for more.</p>
          </div>
       </div>
       <div className="about-content">
          <img src={join_our_journey} alt="" />
          <div className="about-content-text">
            <h3>Join Our Journey</h3>
            <p>We’re just getting started, and the best is yet to come. <b>Subscribe to our Lankan Crew</b> and follow us on Facebook to stay 
            updated!</p>
          </div>
       </div>
    </div>
  )
}

export default About