import React from 'react'
import './Hero.css'
import ResumePDF from '../assets/resume.pdf'


export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
 const openResume = () => {
    window.open(ResumePDF, '_blank')
  }
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Raihanullah Shamsi</h1>
          <h2 className="hero-subtitle">Full Stack Web Developer</h2>
          <p className="hero-location">📍 Bengaluru, India 🇮🇳</p>
          <p className="hero-tagline">
            Building Real Products For Real Clients, Not Just More Projects
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
            <button 
              className="btn btn-secondary"
              onClick={openResume}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
