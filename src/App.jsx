import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Videos from './Components/Videos/Videos'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer/Footer'
import Preloader from './Components/Preloader/Preloader'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  },[])


  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Videos />
          <Testimonial />
          <Contact />
          <ToastContainer />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App