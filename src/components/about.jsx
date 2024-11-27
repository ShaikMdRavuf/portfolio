import React, { Component } from 'react'
import '../App.css'

 class About extends Component {
  render() {
    const skils=["Html", "Css" ,"Javascript" ,"React js", "Node js", "Express js","Mongodb"]
    const skil=skils.map(item=><li>{item}</li>)

    return (
 
      <section id='about'>
        <div id='info'>
          <h1 className='headink'>About Myself</h1>
          <p> I Am Passionate and innovative web developer dedicated to creating <br />
            dynamic , user-centric digital expriences . With a strong foundation in <br />
            moderen web technologies, i tranform complex challenges into elehant, efficient solitions
          </p>
          <div class="profile"></div>
        </div>
        <div id='bio'>
          <h1> Shaik Mohammad Ravuf | Full Stack Web Developer</h1>
          <h2 className='sub'>Professional Overview </h2>
          <p>I am a passionate and innovative web developer dedicated to creating dynamic, user-centric digital experiences.            With a strong foundation in modern web technologies, I transform complex challenges into elegant, efficient solutions.
          </p>
          <h2>Techinical Skills </h2>
          <span id='skil'>{skil}</span>
          <h2>Education</h2>
          <p>Bachelor of computer science | Kits College</p>
          <p>Graduation year: 2026</p>
        </div>
        <div>
          
        </div>
      </section>
    )
  }
}

export default About