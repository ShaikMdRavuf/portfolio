import React from 'react'
import eagle from './../img/eagle.jpg'
import resume from '../img/RavufResume.pdf'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <img src={eagle} alt="eagle logo" />
        </div>

        <div className='nav-items'>
          <ul>
            {/* <li><Link to='/home'>Home</Link></li> */}
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            {/* <li><Link to='/contact'>Contact</Link></li> */}
          </ul>
        </div>

        <div className='nav-btn'>
          <button><FontAwesomeIcon icon={faCircleDown} /><a href={resume} download > Download Resume</a>  </button> 
        </div>
        
      </div>
    </div>
  )
}

export default navbar