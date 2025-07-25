import React, { useEffect, useRef, useState } from 'react'
import './Videos.css'
import trailler from '../../assets/trailler.jpeg'
import movie from '../../assets/movie.jpeg'
import behind_the_scene from '../../assets/behind_the_scene.jpeg'
import black_head_trailler from '../../assets/black_head_trailler.jpg'
import black_head_movie from '../../assets/black_head_movie.jpg'
import crossroad_delimma_movie from '../../assets/crossroad_delimma_movie.jpg'
import crossroad_delimma_trailler from '../../assets/crossroad_delimma_trailler.jpg'
import interference_movie from '../../assets/interference_movie.jpg'
import interference_trailler from '../../assets/interference_trailler.jpg'
import possession_movie from '../../assets/possession_movie.jpg'
import possession_trailler from '../../assets/possession_trailler.jpg'
import repeatition_movie from '../../assets/repeatition_movie.jpg'
import repeatition_trailler from '../../assets/repeatition_trailler.jpg'
import play_icon from '../../assets/play_icon.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Videos = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const thumbnails = [
    {
        img: possession_movie,
        url: 'https://youtu.be/lNdNXPC7khY?si=RXX5ds5wnVX4hTb-'
    },
    {
        img: possession_trailler,
        url: 'https://youtu.be/lnUVO79EVcA?si=z3cKFer9QVl_SNbm'
    },
    {
        img: crossroad_delimma_movie,
        url: 'https://youtu.be/o6TIFsg1JnY?si=V1-Cg7FDNxpacjrE'
    },
    {
        img: crossroad_delimma_trailler,
        url: 'https://youtu.be/6M99B-rczec?si=6o9byrc6hFTioRBc'
    },
    {
        img: interference_movie,
        url: 'https://youtu.be/ncUSCJvxyFI?si=Hiww-3ToWo--n-xA'
    },
    {
        img: interference_trailler,
        url: 'https://youtu.be/OmQ7D_yWtqU?si=1DRpdQ2vRRoFUXDN'
    },
    {
        img: repeatition_movie,
        url: 'https://youtu.be/-jiHPuoOD64?si=xole5HEaDwFm27TK'
    },
    {
        img: repeatition_trailler,
        url: 'https://youtu.be/LvB4CJSUN50?si=XNgkgK9WnToQ6XAG'
    },
    {
        img: black_head_movie,
        url: 'https://youtu.be/amict8c5GQo?si=nCn4CuJAIr-rUfrX'
    },
    {
        img: black_head_trailler,
        url: 'https://youtu.be/4E0J9VdTUgA?si=eIFfBYcteya7v5xw'
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

  useEffect(()=>{
    updateCardsVisible();
    window.addEventListener('resize', updateCardsVisible);
    return () => window.removeEventListener('resize', updateCardsVisible);
  },[]);

  const cardWidthPercent = 100 / cardsVisible;
  const maxIndex = thumbnails.length - cardsVisible;

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
    }
    else {
        setTx(0);
        slider.current.style.transform = `translateX(0%)`;
    }
  };

  // Inside the component
    useEffect(() => {
    const timer = setInterval(() => {
        handleNext();
    }, 4000); // every 4 seconds

    return () => clearInterval(timer); // cleanup on unmount
    }, [tx]); // re-run only when tx changes


  return (
    <div className='videos container'>
        <h2>Our Videos</h2>
        <div className="video-playlist-cards">
            <div className="video-playlist-card">
                <img src={trailler} alt="trailer" onClick={()=>window.open('https://www.youtube.com/watch?v=4E0J9VdTUgA&list=PLiOGZBzTyY1whtBsmu17nBQKmmO1QNfzW', '_blank')}/>
                <p>Movie Traillers</p>
            </div>
            <div className="video-playlist-card">
                <img src={movie} alt="movie" onClick={()=>window.open('https://www.youtube.com/watch?v=amict8c5GQo&list=PLiOGZBzTyY1x7N65vFs1jJE0AfjwjGd2l&pp=0gcJCV8EOCosWNin', '_blank')}/>
                <p>Movies</p>
            </div>
            <div className="video-playlist-card">
                <img src={behind_the_scene} alt="bts" onClick={()=>window.open('https://www.youtube.com/watch?v=wfzSaHWb2AQ&list=PLiOGZBzTyY1wVXw_nZ3rmLjO2bpowhhRp', '_blank')}/>
                <p>Behind The Scenes</p>
            </div>
        </div>
        <h4>Quick Picks</h4>
        <div className="carousel-wrapper">
           <button className='prev-button' onClick={handlePrev}>
               <FaChevronLeft/>
           </button>
                <div className="video-thumbnail-carousel">
                    <div className="carousel-track" ref={slider}>
                        {thumbnails.map((item, index)=>(
                            <div className="carousel-card" key={index} onClick={()=>window.open(item.url, "_blank")} style={{ flex: `0 0 ${cardWidthPercent}%` }}>
                                <img src={item.img} className='thumbnail' alt="movie thumbnail" />
                                <img src={play_icon} className='play-icon' alt="play icon" />
                            </div>
                        ))}
                    </div>
                </div>
           <button className='next-button' onClick={handleNext}>
               <FaChevronRight/>
           </button>    
        </div>
    </div>
  )
}

export default Videos