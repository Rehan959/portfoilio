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
      skills: ['ReactJS', 'NextJS',  'React Native', 'ExpressJS']
    },
    {
      title: 'Backend',
      skills: ["Node.js","Express.js", "REST APIs", "WebSockets"]
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'SQL','Vercel']
    },
    {
      title: 'Tools',
      skills: ['CI/CD', 'Git', 'Docker', 'Kubernetes']
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
