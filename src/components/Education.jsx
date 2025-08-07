import React from 'react'
import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'Deakin University',
      location: 'Burwood, Victoria',
      degree: 'Bachelor of Computer Science',
      duration: 'July 2022 - Present',
      courses: [
        'SIT232 Object-Oriented Development',
        'SIT292 Linear Algebra for Data Analytics',
        'SIT223 Professional Practice in I.T.',
        'SIT221 Data Structures & Algorithms',
        'SIT215 Computational Intelligence',
        'SIT202 Computer Networks',
        'SIT320 Advanced Algorithms',
        'SIT306 IT Placement',
        'SIT374 Project Design',
        'SIT216 User Centered Design',
        'SIT305 Mobile Application Development',
        'SIT331 Full Stack Development: Secure Backend Services',
        'SIT378 Team Project(B)',
        'SIT315 Concurrent & Distributed Programming',
        'SIT120 Introduction to Responsive Web Apps',
        'SIT313 Full Stack Development: Secure Frontend Applications'
      ]
    },
    {
      institution: 'Deakin College',
      location: 'Burwood, Victoria',
      degree: 'Diploma of Information Technology',
      duration: 'March 2021 - March 2022',
      courses: [
        'SIT102 Introduction to Programming',
        'SIT103 Data and Information Management',
        'SIT111 Computer Systems',
        'SIT112 Data Science Concepts',
        'SIT113 Cloud Computing',
        'SIT123 Data Capture Technologies',
        'SIT124 Exploring I.T.',
        'SIT192 Discrete Mathematics'
      ]
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3 className="institution-name">{edu.institution}</h3>
                <h4 className="degree-title">{edu.degree}</h4>
                <p className="education-location">{edu.location}</p>
                <p className="education-duration">{edu.duration}</p>
              </div>
              <div className="courses-section">
                <h5 className="courses-title">Courses:</h5>
                <ul className="courses-list">
                  {edu.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
