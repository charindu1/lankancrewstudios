import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer container'>
        <hr />
        <div className="footer-content">
            <div className="footer-left">
                <img src={logo} alt="big logo" />
                <p>Welcome to Lankan Crew Studios—your go-to destination for high-quality, entertaining, and uniquely Sri Lankan content!We’re 
                    a passionate team of creators dedicated to producing short films and behind-the-scenes stories that capture the essence 
                    of hollywood and Sri Lanka’s vibrant culture.
                </p>
            </div>
            <div className="footer-center">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to='hero' smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
                    <li><Link to='videos' smooth={true} offset={-100} duration={900}>Videos</Link></li>
                    <li><Link to='testimonial' smooth={true} offset={-100} duration={700}>Testimonials</Link></li>
                    <li><Link to='contact' smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
                </ul>
            </div>
            <div className="footer-right">
                <h4>Contact Info</h4>
                <ul className="contact-info">
                    <li><FaPhone className='phone' color='#03a700ff'/>+94 71 553 1465</li>
                    <li><IoLogoWhatsapp className='whatsapp' color='#05ff61ff'/>+94 71 553 1465</li>
                    <li><MdEmail className='email'/>lankancrew2003@gmail.com</li>
                </ul>
                <ul className='social-links'>
                    <li onClick={()=>window.open('https://www.youtube.com/@lankancrewstudios', '_blank')}><FaYoutube className='youtube' color='#ffffffff'/></li>
                    <li onClick={()=>window.open('https://www.facebook.com/share/176K6esK4p/', '_blank')}><FaFacebook className='facebook' color='#ffffffff'/></li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="copyright-text">
            <p>© 2025 Lankan Crew Studios. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer