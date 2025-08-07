import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Juvare',
      position: 'Front End Web Developer',
      location: 'Melbourne, Australia',
      duration: 'March 2025 - Present (3 months)',
      description: [
        'Configure and customize WebEOC framework solutions to meet client requirements for emergency/incident response systems.',
        'Liaise directly with clients to gather requirements and provide technical implementation support across Australia and New Zealand.',
        'Create detailed system configuration documentation and requirements specifications for Emergency/Incident Response processes.',
        'Provide Tier 2 technical support and assist in Emergency Operations Centre (EOC) activations when required.',
        'Develop and implement process reviews, online training content, and exercise assessments.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'REST APIs', 'SQL Server', 'WebEOC', 'Technical Implementation', 'Business Analysis']
    },
    {
      company: 'Gluco Health',
      position: 'Co-Founder & Technical Lead',
      location: 'Melbourne, Victoria',
      duration: 'February 2025 - Present (4 months)',
      description: [
        'Leading development of GlucoseScan, an innovative mobile application helping diabetic individuals manage their glucose response to foods.',
        'Architecting and implementing a cross-platform mobile application using React Native and Expo.',
        'Designing and developing machine learning models to analyze and predict glucose responses to different food combinations.',
        'Working closely with healthcare professionals and diabetic individuals to ensure the application meets user needs and medical standards.'
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'Machine Learning', 'Healthcare Tech', 'Mobile Development']
    },
    {
      company: 'Self-Employed',
      position: 'Freelance Full-Stack Web Developer',
      location: 'Melbourne, Victoria',
      duration: '2022 - Present (3 years 5 months)',
      description: [
        'Successfully completed 20+ projects ranging from basic dashboards to SEO-optimized landing pages to fully-fledged applications.',
        'Delivered custom solutions tailored to client needs, ensuring high performance and user experience.',
        'Worked with modern web technologies including React, Next.js, and Supabase to build scalable applications.',
        'Managed end-to-end project lifecycle, including planning, development, and deployment.'
      ],
      technologies: ['React', 'Next.js', 'Supabase', 'TypeScript', 'Node.js', 'Full-Stack Development']
    },
    {
      company: 'Shifti',
      position: 'Founder & Lead Developer',
      location: 'Melbourne, Victoria',
      duration: 'January 2023 - January 2024 (1 year)',
      description: [
        'Led the development of an innovative AI-powered shift scheduling platform for the hospitality industry.',
        'Architected and implemented a scalable microservices-based backend using Node.js and GraphQL.',
        'Designed and developed a responsive front-end application using React and Next.js.',
        'Integrated advanced machine learning algorithms for intelligent shift allocation and demand forecasting.',
        'Managed a team of developers, fostering a culture of innovation and continuous improvement.'
      ],
      technologies: ['NextJS', 'Supabase', 'React Native', 'Expo', 'Machine Learning', 'Tauri']
    },
    {
      company: 'Preezie',
      position: 'Software Development Intern',
      location: 'Melbourne, Victoria',
      duration: 'November 2022 - March 2023 (4 months)',
      description: [
        'Demonstrated proficiency in Angular 4, React, .NET, and microservices.',
        'Developed effective solutions to complex issues and debugged code efficiently.',
        'Adapted to fast-paced development environments and worked with both legacy and modern technologies.',
        'Collaborated with cross-functional teams, enhancing communication and teamwork skills.'
      ],
      technologies: ['Angular 4', 'React', '.NET', 'Microservices']
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-company">
                  <h3 className="company-name">{exp.company}</h3>
                  <h4 className="position-title">{exp.position}</h4>
                  <p className="location">{exp.location}</p>
                  <p className="duration">{exp.duration}</p>
                </div>
              </div>
              <div className="experience-content">
                <ul className="description-list">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
