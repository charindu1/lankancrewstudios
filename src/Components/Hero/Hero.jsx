import React, { useEffect } from 'react'
import './Hero.css'
import big_logo from '../../assets/big_logo.png'
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet-async';

const Hero = () => {

  useEffect(() => {
    const tape = document.querySelector('.cinama-tape-boundary');
    const handleScroll = () => {
      const scroll = window.scrollY;
      tape.style.backgroundPositionX = `${-scroll * 0.5}px`; // Adjust 0.5 for speed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Lankan Crew - Home</title>
        <meta name="description" content="Lankan Crew - Discover, thrilling and entertaining thriller, horror, mystery, sci-fi, and comedy short films in Sri Lanka." />
        <meta name="keywords" content="Lankan Crew, Sri Lanka, short films, thriller, horror, mystery, sci-fi, comedy, films" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className='hero container'>
        <div className="hero-left">
          <h1>Wellcome <span>Lankan Crew</span></h1>
          <p>We create entertaining and informative content about thriller, horror, mystery, sci-fi, and comedy in Sri Lanka</p>
          <Link to='about' smooth={true} offset={-100} duration={500}><button className='btn1'>Explore More <IoMdArrowRoundForward/></button></Link>
        </div>
        <div className="hero-right">
          <img src={big_logo} alt="logo" />
        </div>
    </div>
    <div className="cinama-tape-boundary"></div>
    </>
  )
}

export default Hero