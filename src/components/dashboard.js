import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './dashboard.css'
import Logo from '../images/logo2.png'

class Dashboard extends Component {
  render() {
    return (
      <nav className='box1'>
        <img src={Logo} alt='logoimage' className='logo' />
        <div className='navbar'>
          <Link className='item'>Home</Link>
          <Link className='item'>About</Link>
          <Link className='item'>Projects</Link>
          <Link className='item'>Contact</Link>
        </div>
        <button><i class="fa fa-lightbulb-o" aria-hidden="true"></i></button>
      </nav>
    )
  }
}

export default Dashboard
