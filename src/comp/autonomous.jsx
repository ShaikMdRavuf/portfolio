import React from 'react'
import vehicle from '../img/IMG20240420161343.jpg';

const autonomous = () => {
  return (
    <div>
      <div className='project-info'>
        <h1>Autonomous Vehicle</h1>
        <div className='project-img'>
          <img src={vehicle} alt="Autonomous Vehicle" />
        </div>

      </div>
      <div className='project-description'>
        <h2>Project Overview</h2>
        <ul>
          <li>This project focuses on the development of an autonomous vehicle capable of navigating through various terrains using advanced sensors and machine learning algorithms.</li>
          <li>The vehicle is designed to operate in real-time, making decisions based on environmental data.</li>
         </ul>
         <h2>Key Features</h2>
         <ul>
           <li>Obstacle detection</li>
           <li>Path planning</li>
           <li>Adaptive control systems</li>
         </ul>
          <h2>Technologies Used</h2>
          <ul>
            <li>Python</li>
            <li>OpenCV</li>
            <li>TensorFlow</li>
            <li>ROS (Robot Operating System)</li>
          </ul>
          <h2>Challenges Faced</h2>
          <ul>
            <li>Ensuring real-time processing of sensor data</li>
            <li>Developing robust algorithms for dynamic environments</li>
            <li>Testing in various weather conditions</li>
          </ul>
          <span><h2>Future Work</h2></span>
          <ul>
            <li>Enhancing the vehicle's AI capabilities for better decision-making</li>
            <li>Integrating more sensors for improved navigation</li>
            <li>Expanding the testing scenarios to include urban environments</li>
          </ul>
        </div>
    </div>
  );
}

export default autonomous