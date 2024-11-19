import React, { Component } from 'react'
import'../App.css'

class Projects extends Component {
  render() {
    return (
      <section id='projects'>
        <h1 className='headink'>projects</h1>
        <div className='project-container'>
            <div className='project'>
                <h1>Netflix clone</h1>
                <p>developed netflix clone website using Html and CSS</p>
            </div>
            <div className='project'>
                <h1>Autonomous tarctor</h1>
                <p>design and developed a Autonomous tractor using Robotics</p>
            </div>
             <div className='project'>
                <h1>College Attendance Mobile App</h1>
                <p>Created Mobile App that incrised Attendance tracking efficiency by 20%</p>
             </div>
        </div>
      </section>
    )
  }
}

export default Projects