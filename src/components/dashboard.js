import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Logo from '../images/logo2.png'
import '../App.css'

class Dashboard extends Component {
  render() {
    return (
      <nav className='top'>
        <img src={Logo} alt='logoimage' className='logo' />
        <div className='navbar'>
          <Link className='item' activeClass='active' to='home' smooth={true} spy={true} offset={-100}>Home</Link>
          <Link className='item' activeClass='active' to='about' smooth={true} spy={true} offset={-100}>About</Link>
          <Link className='item' activeClass='active' to='projects' smooth={true} spy={true} offset={-100}>Projects</Link>
          {/* <Link className='item' activeClass='active' to='home' smooth={true} spy={true} offset={-100}>Contact</Link> */}
        </div>
        {/* <button className='btn'>Contact Me</button> */}
      </nav>
    )
  }
}

export default Dashboard
