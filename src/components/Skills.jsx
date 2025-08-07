import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Rust']
    },
    {
      title: 'Frameworks',
      skills: ['ReactJS', 'NextJS', 'Tauri', 'React Native', 'ExpressJS', 'Flask', 'Django', 'ASP.Net']
    },
    {
      title: 'Backend',
      skills: ['Node.js', '.NET', 'REST APIs', 'Microservices']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Elasticsearch']
    },
    {
      title: 'Practices',
      skills: ['Microservices', 'Microfrontend', 'Agile', 'Git']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
