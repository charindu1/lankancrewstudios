import React, { useRef } from 'react';
import './Videos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import trailler from '../../assets/trailler.jpeg';
import movie from '../../assets/movie.jpeg';
import behind_the_scene from '../../assets/behind_the_scene.jpeg';
import black_head_trailler from '../../assets/black_head_trailler.jpg';
import black_head_movie from '../../assets/black_head_movie.jpg';
import crossroad_delimma_movie from '../../assets/crossroad_delimma_movie.jpg';
import crossroad_delimma_trailler from '../../assets/crossroad_delimma_trailler.jpg';
import interference_movie from '../../assets/interference_movie.jpg';
import interference_trailler from '../../assets/interference_trailler.jpg';
import possession_movie from '../../assets/possession_movie.jpg';
import possession_trailler from '../../assets/possession_trailler.jpg';
import repeatition_movie from '../../assets/repeatition_movie.jpg';
import repeatition_trailler from '../../assets/repeatition_trailler.jpg';
import play_icon from '../../assets/play_icon.png';

const Videos = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const thumbnails = [
    { img: possession_movie, url: 'https://youtu.be/lNdNXPC7khY?si=RXX5ds5wnVX4hTb-' },
    { img: possession_trailler, url: 'https://youtu.be/lnUVO79EVcA?si=z3cKFer9QVl_SNbm' },
    { img: crossroad_delimma_movie, url: 'https://youtu.be/o6TIFsg1JnY?si=V1-Cg7FDNxpacjrE' },
    { img: crossroad_delimma_trailler, url: 'https://youtu.be/6M99B-rczec?si=6o9byrc6hFTioRBc' },
    { img: interference_movie, url: 'https://youtu.be/ncUSCJvxyFI?si=Hiww-3ToWo--n-xA' },
    { img: interference_trailler, url: 'https://youtu.be/OmQ7D_yWtqU?si=1DRpdQ2vRRoFUXDN' },
    { img: repeatition_movie, url: 'https://youtu.be/-jiHPuoOD64?si=xole5HEaDwFm27TK' },
    { img: repeatition_trailler, url: 'https://youtu.be/LvB4CJSUN50?si=XNgkgK9WnToQ6XAG' },
    { img: black_head_movie, url: 'https://youtu.be/amict8c5GQo?si=nCn4CuJAIr-rUfrX' },
    { img: black_head_trailler, url: 'https://youtu.be/4E0J9VdTUgA?si=eIFfBYcteya7v5xw' },
  ];

  return (
    <div className='videos container'>
      <h2>Our Videos</h2>

      <div className="video-playlist-cards">
        <div className="video-playlist-card">
          <img src={trailler} alt="trailer"
            onClick={() => window.open('https://www.youtube.com/watch?v=4E0J9VdTUgA&list=PLiOGZBzTyY1whtBsmu17nBQKmmO1QNfzW', '_blank')} />
          <p>Movie Trailers</p>
        </div>
        <div className="video-playlist-card">
          <img src={movie} alt="movie"
            onClick={() => window.open('https://www.youtube.com/watch?v=amict8c5GQo&list=PLiOGZBzTyY1x7N65vFs1jJE0AfjwjGd2l&pp=0gcJCV8EOCosWNin', '_blank')} />
          <p>Movies</p>
        </div>
        <div className="video-playlist-card">
          <img src={behind_the_scene} alt="bts"
            onClick={() => window.open('https://www.youtube.com/watch?v=wfzSaHWb2AQ&list=PLiOGZBzTyY1wVXw_nZ3rmLjO2bpowhhRp', '_blank')} />
          <p>Behind The Scenes</p>
        </div>
      </div>

      <h4>Quick Picks</h4>

      <div className="carousel">

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
              nextEl: nextRef.current,
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
            className="video-swiper"
        >
            {thumbnails.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="carousel-card" onClick={() => window.open(item.url, "_blank")}>
                  <img src={item.img} className='thumbnail' alt="movie thumbnail" />
                  <img src={play_icon} className='play-icon' alt="play icon" />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>

        <button ref={nextRef} className="next-button"><FaChevronRight /></button>

      </div>
    </div>
  );
};

export default Videos;
