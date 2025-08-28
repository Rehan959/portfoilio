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
              Hi! I'm an 18-year-old, enthusiastic and hardworking developer currently pursuing a Bachelor of Computer Applications (BCA)
              at St. Francis College (Autonomous), Bengaluru — SEP batch. I love turning ideas into clean, user-friendly web experiences.
            </p>
            <p>
              My aspiration is to grow as a web developer and full‑stack engineer. I'm actively sharpening my frontend skills (React, modern
              CSS) and backend fundamentals (Node.js/Express, REST APIs, databases), while building projects that strengthen my problem‑solving
              and product thinking.
            </p>
            <p>
              I bring energy, curiosity, and consistency to everything I do. I enjoy learning fast, collaborating with teams, and shipping
              features that make a real impact. I'm always open to exciting projects, internships, and opportunities to learn by building.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
