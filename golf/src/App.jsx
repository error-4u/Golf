import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'
import Aboutus from './Components/Aboutus'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import Waitingfor from './Components/Waitingfor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <HeroSection />
      <Aboutus />
      <Services />
      <Testimonial />

      <Waitingfor />
      <Footer />
    </>
  )
}

export default App
