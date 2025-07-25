import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Videos from './Components/Videos/Videos'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Videos/>
      <Testimonial/>
      <Contact/>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}

export default App