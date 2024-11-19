import React, { Component } from 'react'
import '../App.css'
import Car from'../images/car.jpg'

 class About extends Component {
  render() {
    return (
      <section id='about'>
        <h1>About Myself</h1>
        <div className='about-container'>
          <div><img src={Car} alt="car" className=''/></div>
          <div className='about-content'>
            <p>i am passionate developer with a keen interest in creating innovative web applications
              I have strong foundation in Html .css and javascript
              and i always eager to learn new technologies
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About