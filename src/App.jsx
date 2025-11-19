import React from 'react'
import Hero from './sections/Hero.jsx'
import NavBar from './sections/NavBar.jsx'
import gsap from 'gsap'
import { ScrollTrigger , ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger , ScrollSmoother);
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  )
}

export default App