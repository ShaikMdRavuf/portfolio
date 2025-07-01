import React from 'react'

const chat = () => {
  return (
    <div>
      <div className='project-info'>
        <h1>Chat Application</h1>
        <div className='project-img'>
          <img src="https://example.com/chat-image.jpg" alt="Chat Application" />
        </div>
      </div>
      <div className='project-description'>
        <h2>Project Overview</h2>
        <ul>
          <li>This project involves the development of a real-time chat application that allows users to communicate seamlessly.</li>
          <li>The application supports one-on-one and group chats, file sharing, and message notifications.</li>
        </ul>
        <h2>Key Features</h2>
        <ul>
          <li>Real-time messaging</li>
          <li>User authentication</li>
          <li>File sharing capabilities</li>
          <li>Group chat functionality</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>React.js for frontend development</li>
          <li>Node.js and Socket.io for backend services</li>
          <li>MongoDB for database management</li>
          <li>Bootstrap for responsive design</li>
        </ul>
        <h2>Challenges Faced</h2>
        <ul>
          <li>Implementing real-time communication efficiently</li>
          <li>Ensuring data security and user privacy</li>
          <li>Handling concurrent users effectively</li>
        </ul>
        <span><h2>Future Work</h2></span>
        <ul>
          <li>Adding video call functionality</li>
          <li>Implementing end-to-end encryption for messages</li>
          <li>Expanding the application to support mobile devices</li>
        </ul>
      </div>
    </div>
  )
}

export default chat