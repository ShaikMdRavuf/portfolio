import React from 'react'
import { Link } from 'react-router-dom'

const certifications = () => {
  return (
    <div>
        <section>
            <h2 className='certifications'>Certifications</h2>
            <div className='certification-list'>
                <div className='certification-item'>
                    <p>Internship - @Syncronota Tech Pvt Ltd.</p>
                    {/* <p><Link to="/certificate-internship-syncronota">view certificate</Link></p> */}
                </div>
                <div className='certification-item'>
                    <p>MERN stack - @Code Tantra Tech Pvt Ltd.</p>
                    {/* <p><Link to="/certificate-mern-stack-code-tantra">view certificate</Link></p> */}
                </div>
                <div className='certification-item'>
                    <p>Full stack - @Mind Sparc Tech Pvt Ltd.</p>
                    {/* <p><Link to="/certificate-full-stack-mind-sparc">view certificate</Link></p> */}
                </div>
                <div className='certification-item'>
                    <p>Introduction to java programming - @Hacker Rank </p>
                    {/* <p><Link to="/certificate-introduction-java-programming-hacker-rank">view certificate</Link></p> */}
                </div>

                <div className='certification-item'>
                <p><Link to="/all_certificates">view certificates</Link></p>
                </div>

            </div>
        </section>
    </div>
  )
}

export default certifications