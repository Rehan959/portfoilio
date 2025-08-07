import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: 'HomeGame: Home Poker Analytics Manager',
      description: [
        'Developed a feature-rich mobile application for managing and analyzing home poker games using React Native and Supabase',
        'Created an advanced analytics engine providing insights into gameplay, win rates, and improvement areas',
        'Implemented offline mode with data synchronization and integrated third-party APIs for odds calculation'
      ],
      technologies: ['Supabase', 'React Native', 'Expo'],
      category: 'personal',
      liveDemo: '#',
      viewCode: '#'
    },
    {
      title: 'BrewPoints: Cafe Loyalty App',
      description: [
        'Developed a full-stack loyalty app solution for independent cafes, featuring React Native mobile apps, Node.js backend with GraphQL API, and MongoDB database',
        'Integrated with various Point of Sale (POS) systems using a flexible adapter pattern',
        'Implemented real-time order tracking and notifications using Socket.io',
        'Designed a customizable loyalty program system with analytics dashboard for cafe owners'
      ],
      technologies: ['React Native', 'Expo', 'Node.js', 'GraphQL', 'MongoDB'],
      category: 'personal',
      liveDemo: '#',
      viewCode: '#'
    },
    {
      title: 'Quantum-Resistant Password Manager',
      description: [
        'Developed a high-performance, cryptographically secure password manager using Rust and post-quantum algorithms',
        'Designed a zero-knowledge architecture, enhancing user privacy and security',
        'Utilized efficient data structures (B-trees) for optimized password storage and retrieval',
        'Implemented advanced features including 2FA, secure password sharing, and encrypted backups'
      ],
      technologies: ['Rust', 'Post-Quantum Cryptography'],
      category: 'personal',
      liveDemo: '#',
      viewCode: '#'
    },
    {
      title: 'InvoiceNinja: Freelancer Invoicing App',
      description: [
        'Developed a user-friendly invoicing application tailored for freelancers',
        'Implemented features such as invoice generation, expense tracking, and client management',
        'Integrated payment gateways for seamless online payments',
        'Created insightful financial reports and dashboards for business analysis'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'client',
      liveDemo: '#',
      viewCode: '#'
    },
    {
      title: 'FitQuest: Interactive Workout Companion',
      description: [
        'Built a gamified workout application to make fitness routines more engaging',
        'Designed personalized workout plans based on user goals and fitness levels',
        'Implemented progress tracking and achievement system to boost user motivation',
        'Integrated with wearable devices for real-time workout data synchronization'
      ],
      technologies: ['React Native', 'Firebase', 'TensorFlow.js'],
      category: 'personal',
      liveDemo: '#',
      viewCode: '#'
    },
    {
      title: 'StudyBuddy: Assignment Planner & Prior Learning Tracker',
      description: [
        'Created a comprehensive study management tool for students',
        'Developed features for assignment planning, deadline tracking, and study session scheduling',
        'Implemented a prior learning section to track and review previously learned material',
        'Integrated with popular calendar apps for seamless schedule syncing'
      ],
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL'],
      category: 'personal',
      liveDemo: '#',
      viewCode: '#'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveFilter('personal')}
          >
            Personal Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'client' ? 'active' : ''}`}
            onClick={() => setActiveFilter('client')}
          >
            Client Projects
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-category ${project.category}`}>
                  {project.category === 'personal' ? 'Personal' : 'Client'}
                </span>
              </div>
              
              <div className="project-description">
                <ul>
                  {project.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.viewCode} className="project-link">
                  View Code
                </a>
                <a href={project.liveDemo} className="project-link">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
