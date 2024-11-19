import React, { Component } from 'react'
import '../App.css'

class Contact extends Component {
  render() {
    return (
      <section id='contact'>
        <h1 className='headink'> Contact Me </h1>
        <div>
        <form className='form'>
          <input type="text" 
          className="name"
          name="name" 
          placeholder='Enter your name'  required/>

          <input type="email" 
          name="email" 
          className='email'
          placeholder='Enter your email' required/>

          <textarea name="text" 
          className='text'
          placeholder='Enter your commint' 
          cols='10' required />

          <button type='submit ' className='submit'> <a href="emailto:22jr1a05h9@gmail.com?subject=Hello&body=How%20are%20you?">Submit</a></button>

        </form>
        </div>
      </section>
    )
  }
}

export default Contact