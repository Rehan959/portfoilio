import React from 'react'
import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'St. Francis College (Autonomous)',
      location: 'Bengaluru, India',
      degree: 'Bachelor of Computer Applications (BCA) — SEP Batch',
      duration: 'July 2024 - Present',
      courses: [
        'Programming Foundations with Python',
        'Data Structures & Algorithms',
        'Database Management Systems (SQL + ER Modeling)',
        'Computer Networks & Internet Fundamentals',
        'Operating Systems Concepts',
        'Object-Oriented Programming (Java)',
        'Web Technologies (HTML, CSS, JavaScript)',
        'Software Engineering & Agile Practices',
        'Discrete Mathematics',
        'Linear Algebra & Calculus Basics',
        'Professional Communication & Ethics',
        'Elective: Introduction to Data Science'
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
