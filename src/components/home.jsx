import React, { Component } from 'react'
import '../App.css'

class Home extends Component {
  render() {
    return (
      <section id='home'>
        <div className='title'>
            <p>Welcome to my portfolio , i am </p>
            <h1>Shaik <br/>Mohammad Ravuf</h1>
            <p>Web developer</p>
        </div>
        {/* <img src={Img} alt='' className='bg'></img> */}
      </section>
    )
  }
}

export default Home