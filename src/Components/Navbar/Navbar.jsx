import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  // close the navbar after clicked outside
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (mobileMenu && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenu(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenu]);

  return (
    <>
        {mobileMenu && <div className="overlay" onClick={() => setMobileMenu(false)}></div>}
        
        <div ref={navbarRef} className={`navbar container ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <Link to='hero' smooth={true} offset={-100} duration={500}><img src={logo} alt="logo" /></Link>
            </div>
            <div className={`navbar-menu ${mobileMenu ? 'mobile-active' : ''}`}>
                <ul>
                    <li><Link to='hero' smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
                    <li><Link to='videos' smooth={true} offset={-100} duration={900}>Videos</Link></li>
                    <li><Link to='testimonial' smooth={true} offset={-100} duration={700}>Testimonials</Link></li>
                </ul> 
            </div>
            <div className={`navbar-action ${mobileMenu ? 'mobile-active' : ''}`}>
                <ul>
                    <li><Link to='contact' smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
                    <li><button className='btn1' onClick={()=>window.open('https://www.youtube.com/@lankancrewstudios','_blank')}>Subscribe Us</button></li>
                </ul>
            </div>
            <GiHamburgerMenu color='white' className='hamburger-icon' onClick={toggleMenu}/>
        </div>
    </>
  )
}

export default Navbar