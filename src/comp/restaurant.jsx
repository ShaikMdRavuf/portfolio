import React from 'react'

const restaurant = () => {
  return (
    <div>
      <div className='project-info'>
        <h1>Restaurant Management System</h1>
        <div className='project-img'>
          <img src="https://example.com/restaurant-image.jpg" alt="Restaurant Management System" />
        </div>
      </div>
      <div className='project-description'>
        <h2>Project Overview</h2>
        <ul>
          <li>This project involves the development of a comprehensive restaurant management system that streamlines operations, enhances customer experience, and improves overall efficiency.</li>
          <li>The system includes features for order management, inventory tracking, and customer relationship management.</li>
        </ul>
        <h2>Key Features</h2>
        <ul>
          <li>Order processing and tracking</li>
          <li>Table reservation management</li>
          <li>Inventory control</li>
          <li>Customer feedback system</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>React.js for frontend development</li>
          <li>Node.js and Express.js for backend services</li>
          <li>MongoDB for database management</li>
          <li>Bootstrap for responsive design</li>
        </ul>
        <h2>Challenges Faced</h2>
        <ul>
          <li>Integrating real-time order updates with the user interface</li>
          <li>Ensuring data consistency across multiple modules</li>
          <li>Implementing secure payment processing</li>
        </ul>
        <span><h2>Future Work</h2></span>
        <ul>
          <li>Adding mobile app support for customers to place orders remotely</li>
          <li>Implementing advanced analytics for better decision-making</li>
          <li>Expanding the system to include delivery management features</li>
        </ul>
      </div>
    </div>
  )
}

export default restaurant