import React, { useEffect, useRef } from 'react';
import './Testimonial.css';
import { IoMdContact } from "react-icons/io";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

  useEffect(() => {
    // Force update navigation after refs are assigned
  }, []);

  return (
    <div className='testimonial container'>
      <h2>Testimonials</h2>
      <div className="carousel-wrapper">

        <button ref={prevRef} className="prev-button"><FaChevronLeft /></button>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onInit={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-card testimonial-card">
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
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className="next-button"><FaChevronRight /></button>
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
