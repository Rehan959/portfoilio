import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a 23-year-old experienced Full Stack Developer with a knack for building products that make a difference. 
              My expertise spans both frontend and backend technologies, enabling me to craft comprehensive solutions from the ground up.
            </p>
            <p>
              Throughout my career, I've been deeply involved in the startup ecosystem. I've worked with various startups, 
              embracing the fast-paced, innovative nature of these environments. This journey led me to found my own startup, 
              where I gained firsthand experience in every aspect of product development and business operations.
            </p>
            <p>
              During my high school years, I excelled in software development, earning the prestigious title of DUX (top student) 
              in this field. This early achievement laid the foundation for my passion and expertise in programming.
            </p>
            <p>
              When I'm not immersed in code, you'll find me experimenting in the kitchen or bringing ideas to life with my 3D printer. 
              I'm always creating, whether it's digital products or tangible objects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
