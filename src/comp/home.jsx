import React from 'react'
import Navbar from './navbar'
import profile from './../img/profile.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const home = () => {
  return (
    <div>
      <section id="home">
        <Navbar />
        <div className="home-content">
          <div class="intro-text">
            <h1>Welcome to My Portfolio</h1>
            <h2>
              I’m <span>Shaik Mohammad Ravuf</span>
            </h2>
            <p>Full-Stack Developer | AI Enthusiast | Innovator</p>
            <div className="social-icons">
              <a href="https://github.com/shaikmdravuf"  target="_blank"  rel="noopener noreferrer" >  <FaGithub />  </a>

              <a href="https://www.linkedin.com/in/shaik-mohammad-ravuf-25b2b3332/"  target="_blank" rel="noopener noreferrer" >  <FaLinkedin />{" "}  </a>

              <a href="mailto:shaikmohammadravuf@email.com"> <FaEnvelope /> </a>

            </div>
          </div>
          <div className="home-image">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default home