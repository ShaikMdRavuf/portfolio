import React from 'react'
import { Link } from 'react-router-dom'

const projects = () => {
  return (
    <div>
        <section>
        <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <h2>Autonomous Vehicle</h2>
          <p>Self-driving autonomous vehicles equipped with sensors, camera, and GPS.</p>
          <p>Helps reduce human effort and increases the effective lifespan in traffic.</p>
          <p><Link to="/projects/autonomous">Learn more</Link></p>
        </div>
        <div className='project-card'>
          <h2>Restaurant Management System</h2>
          <p>Reduces human effort and improves efficiency in restaurant management.</p>
          <p><Link to="/projects/restaurant">Learn more</Link></p>
        </div>
        <div className='project-card'>
          <h2>AI-powered Chat-based Application</h2>
          <p>This app integrates a chatbot within a web application to provide services like customer support.</p>
          <p><Link to="/projects/chat">Learn more</Link></p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default projects