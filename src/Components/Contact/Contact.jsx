import React from 'react'
import './Contact.css'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2ed004eb-24f8-4a84-b009-8d185f5b8122");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form Submitted Successfully!", { position: "top-center" });
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                toast.error(` ${data.message}`, { position: "top-center" });
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Something went wrong. Please try again!", { position: "top-center" });
            setResult("Error sending message");
        }
  };

  return (
    <div className='contact container'>
        <h2>Contact Us</h2>
        <div className="contact-box">
            <div className="contact-left">
            <div className="social-intro">
                <h3>Get In Touch</h3>
                <p>We’d love to hear from you! Whether you're a fan, a potential collaborator, or a brand looking to work with us, reach out 
                    via social media or fill out the form. Let’s create something amazing together!</p>
            </div>
            <div className="social-links">
                <ul>
                    <li onClick={()=>window.open('https://www.youtube.com/@lankancrewstudios', '_blank')}><FaYoutube className='social-icon' color='#FF0000'/> LankanCrewStudios</li>
                    <li onClick={()=>window.open('https://www.facebook.com/share/176K6esK4p/', '_blank')}><FaFacebook className='social-icon' color='#1877F2'/> LankanCrewStudios</li>
                    <li><MdEmail className='social-icon'/>lankancrew2003@gmail.com</li>
                </ul>
            </div>
            </div>
            <div className="contact-right">
                <form onSubmit={onSubmit}>
                    <input type="hidden" name="source" value="LankanCrew Website" />
                    <input type="hidden" name="subject" value="[LankanCrew] New Contact Form Message" />
                    <div className="name-email">
                        <input type="text" name='name' placeholder='Name' required/>
                        <input type="email" name='email' placeholder='Email' required/>
                    </div>
                    <input type="text" name='subject' placeholder='Subject (Optional)'/>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button className='btn1' type='submit'>Submit Now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact