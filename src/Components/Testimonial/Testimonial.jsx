import React, { useEffect, useRef, useState } from 'react';
import './Testimonial.css';
import { IoMdContact } from "react-icons/io";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Gayan Hemantha",
      position: "Follower",
      feedback: "Lankan Crew Studios never disappoints! Their videos are so engaging and well-edited. I look forward to every upload!"
    },
    {
      name: "Chethana Ranaweera",
      position: "Follower",
      feedback: "The way Lankan Crew tells stories is next level. Their cinematography and sound design make every video feel like a mini-movie!"
    },
    {
      name: "Dasun Nirmal",
      position: "Follower",
      feedback: "I’ve been following Lankan Crew since their first video, and their growth is inspiring. Keep up the amazing work!"
    },
    {
      name: "Devinda Samarakoon",
      position: "Follower",
      feedback: "Their content is so relatable and uniquely Sri Lankan. It’s refreshing to see such high-quality local productions!"
    },
    {
      name: "Heshan Nimantha",
      position: "Follower",
      feedback: "Working with Lankan Crew was a breeze! Their professionalism and creative vision made our collab a huge success."
    },
  ];

  const slider = useRef();
  const [tx, setTx] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);

  const updateCardsVisible = () => {
    if (window.innerWidth <= 600) setCardsVisible(1);
    else if (window.innerWidth <= 992) setCardsVisible(2);
    else setCardsVisible(3);
  };

  useEffect(() => {
    updateCardsVisible();
    window.addEventListener('resize', updateCardsVisible);
    return () => window.removeEventListener('resize', updateCardsVisible);
  }, []);

  const cardWidthPercent = 100 / cardsVisible;
  const maxIndex = testimonials.length - cardsVisible;

  const handlePrev = () => {
    if (tx < 0) {
      const newTx = tx + cardWidthPercent;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const handleNext = () => {
    const newTx = tx - cardWidthPercent;
    if (Math.abs(newTx / cardWidthPercent) <= maxIndex) {
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    } else {
      setTx(0);
      slider.current.style.transform = `translateX(0%)`;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [tx, cardsVisible]);

  return (
    <div className='testimonial container'>
      <h2>Testimonials</h2>
      <div className="carousel-wrapper">
        <button className='prev-button' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className="testimonial-carousel">
          <div className="carousel-track" ref={slider}>
            {testimonials.map((testimonial, index) => (
              <div
                className="carousel-card testimonial-card"
                key={index}
                style={{ flex: `0 0 ${cardWidthPercent}%` }}
              >
                <div className="testimonial-content">
                  <IoMdContact className='profile-icon' />
                  <div className="user-name-position">
                    <p className='name'>{testimonial.name}</p>
                    <p>{testimonial.position}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                  <p className="feedback">"{testimonial.feedback}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className='next-button' onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      <div className="testimonial-button">
        <button className='btn1' onClick={() => window.open('https://forms.gle/PK5Zgwa8eK5ccYfw7', '_blank')}>
          Feedback Now
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
