import React, { Component } from 'react'
import '../App.css'
import Img from '../images/background.png'

class Home extends Component {
  render() {
    return (
      <section id='home'>
        <div className='title'>
            <p>Welcome to my portfolio , i am </p>
            <h1>Shaik <br/>Mohammad Ravuf</h1>
            <h2>Web developer</h2>
        </div>
        <img src={Img} alt='' className='bg'></img>
      </section>
    )
  }
}

export default Home