import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Want to Work Together?</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>oskar@example.com</p>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>Melbourne, Australia</p>
              </div>
              <div className="contact-item">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/oskarfranttiglen" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/oskarfranttiglen
                </a>
              </div>
              <div className="contact-item">
                <h3>GitHub</h3>
                <a href="https://github.com/oskarfranttiglen" target="_blank" rel="noopener noreferrer">
                  github.com/oskarfranttiglen
                </a>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <button className="btn btn-primary">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
